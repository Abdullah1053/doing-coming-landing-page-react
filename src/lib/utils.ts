/**
 * Utility function to join class names conditionally.
 * Accepts a list of class names (or falsy values) and
 * returns a string of the truthy values separated by a space.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
} 