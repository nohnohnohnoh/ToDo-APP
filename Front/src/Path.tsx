import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isActiveToDo } from 'atom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Path = () => {
  const setActiveToDo = useSetRecoilState(isActiveToDo);
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveToDo(false);
  }, [pathname]);
  return null;
};

export default Path;
