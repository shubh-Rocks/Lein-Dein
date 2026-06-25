import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <div>
      <Link
        href="/register" // 2. Yahan apne register page ka route dein
        className="px-8 py-3 text-lg font-bold text-white bg-[#26A257] rounded-xl shadow-[0_12px_24px_-6px_rgba(38,162,87,0.4)] hover:bg-[#1F8A4A] hover:-translate-y-0.5 transition-all duration-200"
      >
        Get Started Free
      </Link>
    </div>
  );
};

export default GetStarted;
