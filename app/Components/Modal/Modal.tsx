"use client";
import Form from "./Form";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreProvider";
import styles from "./Modal.module.css";
type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const { modalOff } = useContext(StoreContext);
  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={modalOff}></div>
      <div className={styles["modal-content"]}>{children}</div>
    </div>
  );
};

export default Modal;
