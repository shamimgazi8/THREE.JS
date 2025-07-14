"use client";

import { useState } from "react";
import Link from "next/link"; // Import the Link component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-[#111] text-sm text-white border-b-[1px] border-white/20">
      <div className="w-full md:w-[90%] lg:w-[60%] mx-auto flex items-center justify-between">
        <div className="font-semibold text-xl">
          {/* Typically, your logo/brand name would link to the homepage */}
          <Link href="/">iPhone 16 Pro</Link>
        </div>

        {/* Hamburger Icon for Mobile/Tablet */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-[12px]">
          <li className="cursor-pointer hover:underline">
            <Link href="/overview">Overview</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/switch-from-android">
              Switch from Android to iPhone
            </Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/tech-specs">Tech Specs</Link>
          </li>
          {/* The buy button could also be a Link or a standard button that triggers an action */}
          <li>
            <Link
              href="/buy"
              className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500 transition"
            >
              Buy
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-start gap-4 text-[14px]">
            <li className="cursor-pointer hover:underline py-1">
              <Link href="/overview" onClick={() => setIsMenuOpen(false)}>
                Overview
              </Link>
            </li>
            <li className="cursor-pointer hover:underline py-1">
              <Link
                href="/switch-from-android"
                onClick={() => setIsMenuOpen(false)}
              >
                Switch from Android to iPhone
              </Link>
            </li>
            <li className="cursor-pointer hover:underline py-1">
              <Link href="/tech-specs" onClick={() => setIsMenuOpen(false)}>
                Tech Specs
              </Link>
            </li>
            <li>
              <Link
                href="/buy"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500 transition w-full text-left"
              >
                Buy
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
