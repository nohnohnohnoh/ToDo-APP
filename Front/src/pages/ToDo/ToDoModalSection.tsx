import React from 'react';
import { ToDo } from '../../types/type';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getDataToDo } from '../../api/api';
import './stylesTodo/todoModalSection.scss';

interface ToDoModalSectionProps {
  onChangeAddTilte: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAddContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onActiveButton: () => void;
  type: string;
}

const ToDoModalSection = ({
  onChangeAddTilte,
  onChangeAddContent,
  onActiveButton,
  type,
}: ToDoModalSectionProps) => {
  const navigate = useNavigate();

  const { data: getToDo, isSuccess } = useQuery('getDataToDo', getDataToDo);

  return (
    <>
      {type === 'todo' && (
        <div className="todoSectionBox">
          <div className="todoSectionList">
            {isSuccess &&
              getToDo.data.map(({ title, id }: ToDo) => (
                <div
                  key={id}
                  onClick={() => navigate(`/todos/${id}`)}
                  className="todoList"
                >
                  {title}
                </div>
              ))}
          </div>
        </div>
      )}
      {type === 'addtodo' && (
        <div className="todoSectionBox">
          <div className="sectionInputBox">
            <input
              className="sectionInputTitle"
              placeholder="title을 입력해주세요"
              type="text"
              onChange={onChangeAddTilte}
              onKeyUp={onActiveButton}
            />
            <textarea
              className="sectionInputContent"
              placeholder="content를 입력해주세요"
              onChange={onChangeAddContent}
              onKeyUp={onActiveButton}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ToDoModalSection;
