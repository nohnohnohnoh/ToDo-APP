import React from 'react';
import { useRecoilValue } from 'recoil';
import { isActiveToDo } from 'atom';
import './stylesTodoLogo/authTodoLogo.scss';

const AuthToDoLogo = () => {
  const activeToDo = useRecoilValue(isActiveToDo);
  return (
    <div className="authTodoLogo">
      <div
        className={activeToDo ? 'activeAuthToDoLogoText' : 'authTodoLogoText'}
      >
        ToDoAPP
      </div>
    </div>
  );
};

export default AuthToDoLogo;
