import type { AnimeEntry } from "@/store/db";
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

export function getAverageRating(animeEntries:AnimeEntry[]){
  if(animeEntries.length === 0 ) return 0
  const total =  animeEntries.reduce((prev , curr)=>prev + (curr.userRating ?? 0) , 0)
  return  Math.round(total/animeEntries.length)
  
}
