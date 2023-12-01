"use client";
import Image from "next/image";
import Form from "./Components/Modal/Form";
import styles from "./style.module.css";
export default function Home() {
  return (
    <div className={styles.all}>
      <Form />
    </div>
  );
}
