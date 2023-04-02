import type { Person } from "../interfaces/people";
import { isJsonString } from "./helpers.utility";

export const setLocalStorage = (key: string, value: string | Person[] ) : void => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string): Person[] | null => {
  const localStorageData: string | null = localStorage.getItem(key);

  if (localStorageData !== null) {
    return isJsonString(localStorageData) ? JSON.parse(localStorageData) : null
  }

  return null;
}
