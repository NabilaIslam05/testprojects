"use client";

import LoginComponents from "@/components/features/auth/login";
import NavBarCom from "@/components/features/navbar";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <NavBarCom />
      <LoginComponents />
    </div>
  );
};

export default LoginPage;
