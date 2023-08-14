import React, { useState } from 'react';
import ToDoModalSection from './ToDoModalSection';
import ToDoButton from './ToDoButton';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import { formDataAddTodo } from '../../api/api';
import './stylesTodo/todoModal.scss';

interface ToDoModalProps {
  handleToDo: (e: React.FormEvent<HTMLButtonElement>) => void;
  setISToDoType: (b: boolean) => void;
  type: string;
  title: string;
  content: string;
}

const ToDoModal = ({
  title,
  type,
  handleToDo,
  content,
  setISToDoType,
}: ToDoModalProps) => {
  const [addTitle, setAddTitle] = useState('');
  const [addContent, setAddContent] = useState('');
  const [activeToDo, setActiveToDo] = useRecoilState(isActiveToDo);

  const addToDo = useMutation('formDataAddTodo', formDataAddTodo, {
    onSuccess: () => {
      alert('SUCCESS ADDTODO');
    },
  });

  const handleAddToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Would you like to register ToDo?') === true) {
      addToDo.mutate({ title: addTitle, content: addContent });
      setActiveToDo(false);
      setISToDoType(true);
    } else return;
  };

  const onChangeAddTilte = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddTitle(value);
  };

  const onChangeAddContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setAddContent(value);
  };

  const onActiveButton = () => {
    return addTitle !== '' && addContent !== ''
      ? setActiveToDo(true)
      : setActiveToDo(false);
  };

  return (
    <form className="toDoForm">
      <div className="toDoLogoBox">
        <header className={activeToDo ? 'activeLogo' : 'toDoLogo'}>
          {title}
        </header>
      </div>
      <ToDoModalSection
        onChangeAddTilte={onChangeAddTilte}
        onChangeAddContent={onChangeAddContent}
        onActiveButton={onActiveButton}
        type={type}
      />
      <ToDoButton
        handleAddToDo={handleAddToDo}
        type={type}
        content={content}
        handleToDo={handleToDo}
      />
    </form>
  );
};

export default ToDoModal;
