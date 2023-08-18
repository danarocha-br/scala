import { cva } from 'class-variance-authority';

export const container = cva([]);

export const steps = cva([
  'grid',
  'grid-cols-[repeat(var(--steps-count),_1fr)]',
  'gap-2',
  'mt-1',
]);

export const step = cva(['h-1', 'rounded-sm'], {
  variants: {
    isActive: {
      true: ['bg-feedback-color-background-success-subdued'],
      false: ['bg-surface-color-background-hover'],
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
