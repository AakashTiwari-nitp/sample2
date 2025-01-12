import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-[#fff] px-5 py-2 text-black">
        <div className="logo">
          <Image height={35} src={logo} alt="logo" />
        </div>
        <div className="menu sm:hidden">
          <CiMenuBurger size={30} />
        </div>
        <div className="hidden sm:block">
        <div className="text-black flex items-center gap-2 md:gap-5 font-normal text-md">
          <h2>Crypto Taxes</h2>
          <h2>Free Tools</h2>
          <h2>Resource Center</h2>
          <button className="px-3 py-1 rounded-md bg-blue-500 text-white">Get Started</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
