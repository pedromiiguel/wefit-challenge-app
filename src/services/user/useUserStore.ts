import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { asyncStorage } from '../storage';

type UserStore = {
  username: string;
  setUsername: (user: string) => void;
};

const STORAGE_KEY = '@wefit-challenge-user';

const useUserStore = create<UserStore>()(
  persist(
    set => ({
      username: '',
      setUsername: username => set({ username }),
    }),
    {
      name: STORAGE_KEY,
      storage: asyncStorage,
    },
  ),
);

export function useUser() {
  const username = useUserStore(state => state.username);
  const setUsername = useUserStore(state => state.setUsername);

  return { username, setUsername };
}
