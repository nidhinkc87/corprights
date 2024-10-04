"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoImg from "@/assets/logo/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/sections/Header/Navbar";
import { cn } from "@/lib/utils";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 inset-x-0 w-full bg-white xl:bg-white/[4%] backdrop-blur-[14px] z-[10]">
      <div className="container pt-4 pb-4 lg:py-6 xl:pt-0 xl:pb-0">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div>
              <Image
                src={LogoImg}
                alt="corprights-logo"
                className="w-[128.67px] lg:w-auto"
              />
            </div>
          </Link>

          <button
            className="w-10 h-10 flex items-center justify-end xl:hidden"
            onClick={handleToggleMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn("", menuOpen && "hidden")}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7996 17.9998C10.7996 17.337 11.3369 16.7998 11.9996 16.7998H19.1996C19.8624 16.7998 20.3996 17.337 20.3996 17.9998C20.3996 18.6626 19.8624 19.1998 19.1996 19.1998H11.9996C11.3369 19.1998 10.7996 18.6626 10.7996 17.9998ZM3.59961 5.9998C3.59961 5.33706 4.13686 4.7998 4.79961 4.7998H19.1996C19.8624 4.7998 20.3996 5.33706 20.3996 5.9998C20.3996 6.66254 19.8624 7.1998 19.1996 7.1998H4.79961C4.13686 7.1998 3.59961 6.66254 3.59961 5.9998ZM3.59961 11.9998C3.59961 11.3371 4.13686 10.7998 4.79961 10.7998H19.1996C19.8624 10.7998 20.3996 11.3371 20.3996 11.9998C20.3996 12.6626 19.8624 13.1998 19.1996 13.1998H4.79961C4.13686 13.1998 3.59961 12.6626 3.59961 11.9998Z"
                fill="#2BB162"
              />
            </svg>

            <svg
              className={cn("", !menuOpen && "hidden")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.87905 20.9998C3.7052 20.9998 3.53525 20.9483 3.39068 20.8517C3.24612 20.7551 3.13345 20.6179 3.06691 20.4573C3.00038 20.2966 2.98297 20.1199 3.0169 19.9494C3.05082 19.7789 3.13456 19.6223 3.2575 19.4993L19.4994 3.25745C19.6642 3.09261 19.8878 3 20.1209 3C20.3541 3 20.5777 3.09261 20.7425 3.25745C20.9073 3.4223 21 3.64588 21 3.87901C21 4.11213 20.9073 4.33571 20.7425 4.50056L4.50061 20.7424C4.41906 20.8242 4.32217 20.889 4.2155 20.9331C4.10884 20.9773 3.9945 20.9999 3.87905 20.9998Z"
                fill="#2BB162"
              />
              <path
                d="M20.1209 20.9998C20.0055 20.9999 19.8911 20.9773 19.7844 20.9331C19.6778 20.889 19.5809 20.8242 19.4993 20.7424L3.25745 4.50056C3.09261 4.33571 3 4.11213 3 3.87901C3 3.64588 3.09261 3.4223 3.25745 3.25745C3.4223 3.09261 3.64588 3 3.87901 3C4.11213 3 4.33571 3.09261 4.50056 3.25745L20.7424 19.4993C20.8654 19.6223 20.9491 19.7789 20.9831 19.9494C21.017 20.1199 20.9996 20.2966 20.933 20.4573C20.8665 20.6179 20.7538 20.7551 20.6093 20.8517C20.4647 20.9483 20.2948 20.9998 20.1209 20.9998Z"
                fill="#2BB162"
              />
            </svg>
          </button>

          <Navbar isMenuOpen={menuOpen} />

          <Button
            asChild
            variant="default"
            className="rounded-[6px]  px-10 hidden xl:flex"
          >
            <Link href="#cost-calculator">Cost Calculator</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
