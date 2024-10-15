import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/components/sections/layout/footer/Footer";
import Header from "@/components/sections/layout/header/Header";
import type { Metadata } from "next";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ToastContainer } from "react-toastify";
import { getGlobalData } from "@/api/global";

export const metadata: Metadata = {
  title: "Corprights",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const global = await getGlobalData();

  const isGlobal = (data: Global | never[]): data is Global => {
    return !Array.isArray(data);
  };

  const footer =
    isGlobal(global.data) && global?.data?.footer
      ? global?.data?.footer
      : undefined;

  return (
    <html lang="en">
      <body className="font-manrope">
        <Header />

        <SmoothScroll>{children}</SmoothScroll>

        <ToastContainer hideProgressBar position="top-right" />

        <Footer footer={footer} />
      </body>
    </html>
  );
}
