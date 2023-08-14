import React from 'react';
import AuthToDoLogo from 'Components/ToDoLogo/AuthToDoLogo';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import { formDataSignIn, formDataSignUp } from '../../api/api';
import './stylesAuth/auth.scss';

interface AuthModalProps {
  handleAuthType: (e: React.FormEvent<HTMLButtonElement>) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  type: string;
  title: string;
  change: string;
}

const AuthModal = ({
  handleAuthType,
  type,
  title,
  change,
  email,
  setEmail,
  password,
  setPassword,
}: AuthModalProps) => {
  const [activeToDo, setActiveToDo] = useRecoilState(isActiveToDo);

  const navigate = useNavigate();

  const signIn = useMutation('formDataSignIn', formDataSignIn, {
    onSuccess: ({ token }) => {
      localStorage.setItem('access_token', token);
      alert('SUCCESS LOGIN');
      navigate('/todos');
    },
  });

  const signUp = useMutation('formDataSignUp', formDataSignUp, {
    onSuccess: () => {
      alert('SUCCESS SIGNUP');
      location.reload();
    },
  });

  const handleSignUP = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signUp.mutate({ email: email, password: password });
  };

  const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn.mutate({ email: email, password: password });
  };

  const onActiveButton = () => {
    return email.includes('@') && email.includes('.') && password.length >= 8
      ? setActiveToDo(true)
      : setActiveToDo(false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className="auth">
      <AuthToDoLogo />
      <section className="authBox">
        <form className="authContent">
          <div className="authLogoBox">
            <header className={activeToDo ? 'activeAuthLogo' : 'authLogo'}>
              {title}
            </header>
          </div>
          <AuthInput
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassWord={onChangePassWord}
            onActiveButton={onActiveButton}
          />
          <AuthButton
            type={type}
            handleAuthType={handleAuthType}
            title={title}
            handleSignUp={handleSignUP}
            handleSignIn={handleSignIn}
            change={change}
          />
        </form>
      </section>
    </div>
  );
};

export default AuthModal;
