import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getSeason(date = new Date()) {
  const month = date.getMonth();
  const seasons = ["Winter", "Spring", "Summer", "Autumn"];
  return seasons[Math.floor(((month + 1) % 12) / 3)];
}
