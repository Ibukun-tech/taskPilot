"use client";
import { Children, createContext, useState, useContext } from "react";
import themes from "./themes";

export const StoreContext = createContext({
  increaseHandler: () => {},
  value: {},
});
interface Props {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: Props) => {
  const [calue, setValue] = useState(0);
  const theme = themes[calue];
  const increaseHandler = () => {};
  const value = {
    increaseHandler: increaseHandler,
    value: theme,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
