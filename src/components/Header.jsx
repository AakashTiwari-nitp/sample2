"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center w-full bg-white shadow px-5 py-3 text-black relative">
        {/* Logo */}
        <div className="logo">
          <Image height={35} src={logo} alt="Company Logo" priority />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="menu sm:hidden text-black cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex">
          <ul className="flex items-center gap-2 md:gap-5 font-normal text-md">
            <li>
              <a href="#crypto-taxes" className="hover:text-blue-500">
                Crypto Taxes
              </a>
            </li>
            <li>
              <a href="#free-tools" className="hover:text-blue-500">
                Free Tools
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-blue-500">
                Resource Center
              </a>
            </li>
            <li>
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-white p-5 z-10 shadow-lg sm:hidden">
          <ul className="flex flex-col items-start space-y-4">
            <li>
              <a
                href="#crypto-taxes"
                className="text-black hover:text-blue-500"
                onClick={toggleMenu}
              >
                Crypto Taxes
              </a>
            </li>
            <li>
              <a
                href="#free-tools"
                className="text-black hover:text-blue-500"
                onClick={toggleMenu}
              >
                Free Tools
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-black hover:text-blue-500"
                onClick={toggleMenu}
              >
                Resource Center
              </a>
            </li>
            <li>
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
