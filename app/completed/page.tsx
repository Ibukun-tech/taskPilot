// import React, { useContext } from "react";
import styles from "./complete.module.css";
import { StoreContext } from "../Components/Context/StoreProvider";
import { useContext } from "react";
type Props = {};

const page = (props: Props) => {
  const { completedTask } = useContext(StoreContext);
  return <div className={styles.completeAll}></div>;
};

export default page;
