'use client';

import { IconMoon, IconSun } from '@tabler/icons';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

type Themes = 'dark' | 'light';

const ThemeMap: Record<Themes, Themes> = {
  dark: 'light',
  light: 'dark',
};

export const ThemeSwitcher: React.FC = () => {
  // const [initialState, setStorageState, getStorageState] =
  // useLocalStorage<Themes>('theme', 'dark');
  const router = useRouter();
  const [theme, setTheme] = React.useState<Themes>(
    // () => initialState || 'dark'
    'dark'
  );

  // useLayoutEffect(() => {
  //   if (initialState) {
  //     setTheme(initialState);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleClick = () => {
    // const currentTheme = getStorageState();
    const nextTheme = ThemeMap[theme];
    // setStorageState(nextTheme);
    // document.documentElement.classList.remove(theme);
    // document.documentElement.classList.add(nextTheme);
    setTheme(nextTheme);
    router.refresh();
  };

  // if (!initialState) {
  //   return null;
  // }

  return (
    <button onClick={handleClick}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};
