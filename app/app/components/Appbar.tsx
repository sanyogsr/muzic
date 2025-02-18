"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Butterfly_Kids } from "next/font/google";
import Link from "next/link";
import React from "react";
import { AlignJustify } from "lucide-react";

const Appbar = () => {
  const session = useSession();
  const items = [
    { title: "Features", link: "/features" },
    { title: "How It Works", link: "/how-it-works" },
    { title: "Pricing", link: "/pricing" },
  ];
  return (
    <div className="flex justify-between items-center p-5 bg-[#08041e] h-20 text-white">
      <h1 className=" pl-10 text-4xl font-extrabold bg-gradient-to-r from-[#9659f5] to-[#7b3fc9] text-transparent bg-clip-text tracking-wide drop-shadow-lg">
        Muzic
      </h1>

      <div className="hidden md:flex gap-5 items-center">
        {/* links */}
        <nav className="flex gap-8">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-white list-none font-medium hover:text-[#9659f5] active:scale-95 hover:bg-white px-3 py-1"
            >
              <Link href={item.link}> {item.title}</Link>
            </li>
          ))}
        </nav>
        {session.data?.user ? (
          <button className="bg-blue-500 p-3" onClick={() => signOut()}>
            Logout
          </button>
        ) : (
          <button
            className="bg-[#9659f5] py-3 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-[#7b3fc9]
             hover:text-white hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#9659f5]/50"
            onClick={() => signIn()}
          >
            Get Started
          </button>
        )}{" "}
      </div>
      <button className="md:hidden lg:hidden flex items-center justify-center p-2 rounded-lg active:scale-95  transition">
        <AlignJustify className="w-8 h-8 " />
      </button>
    </div>
  );
};

export default Appbar;
