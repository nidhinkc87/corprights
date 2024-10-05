import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  isMenuOpen: boolean;
}

const services = [
  "GRO Services",
  "Accounting",
  "Company Dissolution",
  "Trademark registration",
  "PRO Service",
];

const licenses = [
  "Agriculture License",
  "Audiovisual Media License",
  "Industrial License",
  "PRO Mining License",
  "Real Estate License",
];

const Navbar = ({ isMenuOpen }: NavbarProps) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden xl:block"
      } flex-col max-xl:absolute inset-x-0 top-[71px] bg-white xl:bg-transparent w-full xl:w-fit h-[calc(100vh-71px)] xl:h-auto max-xl:overflow-y-auto`}
      id="toggle-menu"
    >
      <ul className="max-xl:container flex-1 flex flex-col xl:flex-row xl:items-center xl:gap-4 pt-6 xl:pt-0">
        {/* Services Dropdown */}
        <li className="relative xl:py-8 group cursor-pointer">
          <span className="nav-item peer">
            Services
            <svg
              className="group-hover:rotate-180 ease-in-out duration-200"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-primary"
                d="M8.66652 11.2004C8.19985 11.2004 7.73318 11.0204 7.37985 10.6671L3.03318 6.32042C2.83985 6.12708 2.83985 5.80708 3.03318 5.61375C3.22652 5.42042 3.54652 5.42042 3.73985 5.61375L8.08652 9.96042C8.40652 10.2804 8.92652 10.2804 9.24652 9.96042L13.5932 5.61375C13.7865 5.42042 14.1065 5.42042 14.2999 5.61375C14.4932 5.80708 14.4932 6.12708 14.2999 6.32042L9.95318 10.6671C9.59985 11.0204 9.13318 11.2004 8.66652 11.2004Z"
                fill="#706F6F"
              />
            </svg>
          </span>

          {/* Dropdown Menu */}
          <ul className="max-xl:ml-4 xl:absolute xl:pt-8 bg-white xl:p-6 w-max hidden group-hover:block">
            {services.map((service, index) => (
              <li
                key={index}
                className="relative group/child cursor-pointer p-4 hover:bg-gray-100/10 ease-linear duration-300"
              >
                <Link
                  href="/services"
                  className="text-base font-bold text-dark group-hover/child:text-primary ease-linear duration-300 py-4"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="relative xl:py-8 group cursor-pointer">
          <span className="nav-item">
            Licences
            <svg
              className="group-hover:rotate-180 ease-in-out duration-200"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-primary"
                d="M8.66652 11.2004C8.19985 11.2004 7.73318 11.0204 7.37985 10.6671L3.03318 6.32042C2.83985 6.12708 2.83985 5.80708 3.03318 5.61375C3.22652 5.42042 3.54652 5.42042 3.73985 5.61375L8.08652 9.96042C8.40652 10.2804 8.92652 10.2804 9.24652 9.96042L13.5932 5.61375C13.7865 5.42042 14.1065 5.42042 14.2999 5.61375C14.4932 5.80708 14.4932 6.12708 14.2999 6.32042L9.95318 10.6671C9.59985 11.0204 9.13318 11.2004 8.66652 11.2004Z"
                fill="#706F6F"
              />
            </svg>
          </span>

          <ul className="max-xl:ml-4 xl:absolute xl:pt-8 bg-white xl:p-6 w-max hidden group-hover:block">
            {licenses.map((license, index) => (
              <li
                key={index}
                className="relative group/child cursor-pointer p-4 hover:bg-gray-100/10 ease-linear duration-300"
              >
                <Link
                  href="/licenses"
                  className="text-base font-bold text-dark group-hover/child:text-primary ease-linear duration-300 py-4"
                >
                  {license}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        
        <li className="relative xl:py-8 group cursor-pointer">
          <Link href="/about-us" className="nav-item">
            About
          </Link>
        </li>

        <li className="relative xl:py-8 group cursor-pointer">
          <Link href="/blogs" className="nav-item">
            Blogs
          </Link>
        </li>

        <li className="relative xl:py-8 group cursor-pointer">
          <Link href="/contact-us" className="nav-item">
            Contact Us
          </Link>
        </li>

        {/* Cost Calculator Button (Visible on small screens) */}
        <Button variant="default" asChild className="px-10 xl:hidden mx-4 mt-2">
          <Link href="/cost-calculator">Cost Calculator</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
