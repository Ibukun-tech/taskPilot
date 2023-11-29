"use client";
import { useContext, createContext, useState } from "react";
import themes from "./themes";
export const globalContext = createContext();
export const globalStateContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [selectTheme, setSelectTheme] = useState(0);
  const theme = themes[selectTheme];
  return (
    <globalContext.Provider
      value={{
        theme,
      }}
    >
      <globalStateContext.Provider value={setUpdate}>
        {children}
      </globalStateContext.Provider>
    </globalContext.Provider>
  );
};
export const useGlobalState = () => useContext(globalContext);
export const useGlobalUpdate = () => useContext(globalStateContext);
