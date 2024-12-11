"use client";
import SignUpComponents from "@/components/features/auth/signup";
import NavBarCom from "@/components/features/navbar";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <NavBarCom />
      <SignUpComponents />
    </div>
  );
};

export default SignUpPage;
