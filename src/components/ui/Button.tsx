import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ease-linear duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-gradient flex items-center justify-center px-6 py-4 text-white text-base font-bold hover:bg-gradient-to-r from-primary-700 to-primary-700 transition-[background-image]",
        outline:
          "bg-transparent border border-primary-50 h-12 flex items-center justify-center px-6 py-4 text-primary text-base font-bold hover:text-background hover:bg-primary-gradient hover:border-transparent transition-[background-image]",
        secondary:
          " bg-white flex items-center justify-center px-6 py-4 text-primary text-base font-bold hover:text-white hover:bg-gradient-to-r from-primary-700 to-primary-700 transition-[background-image]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 py-3",
        sm: "h-[34px] px-4 py-3",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
