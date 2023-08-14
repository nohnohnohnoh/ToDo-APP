import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import AuthModal from './AuthModal';

const Auth = () => {
  const [isAuthType, setIsAuthType] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setActiveToDo = useSetRecoilState(isActiveToDo);

  const handleAuthType = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAuthType(!isAuthType);
    setEmail('');
    setPassword('');
    setActiveToDo(false);
  };
  return (
    <div>
      {isAuthType ? (
        <AuthModal
          handleAuthType={handleAuthType}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          type="signIn"
          title="로그인"
          change="회원가입으로 가기"
        />
      ) : (
        <AuthModal
          handleAuthType={handleAuthType}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          type="signUp"
          title="회원가입"
          change="로그인하러 가기"
        />
      )}
    </div>
  );
};

export default Auth;
