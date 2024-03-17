import { useEffect, useState } from "react";

export const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("key");
    return storedValue ? JSON.parse(storedValue) : initialState;
    console.log(storedValue);
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
};
