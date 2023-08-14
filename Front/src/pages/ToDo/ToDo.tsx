import React, { useState } from 'react';
import ToDoModal from './ToDoModal';
import ToDoLogo from 'Components/ToDoLogo/ToDoLogo';
import { useSetRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import './stylesTodo/todo.scss';

const ToDo = () => {
  const [isToDoType, setISToDoType] = useState(true);
  const setActiveToDo = useSetRecoilState(isActiveToDo);

  const handleToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setISToDoType(!isToDoType);
    setActiveToDo(false);
  };

  return (
    <div className="todo">
      <ToDoLogo />
      <section className="todoBox">
        {isToDoType ? (
          <ToDoModal
            handleToDo={handleToDo}
            setISToDoType={setISToDoType}
            type="todo"
            title="TODO"
            content="ADD TODO"
          />
        ) : (
          <ToDoModal
            handleToDo={handleToDo}
            setISToDoType={setISToDoType}
            type="addtodo"
            title="ADD TODO"
            content="CREATE TODO"
          />
        )}
      </section>
    </div>
  );
};

export default ToDo;
