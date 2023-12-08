// import React, { useContext } from "react";
"use client";
import styles from "./complete.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";

import { StoreContext } from "../Components/Context/StoreProvider";
import { useContext } from "react";
type Props = {};

const page = (props: Props) => {
  const { completedTask, deleteHandler, updateTask } = useContext(StoreContext);
  console.log(completedTask);
  return (
    <div className={styles.completeAll}>
      <h1 className={styles.title}>Completed</h1>
      <div className={styles.completes}>
        {completedTask.map((tk: any) => {
          return (
            <div className={styles.complete} id={tk.id}>
              <h2 className={styles.completeTitle}>{tk.title}</h2>
              <p>{tk.decription}</p>
              <p className={styles.completeDate}>
                {tk.date.replaceAll("-", "/")}
              </p>
              <div className={styles.completeFooter}>
                {tk.isCompleted ? (
                  <button
                    onClick={() => {
                      updateTask({ id: tk.id, isCompleted: !tk.isCompleted });
                    }}
                    className={styles.completeCompleted}
                  >
                    Completed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      updateTask({ id: tk.id, isCompleted: !tk.isCompleted });
                    }}
                    className={styles.completeNotCompleted}
                  >
                    Not Completed
                  </button>
                )}
                <button className={styles.completeFooterEdit}>
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
      </div>
    </div>
  );
};

export default page;
