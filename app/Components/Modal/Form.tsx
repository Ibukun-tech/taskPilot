"use client";
import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [decription, setDecription] = useState("");
  const [date, setDate] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  return <div>form</div>;
};

export default Form;
