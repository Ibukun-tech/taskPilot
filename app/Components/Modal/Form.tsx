"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
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
      }
      console.log(res);
      toast.success("Task created successfully");
    } catch (error) {
      console.log(error);
      toast.error("not created the task");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Create a task</h1>
      <Toaster />
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={(e) => {
            handleChangeHandler(e, "title");
          }}
        />
      </div>
      <div>
        <label htmlFor="decription">Description</label>
        <textarea
          id="decription"
          name="decription"
          rows={4}
          onChange={(e) => {
            handleChangeHandler(e, "decription");
          }}
        ></textarea>
      </div>
      <div>
        <label htmlFor="date">date</label>
        <input
          id="date"
          type="date"
          name="date"
          onChange={(e) => {
            handleChangeHandler(e, "date");
          }}
        />
      </div>
      <div>
        <label htmlFor="date">completed</label>
        <input
          id="completed"
          value={isCompleted.toString()}
          type="checkbox"
          name="completed"
          onChange={(e) => {
            handleChangeHandler(e, "complete");
          }}
        />
      </div>
      <div>
        <label htmlFor="date">Important</label>
        <input
          id="important"
          value={isImportant.toString()}
          type="checkbox"
          name="important"
          onChange={(e) => {
            handleChangeHandler(e, "important");
          }}
        />
      </div>
      <div>
        <button>Submitnnenene</button>
      </div>
    </form>
  );
};

export default Form;
