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

  return storagedValue ? JSON.parse(storagedValue) : null;
};
export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => getStoragedValue(key));

  const setItem = (value: LocalStorageSetValue) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(getStoragedValue(key));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue("");
  };

  return [value, { setItem, removeItem }];
};
