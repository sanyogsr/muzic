"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Butterfly_Kids } from "next/font/google";
import React from "react";

const Appbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between bg-black text-white">
      <div>muzic</div>
      <div className="">
        {session.data?.user ? (
          <button className="bg-blue-500 p-3" onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <button className="bg-blue-500 p-3" onClick={() => signIn()}>
            Siginin
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default Appbar;
