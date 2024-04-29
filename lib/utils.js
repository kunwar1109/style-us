import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { db } from "./db"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

