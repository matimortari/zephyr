import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Use a helper to make it easier to conditionally add Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
