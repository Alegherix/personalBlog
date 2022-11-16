import { useCallback, useState } from 'react';

/**
 * Used to set and fetch values from localStorage.
 * @param key The key to persist in localStorage as
 * @param defaultValue the default value to use if the localStorage value is not set
 * @returns The storageState that's lazily initiated and evaluated once. A callback to update the localstorage,
 * and a callback to evaluate the current value in storage.
 * @description This hook intentionally excluded listening and updating the localStorage with a useEffect
 * in favor of listening to it based on events.
 */
export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  /**
   * Evaluates the initial value lazily once.
   */
  const [initialState] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const valueInlocalStorage = window.localStorage.getItem(key);
    return valueInlocalStorage ? JSON.parse(valueInlocalStorage) : defaultValue;
  });

  /**
   * Sets the storage state
   */
  const setStorageState = useCallback(
    (storage: T) => {
      window.localStorage.setItem(key, JSON.stringify(storage));
    },
    [key],
  );

  /**
   * Fetches the Storage state
   */
  const getStorageState = useCallback<(...args: any) => T>(() => {
    const valueInlocalStorage = window.localStorage.getItem(key);
    return valueInlocalStorage ? JSON.parse(valueInlocalStorage) : defaultValue;
  }, [defaultValue, key]);

  return [initialState, setStorageState, getStorageState] as const;
};
