"use client";

import { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");

    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );

    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[100dvh] xl:h-[75dvh]"
      data-url={url}
    ></div>
  );
};

export default CalendlyEmbed;
