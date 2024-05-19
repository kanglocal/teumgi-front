'use client';

import { useTheme } from '@/store/useTheme';
import { darkTheme, lightTheme } from '@/styles/theme.css';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children }: any) => {
  const { theme } = useTheme();
  const [isThemeLoaded, setisThemeLoaded] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme-storage');
    if (storedTheme) {
      setisThemeLoaded(true);
    }
  }, []);

  if (!isThemeLoaded) return null;
  console.log(theme);

  return <div className={theme === 'dark' ? darkTheme : lightTheme}>{children}</div>;
};

export default ThemeProvider;
