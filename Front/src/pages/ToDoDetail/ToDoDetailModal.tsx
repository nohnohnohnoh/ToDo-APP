import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToDoDetailButton from './ToDoDetailButton';
import ToDoDetailSection from './ToDoDetailSection';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import { delteDataToDo, putDataToDo } from '../../api/api';
import { ToDo } from '../../types/type';
import '../ToDoDetail/stylesToDoDetail/todoDetailModal.scss';

interface ToDoDetailModalProps {
  type: string;
  title: string;
  content: string;
  handleToDoDeatilType: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ToDoDetailModal = ({
  type,
  title,
  content,
  handleToDoDeatilType,
}: ToDoDetailModalProps) => {
  const [upDateTitle, setUpDateTitle] = useState('');
  const [upDateContent, setUpDateContent] = useState('');
  const [activeToDo, setActiveToDo] = useRecoilState(isActiveToDo);

  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const putToDo = useMutation(
    ({ title, content, id }: ToDo) => putDataToDo({ title, content, id }),
    {
      retry: 0,
      onSuccess: () => {
        alert('SUCCESS MODIFY');
        navigate('/todos');
        queryClient.invalidateQueries('getDataToDo');
      },
      mutationKey: 'putToDo',
    },
  );

  const deleteTodo = useMutation(
    (id: string | undefined) => delteDataToDo(id),
    {
      retry: 0,
      onSuccess: () => {
        alert('SUCCESS DELETE');
        navigate('/todos');
        queryClient.invalidateQueries('getDataToDo');
      },
      mutationKey: 'deleteToDo',
    },
  );

  const handlePutToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Would you like to edit?') === true) {
      putToDo.mutate({
        title: upDateTitle,
        content: upDateContent,
        id,
      });
    } else return;
  };

  const handleDeleteToDo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to erase it?') === true) {
      deleteTodo.mutate(id);
    } else return;
  };

  const onChangeupDateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpDateTitle(value);
  };

  const onChangeupDateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setUpDateContent(value);
  };

  const onActiveButton = () => {
    return upDateTitle !== '' && upDateContent !== ''
      ? setActiveToDo(true)
      : setActiveToDo(false);
  };

  return (
    <form className="toDoDetailForm">
      <div className="toDoDetailLogoBox">
        <header
          className={activeToDo ? 'activeToDoDetailLogo' : 'toDoDetailLogo'}
        >
          {title}
        </header>
      </div>
      <ToDoDetailSection
        id={id}
        type={type}
        onChangeupDateTitle={onChangeupDateTitle}
        onChangeupDateContent={onChangeupDateContent}
        onActiveButton={onActiveButton}
      />
      <ToDoDetailButton
        id={id}
        type={type}
        content={content}
        handleToDoDeatilType={handleToDoDeatilType}
        handlePutToDo={handlePutToDo}
        handleDeleteToDo={handleDeleteToDo}
      />
    </form>
  );
};

export default ToDoDetailModal;
