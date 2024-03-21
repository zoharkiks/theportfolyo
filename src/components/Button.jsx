import React from "react";
import { cva } from "class-variance-authority";

const button = cva(" rounded-2xl border-2", {
  variants: {
    intent: {
      primary: [" text-primary font-medium border-accent"],
      secondary: [
        "border-background text-background font-medium",
      ],
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
