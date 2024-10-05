"use client";

import { useEffect } from "react";

export default function CurrentYear() {
  let year = new Date()?.getFullYear();

  useEffect(() => {
    year = new Date()?.getFullYear();
  }, []);

  return <>{year}</>;
}
