import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <Link
        href="/login" // 2. Yahan apne login page ka route dein
        className="inline-block px-4 py-2.5 text-sm font-semibold text-[#142D23] bg-transparent border-[1px] border-[#D3CDBE] rounded-[10px] pointer-cursor hover:bg-[#D3CDBE]/20 transition-colors"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginButton;
