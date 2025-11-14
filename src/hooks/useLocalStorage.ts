import { useEffect, useState } from "react";
import type { StateType } from "../types/contexTypes";

export default function useLocalStorage(key: string, initialValue: StateType) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) return initialValue;
    else return JSON.parse(jsonValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [StateType, typeof setValue];
}
