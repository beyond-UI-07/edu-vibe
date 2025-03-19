import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// mongodb user name
// beyondui1007
// Password
// 1hQRoJKANKSqmYpq