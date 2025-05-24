// utils/cn.js or utils/cn.jsx

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to combine class names with conditional logic and Tailwind merging
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
