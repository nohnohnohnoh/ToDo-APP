import React from 'react';
import { useRecoilValue } from 'recoil';
import { isActiveToDo } from 'atom';
import { useNavigate } from 'react-router-dom';
import './stylesTodo/todoButton.scss';

interface ToDoButtonProps {
  handleAddToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
  type: string;
  content: string;
  handleToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoButton = ({
  handleAddToDo,
  type,
  content,
  handleToDo,
}: ToDoButtonProps) => {
  const activeTodo = useRecoilValue(isActiveToDo);

  const navigate = useNavigate();

  const typeChange = (e: React.FormEvent<HTMLButtonElement>) => {
    if (type === 'todo') {
      handleToDo(e);
    } else if (type === 'addtodo') {
      handleAddToDo(e);
    }
  };

  const handlemodal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to Log Out?')) {
      window.localStorage.removeItem('access_token');
      navigate('/');
    } else return;
  };

  return (
    <div className="todoButtonBox">
      <div className="todoButton">
        <button
          className={activeTodo ? 'activeAddToDoButton' : 'addTodoButton'}
          onClick={typeChange}
        >
          {content}
        </button>
        {type == 'todo' && (
          <button className="logOutButton" onClick={handlemodal}>
            LOG OUT
          </button>
        )}
      </div>
      <div className="todoBackBox">
        {type === 'addtodo' && (
          <button onClick={handleToDo} className="backButton">
            뒤로가기
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoButton;
