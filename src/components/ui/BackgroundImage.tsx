import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src: string | StaticImport;
  alt: string;
  ImageProps?: Omit<React.ComponentProps<typeof Image>, "src">;
  imageClass?: string;
}

export const BackgroundImage = ({
  children,
  src,
  alt,
  ImageProps,
  imageClass,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div {...props}>
      <Image
        {...ImageProps}
        src={src}
        className={imageClass}
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        alt={alt ?? ""}
        placeholder="blur"
      />
      {children}
    </div>
  );
};
