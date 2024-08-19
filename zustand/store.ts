import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface themeState {
    dark: boolean;
    changeTheme: () => void;
  }

const getInitialToken = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("theme-storage") || false;
      return Boolean(token) ;
    }
    return false
  };
  
  export const useTheme = create<themeState>()(
    persist(
      (set, get) => ({
        dark: getInitialToken(),
        changeTheme: () => set((state) => ({ dark: !state.dark })),
      }),
      {
        name: "theme-storage",
      },
    ),
  );