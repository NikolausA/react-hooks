import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

const getStoragedValue = (key: string): LocalStorageReturnValue => {
  const storagedValue = localStorage.getItem(key);

  return storagedValue ? storagedValue : null;
};
export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => getStoragedValue(key));

  const setItem = (value: LocalStorageSetValue) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};
