import { atom } from 'recoil';

export const searchQueryAtom = atom({
  key: 'searchQueryAtom',
  default: '',
});

export const searchResultsAtom = atom({
  key: 'searchResultsAtom',
  default: {
    results: [],
    loading: false,
    error: null,
  },
});
