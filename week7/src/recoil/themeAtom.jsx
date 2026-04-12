import { atom } from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    if (isReset) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};

export const themeAtom = atom({
  key: 'themeAtom',
  default: 'light',
  effects: [
    localStorageEffect('current_theme'),
  ]
});
