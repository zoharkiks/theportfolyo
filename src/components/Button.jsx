import React from "react";
import { cva } from "class-variance-authority";

const button = cva(" rounded-2xl border-2 font-medium uppercase", {
  variants: {
    intent: {
      primary: [
        " text-primary  border-accent hover:bg-accent transition-colors duration-[150ms] ease-in-expo ",
      ],
      secondary: ["border-background text-background "],
      disabled: ["bg-primary text-background "],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);
