import { atom } from 'recoil';

export const todoAtom = atom({
  key: 'todoAtom',
  default: [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Recoil', completed: false }
  ],
});
