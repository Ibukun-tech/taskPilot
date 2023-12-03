"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
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
  console.log(task);
  return (
    <div className={styles.all}>
      {/* {<Form />} */}
      <h1 className={styles.title}>All Task</h1>
      <div className={styles.layout}>
        <div className={styles.tasks}>
          {task.map((tk: any) => {
            return (
              <div className={styles.task} id={tk._id}>
                <h2>{tk.title}</h2>
                <p>{tk.decription}</p>
                <p>{tk.date}</p>
                <div className={styles.taskFooter}>
                  {tk.isCompleted ? (
                    <button className={styles.taskCompleted}>Completed</button>
                  ) : (
                    <button className={styles.taskNotCompleted}>
                      Not Completed
                    </button>
                  )}
                  <button className={styles.taskFooterEdit}>
                    {<FontAwesomeIcon icon={faEdit} />}
                    {<FontAwesomeIcon icon={faTrash} />}
                  </button>
                </div>
                <p>{tk.isImportant ? "important" : "not important"}</p>
              </div>
            );
          })}
          <div className={styles.addNewTask}>
            {<FontAwesomeIcon icon={faAdd} />}
            Add new task
          </div>
        </div>
      </div>
    </div>
  );
}
