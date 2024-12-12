"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBarCom = () => {
  return (
    <div className=" bg-blue-400 h-20 w-full sticky top-0 z-50">
      <div className=" grid grid-cols-3  ">
        <div className="flex justify-center items-center  mt-0 ">
          <Image
            src="/logo.png"
            width={80}
            height={150}
            alt="logo"
            sizes="80px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <h1>Home</h1>
          <Link href={"/about"}>About</Link>
          <h1>Contact Us</h1>
          <Link href="/products">Products</Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link href="/login">Log In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarCom;
