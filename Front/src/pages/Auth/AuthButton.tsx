import React from 'react';
import { useRecoilValue } from 'recoil';
import { isActiveToDo } from 'atom';

interface AuthButtonProps {
  type: string;
  handleAuthType: (e: React.FormEvent<HTMLButtonElement>) => void;
  title: string;
  handleSignUp: (e: React.FormEvent<HTMLButtonElement>) => void;
  handleSignIn: (e: React.FormEvent<HTMLButtonElement>) => void;
  change: string;
}

const AuthButton = ({
  type,
  handleAuthType,
  title,
  handleSignUp,
  handleSignIn,
  change,
}: AuthButtonProps) => {
  const activeToDo = useRecoilValue(isActiveToDo);
  const chagneFormData = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === 'signIn') {
      handleSignIn(e);
    } else if (type === 'signUp') {
      handleSignUp(e);
    }
  };

  return (
    <div className="authButtonBox">
      <button
        onClick={chagneFormData}
        className={activeToDo ? 'activeAuthButton' : 'authButton'}
      >
        {title}
      </button>
      <button className="authTypeButton" onClick={handleAuthType}>
        {change}
      </button>
    </div>
  );
};

export default AuthButton;
