import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" my-20 px-20 border-t">
      <div className="border-b p-5 border-gray-400 w-full flex items-center justify-between mt-10">
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
        <div className="flex gap-5">
          <Link href="/features">Features</Link>
          <Link href="/mobile app">Mobile App</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/help">Help center</Link>
        </div>
      </div>
      <span className="flex items-center justify-between">
        <p className="text-gray-600 font-light mt-5 text-[15px]">
          © 2026 MyMoney. Made for Indian shopkeepers and business owners, with
          love for their better cash flow.
        </p>
        <p className="text-gray-600 font-light mt-5 text-[15px] ">
          Your data, always yours.
        </p>
      </span>
    </footer>
  );
};

export default Footer;
