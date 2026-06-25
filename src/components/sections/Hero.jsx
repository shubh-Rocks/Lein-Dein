import React from "react";

import PreviewRecordBox from "../ui/PreviewRecordBox";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-between py-25 px-25">
      <div>
        <h1 className="font-bold text-5xl tracking-tight leading-[1.1]">
          <span className="block text-[#123E56]">Manage your credit,</span>
          <span className="block text-[#2A9D4B]"> secure your growth</span>
        </h1>

        <div className="flex justify-center mt-5">
          <p className=" font-sans text-xl  md:text-[20px] max-w-xl text-gray-500">
            Simple, Smart, and Secure. Say goodbye to paper books! Track your
            dues with just one tap and send automated payment reminders directly
            to your customers.
          </p>
        </div>

        <div className="w-full mt-8">
          <Link
            href="/register"
            className="inline-block px-5 py-3 text-md font-semibold text-white bg-[#26A257] rounded-[10px] shadow-[0_12px_24px_-6px_rgba(38,162,87,0.4)] hover:bg-[#15713a] hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
      <PreviewRecordBox />
    </section>
  );
};

export default Hero;
