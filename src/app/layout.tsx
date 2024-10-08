import "@/styles/globals.css";

import Footer from "@/components/sections/layout/footer/Footer";
import Header from "@/components/sections/layout/header/Header";
import type { Metadata } from "next";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Corprights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-manrope">
        <Header />
        <SmoothScroll>{children}</SmoothScroll>

        <Footer />
      </body>
    </html>
  );
}
