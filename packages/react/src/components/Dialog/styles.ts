import { cva } from 'class-variance-authority';

export const dialogOverlay = cva([
  'bg-neutral-800',
  'fixed',
  'inset-0',
  'left-0',
  'z-max',
  'animate-overlay',
]);

export const dialogContent = cva([
  'font-sans',
  'bg-surface-color-background-default',
  'rounded-md',
  'shadow-high',
  'fixed',
  'top-1/2',
  'left-1/2',
  'translate-x-1/2',
  'translate-y-1/2',
  'w-[90vw]',
  'max-w-[650px]',
  'max-h-[85vh]',
  'z-max',
  'focus:outline-none',

  'motion-safe:animate-show-overlay-content',
  'delay-[10ms]',
]);

export const dialogTitle = cva(
  ['text-text-color-body-lighter', 'font-medium', 'text-md', 'm-0', 'pt-2'],
  {
    variants: {
      variant: {
        danger: ['text-feedback-danger-color-background-default'],
        transactional: [],
        passive: [],
      },
    },

    defaultVariants: {
      variant: 'transactional',
    },
  }
);

export const dialogDescription = cva([
  'text-text-color-caption',
  'text-[15px]',
  'leading-[1.5]',
  'my-3',
  'px-3',
]);

export const dialogClose = cva(['relative', 'right-[-8px]']);

export const dialogFooter = cva([
  'flex',
  'justify-end',
  'items-center',
  'gap-2',
  'px-2',
  'py-2',
]);
