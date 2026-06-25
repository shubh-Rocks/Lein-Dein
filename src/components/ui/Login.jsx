import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <Link
        href="/login" // 2. Yahan apne login page ka route dein
        className="px-8 py-3 text-lg font-bold text-[#142D23] bg-transparent border-2 border-[#D3CDBE] rounded-xl hover:bg-[#D3CDBE]/20 transition-colors"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginButton;
