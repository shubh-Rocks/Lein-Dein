"use client";

import Image from "next/image";
import Login from "../ui/Login";
import GetStarted from "../ui/GetStarted";

const Navbar = () => {
  return (
    <div className="bg-[#FAF7EF] w-full px-8 py-4 border border-[#0e3b53]/20 flex items-center justify-between gap-96 ">
      <div className="flex gap-3 items-center">
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          alt="logo"
          className="flex items-center"
        />
        <h1 className="font-semibold text-2xl">MyMoney</h1>
      </div>
      <div className="flex gap-10">
        <Login />
        <GetStarted />
      </div>
    </div>
  );
};

export default Navbar;
