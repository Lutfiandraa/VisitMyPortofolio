import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging Tailwind classes safely.
 * Combines clsx (conditional classes) + tailwind-merge (deduplication).
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-brand-600', 'px-6') // → 'py-2 bg-brand-600 px-6'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
