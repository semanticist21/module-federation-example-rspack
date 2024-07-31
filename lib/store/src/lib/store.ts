import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  username: string;
  setUsername: (username: string) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      username: '',
      setUsername: (username: string) => set({ username }),
    }),
    {
      name: 'user-storage',
    }
  )
);
