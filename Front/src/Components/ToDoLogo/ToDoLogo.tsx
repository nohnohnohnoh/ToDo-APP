import React from 'react';
import { useRecoilValue } from 'recoil';
import { isActiveToDo } from 'atom';
import './stylesTodoLogo/todoLogo.scss';
const ToDoLogo = () => {
  const activeToDo = useRecoilValue(isActiveToDo);
  return (
    <div className="todoLogo">
      <div className={activeToDo ? 'activeToDoLogoText' : 'todoLogoText'}>
        ToDoAPP
      </div>
    </div>
  );
};
export default ToDoLogo;
