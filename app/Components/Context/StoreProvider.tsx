"use client";
import {
  Children,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import themes from "./themes";
import axios from "axios";
import toast from "react-hot-toast";

export const StoreContext = createContext({
  increaseHandler: () => {},
  value: {},
  task: [],
});
interface Props {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: Props) => {
  const [calue, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [allTask, setAllTask] = useState([]);
  const getAllTask = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api");
      console.log(res);
      setAllTask(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    getAllTask();
  }, []);
  const theme = themes[calue];
  const increaseHandler = () => {};
  const value = {
    increaseHandler: increaseHandler,
    value: theme,
    task: allTask,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
