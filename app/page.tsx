"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";

import Form from "./Components/Modal/Form";
import Modal from "./Components/Modal/Modal";
import { useContext } from "react";
import { StoreContext } from "./Components/Context/StoreProvider";
import styles from "./style.module.css";
interface Props {
  title: string;
}
export default function Home({ title }: Props) {
  const { task, deleteHandler, updateTask, modal, modalOn } =
    useContext(StoreContext);
  console.log(task);
  // const router = useRouter();

  return (
    <div className={styles.all}>
      {modal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <h1 className={styles.title}>All Task</h1>
      <div className={styles.tasks}>
        {task.map((tk: any) => {
          return (
            <div className={styles.task} id={tk.id}>
              <h2 className={styles.taskTitle}>{tk.title}</h2>
              <p>{tk.decription}</p>
              <p className={styles.taskDate}>{tk.date.replaceAll("-", "/")}</p>
              <div className={styles.taskFooter}>
                {tk.isCompleted ? (
                  <button
                    onClick={() => {
                      updateTask({ id: tk.id, isCompleted: !tk.isCompleted });
                    }}
                    className={styles.taskCompleted}
                  >
                    Completed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      updateTask({ id: tk.id, isCompleted: !tk.isCompleted });
                    }}
                    className={styles.taskNotCompleted}
                  >
                    Not Completed
                  </button>
                )}
                <button className={styles.taskFooterEdit}>
                  {<FontAwesomeIcon icon={faEdit} />}
                  {
                    <FontAwesomeIcon
                      onClick={() => {
                        console.log(tk.id);
                        deleteHandler(tk.id);
                        // router.refresh();
                      }}
                      icon={faTrash}
                    />
                  }
                </button>
              </div>
              <p>{tk.isImportant ? "important" : "not important"}</p>
            </div>
          );
        })}
        <div className={styles.addNewTask} onClick={modalOn}>
          {<FontAwesomeIcon icon={faAdd} />}
          Add new task
        </div>
      </div>
    </div>
  );
}
