"use client";
import Image from "next/image";
import Form from "./Components/Modal/Form";
import { useContext } from "react";
import { StoreContext } from "./Components/Context/StoreProvider";
import styles from "./style.module.css";
interface Props {
  title: string;
}
export default function Home({ title }: Props) {
  const { task } = useContext(StoreContext);
  return (
    <div className={styles.all}>
      {<Form />}
      <h1>{title}</h1>
      <div className={styles.tasks}>
        {task.map((tk: any) => {
          return (
            <div className={styles.task} id={tk._id}>
              <h2>{tk.title}</h2>
              <p>{tk.description}</p>
              <p>{tk.date}</p>
              <p>{tk.isCompleted}</p>
              <p>{tk.isImportant}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
