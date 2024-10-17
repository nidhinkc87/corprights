"use client";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/assets/logo/logo.png";
import Navbar from "@/components/sections/layout/header/Navbar";
import { useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import MobileNavMenu from "@/components/sections/layout/header/MobileMenu";

function Header() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-0 inset-x-0 w-full bg-white  z-50"
      >
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

            <Navbar />

            <MobileNavMenu />

            <Button asChild className="px-10 hidden xl:flex">
              <Link href="/cost-calculator">Cost Calculator</Link>
            </Button>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

export default Header;
