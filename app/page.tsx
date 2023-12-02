"use client";
import Image from "next/image";
import Form from "./Components/Modal/Form";
import { useContext } from "react";
import { StoreContext } from "./Components/Context/StoreProvider";
import styles from "./style.module.css";
interface Props {
  title: string;
}
export default function Home({ title: string }: Props) {
  const { task } = useContext(StoreContext);
  return <div className={styles.all}>{<Form />}</div>;
}
