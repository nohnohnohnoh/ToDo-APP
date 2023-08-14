import React from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesMain/main.scss';

const Main = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/auth');
  };
  return (
    <div className="main">
      <div className="titleBox">
        <span className="title">ToDo APP</span>
        <span className="useToDo" onClick={navigateLogin}>
          👉 Go to Use ToDoApp
        </span>
      </div>
    </div>
  );
};

export default Main;
