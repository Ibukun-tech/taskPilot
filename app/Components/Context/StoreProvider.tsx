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
import { useUser } from "@clerk/nextjs";

export const StoreContext = createContext({
  increaseHandler: () => {},
  task: [],
});
interface Props {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: Props) => {
  const { user } = useUser();
  console.log(user);
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
    if (user) getAllTask();
  }, [user]);
  const theme = themes[calue];
  const increaseHandler = () => {};
  const value = {
    increaseHandler: increaseHandler,
    task: allTask,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
