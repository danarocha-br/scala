import { cva } from 'class-variance-authority';

export const container = cva(['animate-spin'], {
  variants: {
    size: {
      xs: ['h-3', 'w-3'],
      sm: ['h-4', 'w-4'],
      md: ['h-8', 'w-8'],
    },
  },
});

export const circle = cva([
  'animate-spinner',
  'stroke-feedback-color-text-danger-enabled',
]);
