"use client";

import { Button } from "@/components/ui/Button";
import LicenseDropdown from "./LicenseDropdown";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isMenuOpen: boolean;
}

const paths = [
  { key: 1, title: "About", path: "/about" },
  { key: 2, title: "Blogs", path: "/blogs" },
  { key: 3, title: "Contact Us", path: "/contact-us" },
];

const Navbar = ({ isMenuOpen }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "flex-col max-xl:absolute inset-x-0 top-[71px] bg-white xl:bg-transparent w-full xl:w-fit h-[calc(100vh-71px)] xl:h-auto max-xl:overflow-y-auto",
        isMenuOpen ? "block" : "hidden xl:block"
      )}
      id="toggle-menu"
    >
      <ul className="max-xl:container flex-1 flex flex-col xl:flex-row xl:items-center xl:gap-4 pt-6 xl:pt-0">
        <ServicesDropdown />

        <LicenseDropdown />

        {paths?.map((path) => (
          <li key={path?.key} className="relative xl:py-8 group cursor-pointer">
            <Link
              href={path?.path}
              className={cn(
                "flex justify-between gap-x-2 items-center px-4 py-4 xl:py-2 text-xl md:text-base font-bold text-gray-400 group-hover:text-primary hover:bg-gray-100/10 ease-linear duration-300 rounded-[24px]",
                pathname === path?.path && "bg-gray-100/10 text-primary"
              )}
            >
              {path?.title}
            </Link>
          </li>
        ))}

        <Button asChild className="px-10 xl:hidden mx-4 mt-2">
          <Link href="/cost-calculator">Cost Calculator</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
