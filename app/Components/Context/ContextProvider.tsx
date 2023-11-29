"use Client";
import React from "react";
import { GlobalProvider as Provider } from "./Provider";
interface Props {
  children: React.ReactNode;
}
const ContextProvider = ({ children }: Props) => {
  return <Provider>{children}</Provider>;
};

export default ContextProvider;
