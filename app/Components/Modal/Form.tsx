"use client";
import styles from "./form.module.css";
import React, { useState, useContext } from "react";
import { StoreContext } from "../Context/StoreProvider";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const { getAllTask, modalOff } = useContext(StoreContext);
  const [title, setTitle] = useState("");
  const [decription, setDecription] = useState("");
  const [date, setDate] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleChangeHandler = (e: any, name: string) => {
    console.log(e.target.value);
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "decription":
        setDecription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "complete":
        setIsCompleted(e.target.checked);
        break;
      case "important":
        setIsImportant(e.target.checked);
        break;
    }
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const task = {
      title,
      decription,
      date,
      isCompleted,
      isImportant,
    };
    try {
      const res = await axios.post("/api", task);
      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success("Task created successfully");
        getAllTask();
        modalOff();
      }
    } catch (error) {
      console.log(error);
      toast.error("Task not created");
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <h1 className={styles.formTitle}>Create a task</h1>
      <Toaster />
      <div className={styles.formBox}>
        <label htmlFor="title" className={styles.formLabel}>
          Title
        </label>
        <input
          className={styles.formInputControl}
          id="title"
          type="text"
          name="title"
          onChange={(e) => {
            handleChangeHandler(e, "title");
          }}
        />
      </div>
      <div className={styles.formBox}>
        <label htmlFor="decription" className={styles.formLabel}>
          Description
        </label>
        <textarea
          className={styles.formInputControl}
          id="decription"
          name="decription"
          rows={4}
          onChange={(e) => {
            handleChangeHandler(e, "decription");
          }}
        ></textarea>
      </div>
      <div className={styles.formBox}>
        <label htmlFor="date" className={styles.formLabel}>
          date
        </label>
        <input
          className={styles.formInputControl}
          id="date"
          type="date"
          name="date"
          onChange={(e) => {
            handleChangeHandler(e, "date");
          }}
        />
      </div>
      <div className={styles.formBoxRow}>
        <label htmlFor="date" className={styles.formLabel}>
          completed
        </label>
        <input
          className={styles.formCheckBtn}
          id="completed"
          value={isCompleted.toString()}
          type="checkbox"
          name="completed"
          onChange={(e) => {
            handleChangeHandler(e, "complete");
          }}
        />
      </div>
      <div className={styles.formBoxRow}>
        <label htmlFor="date" className={styles.formLabel}>
          Important
        </label>
        <input
          className={styles.formCheckBtn}
          id="important"
          value={isImportant.toString()}
          type="checkbox"
          name="important"
          onChange={(e) => {
            handleChangeHandler(e, "important");
          }}
        />
      </div>
      <div className={styles.formBtnCon}>
        <button className={styles.formBtn}>
          <FontAwesomeIcon icon={faAdd} />
          <p> Create Task</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
