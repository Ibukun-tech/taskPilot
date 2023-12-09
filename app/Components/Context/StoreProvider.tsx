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
  modalOff: () => {},
  modalOn: () => {},
  completedTask: [],
  deleteHandler: (id: string) => {},
  incompletedTask: [],
  importantTask: [],
  updateTask: (task: any) => {},
  modal: false,
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
  const deleteHandler = async (id: string) => {
    try {
      await axios.delete(`/api/${id}`);
      toast.success("Its been deleted");
      getAllTask();
    } catch (error) {
      console.log(error);
      toast.error("SOMETHING WENT WRONG");
    }
  };
  useEffect(() => {
    if (user) getAllTask();
  }, [user]);
  // @ts-ignore
  const updateTask = async (task) => {
    try {
      await axios.put("/api", task);
      toast.success("task updated");
      getAllTask();
      console.log("Getting all Update task");
    } catch (error) {
      console.log(error);
      toast.error("task not updated");
    }
  };
  // @ts-ignore
  const completedTask = allTask.filter((task) => task.isCompleted === true);
  // @ts-ignore
  const importantTask = allTask.filter((task) => task.isImportant === true);
  // @ts-ignore
  const incompletedTask = allTask.filter((task) => task.isCompleted !== true);
  const increaseHandler = () => {};

  const [modal, setModal] = useState(true);
  const modalOn = () => {
    setModal(true);
  };
  const modalOff = () => {
    setModal(false);
  };
  const value = {
    increaseHandler: increaseHandler,
    task: allTask,
    deleteHandler: deleteHandler,
    completedTask: completedTask,
    incompletedTask: incompletedTask,
    importantTask: importantTask,
    updateTask: updateTask,
    modal: modal,
    modalOff: modalOff,
    modalOn: modalOn,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
