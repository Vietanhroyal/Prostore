import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert prisma into regular JS objeTct
export function convertToPlainObject<T>(value: T): T { 
  return JSON.parse(JSON.stringify(value));
}
