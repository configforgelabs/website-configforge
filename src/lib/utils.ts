import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeQuotations(stringValue: string) {
  let stagingValue = stringValue

  if(stringValue.startsWith("“")){
    stagingValue = stagingValue.substring(1)
  }

  if(stringValue.endsWith("”")) {
    stagingValue = stagingValue.slice(0, -1);
  }

  return stagingValue
}