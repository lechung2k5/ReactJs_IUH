import { atom } from 'recoil';

const getInitialAuth = () => {
  const savedToken = localStorage.getItem('auth_token');
  const savedUser = localStorage.getItem('auth_user');
  if (savedToken && savedUser) {
    return {
      token: savedToken,
      user: JSON.parse(savedUser),
    };
  }
  return null;
};

export const authAtom = atom({
  key: 'authAtom',
  default: getInitialAuth(),
});
