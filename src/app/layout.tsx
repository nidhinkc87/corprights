import "@/styles/globals.css";

import Footer from "@/components/sections/layout/footer/Footer";
import type { Metadata } from "next";
import Header from "@/components/sections/layout/header/Header";

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

        {children}

        <Footer />
      </body>
    </html>
  );
}
