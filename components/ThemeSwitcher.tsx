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
  //   useLocalStorage<Themes>('theme', 'dark');
  const [theme, setTheme] = React.useState<Themes>('dark');

  // useEffect(() => {
  //   if (initialState) {
  //     setTheme(initialState);
  //   }
  // }, [initialState]);

  const handleClick = () => {
    const currentTheme = theme;
    const nextTheme = ThemeMap[theme];
    // setStorageState(nextTheme);
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(nextTheme);
    setTheme(nextTheme);
  };

  // if (!initialState) {
  //   return <IconSun />;
  // }
  // return <IconMoon />

  return (
    <button
      className={'transitionAnimation hover:text-heaven-500 p-2'}
      onClick={handleClick}
    >
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};
