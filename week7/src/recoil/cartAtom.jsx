import { atom, selector } from 'recoil';

export const cartAtom = atom({
  key: 'cartAtom',
  default: [], // Array of { id, name, price, quantity }
});

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const cart = get(cartAtom);
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
});
