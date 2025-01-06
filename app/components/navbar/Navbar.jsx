"use client";
import { ModalContext } from "@/app/context/modalContext";
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch, LuUser2, LuShoppingCart, LuMenu } from "react-icons/lu";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const triggerMenu = () => setIsMenuOpened(!isMenuOpened);

  const { setIsModalOpen } = useContext(ModalContext);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="relative bg-[#F1FCFF]">
      <div className="flex flex-nowrap py-5 justify-between px-4 sm:px-8 md:px-16">
        {/* Left Logo & Links */}
        <div className="flex justify-between items-center gap-5">
          {/* Logo */}
          <div>
            <Link href="/">
              <img className="w-24 lg:w-32" src="./assets/logo.png" alt="" />
            </Link>
          </div>

          {/* Links */}
          <ul className="text-gray-500 text-sm font-medium hidden items-center p-5 space-x-5 md:flex">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">
                <span className="flex items-center gap-1">
                  Courses <IoIosArrowDown className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="flex items-center gap-1">
                  Pages <IoIosArrowDown className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a href="">Instructors</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        {/* DESKTOP: Right Search Buttons & Icons */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Search Bar */}
          <div className="hidden lg:block">
            <form className="bg-none border-[1px] border-gray-300 rounded-md flex items-center py-3 px-5 text-sm">
              <input
                className="bg-transparent outline-none text-sm text-gray-500"
                type="text"
                placeholder="Courses name .."
              />
              <button>
                <LuSearch className="size-5 text-gray-500" />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex gap-2">
            <LuSearch className="text-gray-500 lg:hidden" size={21} />
            <a href="" onClick={openModal}>
              <LuUser2 className="text-gray-500" size={21} />
            </a>
            <div className="relative flex">
              <LuShoppingCart className="text-gray-500" size={21} />
              <span className="bg-primary-blue w-2 h-2 rounded-full absolute -right-[3px]" />
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="bg-primary-blue text-white rounded-md px-6 py-2 text-sm border-2 border-primary-blue">
              My Courses
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET: Right Hamburger Icon & Other Icons */}
        <div
          className="flex items-center justify-center gap-4 md:hidden"
        >
          {/* Icons */}
          <div className="flex gap-2 md:hidden">
            <a href="/" onClick={openModal}>
              <LuUser2 className="text-gray-500" size={21} />
            </a>
            <div className="relative flex">
              <LuShoppingCart className="text-gray-500" size={21} />
              <span className="bg-blue-600 w-2 h-2 rounded-full absolute -right-[3px]" />
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="flex items-center md:hidden cursor-pointer" onClick={triggerMenu}>
            <LuMenu size={32} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`absolute bg-white transition-all w-full overflow-hidden z-50 md:hidden ${
          isMenuOpened ? "h-[calc(100vh-12vh)] sm:h-[calc(100vh-15vh)]" : "h-0"
        }`}
      >
        {/* Links */}
        <div className="h-full">
          <ul className="text-gray-500 text-xl font-medium flex flex-col justify-center items-center space-y-4 p-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">
                <span className="flex items-center gap-1">
                  Courses <IoIosArrowDown className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="flex items-center gap-1">
                  Pages <IoIosArrowDown className="size-5" />
                </span>
              </a>
            </li>
            <li>
              <a href="">Instructors</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="px-5">
            <form className="bg-none border-[1px] border-gray-300 rounded-md flex items-center justify-between py-3 px-5 text-sm">
              <input
                className="bg-transparent outline-none text-sm text-gray-500"
                type="text"
                placeholder="Courses name .."
              />
              <button>
                <LuSearch className="size-5 text-gray-500" />
              </button>
            </form>
          </div>

          {/* Button */}
          <div className="flex justify-center py-5 px-5">
            <button className="w-full bg-primary-blue text-white rounded-md px-8 py-3 text-sm">
              My Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
