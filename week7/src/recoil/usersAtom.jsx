import { atom, selector } from 'recoil';

export const usersAtom = atom({
  key: 'usersAtom',
  default: [],
});

export const fetchUsersSelector = selector({
  key: 'fetchUsersSelector',
  get: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.ok ? response.json() : [];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
});

// Since Recoil selectors can be tricky with suspense/loading states if not handled correctly in the component,
// I will also provide a standard atom that we can update manually via a hook/effect for simpler loading/error management 
// if the user doesn't want to use React Suspense.
export const usersStateAtom = atom({
  key: 'usersStateAtom',
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
