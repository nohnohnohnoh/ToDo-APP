import { atom } from 'recoil';

export const isActiveToDo = atom({
  key: 'activeToDo',
  default: false,
});
