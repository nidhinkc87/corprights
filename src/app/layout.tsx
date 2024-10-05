import "@/styles/globals.css";

import Footer from "@/components/sections/Footer/Footer";
import Header from "@/components/sections/Header/Header";
import type { Metadata } from "next";

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
