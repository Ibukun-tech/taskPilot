"use client";
import styles from "./General.module.css";
import { useContext } from "react";
import { StoreContext } from "./StoreProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
interface Props {
  id: string;
  title: string;
  decription: string;
  date: string;
  isCompleted: Boolean;
  isImportant: Boolean;
}
const General = ({
  id,
  title,
  decription,
  date,
  isCompleted,
  isImportant,
}: Props) => {
  const { deleteHandler } = useContext(StoreContext);
  return (
    <div className={styles.task} id={id}>
      <h2 className={styles.taskTitle}>{title}</h2>
      <p>{decription}</p>
      <p className={styles.taskDate}>{date.replaceAll("-", "/")}</p>
      <div className={styles.taskFooter}>
        {isCompleted ? (
          <button className={styles.taskCompleted}>Completed</button>
        ) : (
          <button className={styles.taskNotCompleted}>Not Completed</button>
        )}
        <button className={styles.taskFooterEdit}>
          {<FontAwesomeIcon icon={faEdit} />}
          {
            <FontAwesomeIcon
              onClick={() => {
                console.log(id);
                deleteHandler(id);
                // router.refresh();
              }}
              icon={faTrash}
            />
          }
        </button>
      </div>
      <p>{isImportant ? "important" : "not important"}</p>
    </div>
  );
};
export default General;
