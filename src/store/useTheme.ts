import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ThemeType = 'light' | 'dark';

interface ThemeStateType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const initialValue: ThemeType = 'light';

const useThemeStore = create<ThemeStateType>()(
  devtools(
    persist(
      (set) => ({
        theme: initialValue,
        setTheme: (theme) =>
          set(() => ({
            theme: theme,
          })),
      }),
      { name: 'theme-storage' }
    ),
    { name: 'theme-storage' }
  )
);

export const useTheme = useThemeStore;
