"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const page = (props: Props) => {
  console.log("sign in");

  return (
    <div>
      sign in page
      <SignIn />
    </div>
  );
};
export default page;
