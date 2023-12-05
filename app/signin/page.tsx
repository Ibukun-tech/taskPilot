"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import styles from "./signin.module.css";
type Props = {};

const page = (props: Props) => {
  console.log("sign in");

  return (
    <div className={styles.logInPage}>
      <SignIn />
    </div>
  );
};
export default page;
