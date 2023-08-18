import { cva } from 'class-variance-authority';

export const root = cva([
  'h-inherit',
  'w-inherit',
  'animate-pulse',
]);

export const item = cva(['bg-loading-color-background-default'], {
  variants: {
    circle: {
      true: ['rounded-circle'],
      false: ['rounded-pill'],
    },
  },
  defaultVariants: {
    circle: false,
  },
});
