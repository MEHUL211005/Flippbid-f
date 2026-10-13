import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="h-[64px] sm:h-[80px] xl:h-[90px] w-full flex relative overflow-visible bg-white shadow-sm z-50">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20 flex w-full items-center justify-between gap-2 xl:gap-0">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-[42px] sm:h-[56px] lg:h-[58px] xl:h-[70px] shrink-0"
        />
        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-[32px] text-[14px] xl:text-[16px] ml-4 lg:ml-10 xl:ml-20 mr-auto whitespace-nowrap">
          <li className="text-[14px] xl:text-[16px] font-bold text-[#575665] cursor-pointer">
            Home
          </li>
          <li className="text-[14px] xl:text-[16px] text-[#6B7280] hover:text-black cursor-pointer transition-colors">
            7 Day Trial
          </li>
          <li className="text-[14px] xl:text-[16px] text-[#6B7280] hover:text-black cursor-pointer transition-colors">
            Submit Property
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-auto">
          <Button className="bg-[#CCF1F7] w-[105px] lg:w-[120px] xl:w-[160px] h-[38px] lg:h-[42px] xl:h-[49px] font-bold rounded-[8.07px] text-[13px] xl:text-base whitespace-nowrap">
            Book a Demo
          </Button>
          <Button className="h-[38px] lg:h-[42px] xl:h-[49px] w-[88px] lg:w-[100px] xl:w-[126px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px] text-[13px] xl:text-base">
            Sign Up
          </Button>
          <Button className="h-[38px] lg:h-[42px] xl:h-[49px] w-[88px] lg:w-[100px] xl:w-[126px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px] text-[13px] xl:text-base">
            Log In
          </Button>
        </div>

        {/* Hamburger Icon for Mobile & Tablet (< lg) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close (X) Icon
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-[220px] sm:w-[280px] bg-white shadow-lg border-t border-gray-100 flex flex-col px-6 py-6 gap-5 lg:hidden z-50">
          <ul className="flex flex-col gap-4 text-base">
            <li
              onClick={closeMenu}
              className="font-bold text-[#575665] cursor-pointer pb-2 border-b border-gray-100"
            >
              Home
            </li>
            <li
              onClick={closeMenu}
              className="text-[#6B7280] cursor-pointer pb-2 border-b border-gray-100"
            >
              7 Day Trial
            </li>
            <li
              onClick={closeMenu}
              className="text-[#6B7280] cursor-pointer pb-2 border-b border-gray-100"
            >
              Submit Property
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-2">
            <Button className="bg-[#CCF1F7] w-full h-[45px] font-bold rounded-[8.07px] text-sm">
              Book a Demo
            </Button>
            <Button className="h-[45px] w-full bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px] text-sm">
              Sign Up
            </Button>
            <Button className="h-[45px] w-full bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-bold rounded-[8.07px] text-sm">
              Log In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;