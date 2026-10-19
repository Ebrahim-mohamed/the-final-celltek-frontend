import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Our custom type sizes, so a size passed in className replaces the default instead of stacking.
const merge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['hero', 'cta', 'title', 'title-sm', 'display', 'display-md', 'display-sm', 'step', 'h3-lg', 'h3', 'stat', 'lead', 'body', 'eyebrow'],
    },
  },
});

export const cn = (...classes: ClassValue[]) => merge(clsx(classes));
