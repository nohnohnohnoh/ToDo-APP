import React from 'react';
import { useQuery } from 'react-query';
import { getDataToDoDetail } from '../../api/api';
import './stylesToDoDetail/todoDetailSection.scss';

interface ToDoDetailSectionProps {
  type: string;
  onChangeupDateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeupDateContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onActiveButton: () => void;
  id: string | undefined;
}

const ToDoDetailSection = ({
  type,
  onChangeupDateTitle,
  onChangeupDateContent,
  onActiveButton,
  id,
}: ToDoDetailSectionProps) => {
  const { data: getDataDetail, isSuccess } = useQuery(['getDataToDo', id], () =>
    getDataToDoDetail(id),
  );

  return (
    <>
      {type === 'todoDetail' && (
        <div className="todoDetailSectionBox">
          {isSuccess && (
            <div key={id} className="todoDetailSection">
              <div className="todoDetailTitle">{getDataDetail.data.title}</div>
              <div className="todoDetailConTent">
                {getDataDetail.data.content}
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'todoDetailUpdate' && (
        <div className="todoDetailSectionBox">
          <div className="updateInputBox">
            <input
              type="text"
              className="updateTitle"
              onChange={onChangeupDateTitle}
              onKeyUp={onActiveButton}
            />
            <textarea
              className="updateContent"
              onChange={onChangeupDateContent}
              onKeyUp={onActiveButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoDetailSection;
