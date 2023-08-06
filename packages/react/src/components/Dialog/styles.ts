import { cva } from 'class-variance-authority';

export const dialogOverlay = cva([
  'bg-color-neutral-800',
  'fixed',
  'inset-0',
  'left-0',
  'z-max',
  'motion-safe:animate-[animate-overlay_100ms_cubic-bezier(0.16, 1, 0.3, 1)_forwards]',
]);

export const dialogContent = cva([
  'font-sans',
  'bg-surface-color-background-default',
  'roundex-md',
  'shadow-high',
  'fixed',
  'top-1/2',
  'left-1/2',
  'translate-[-50%, -50%]',
  'w-90vw',
  'max-w-[650px]',
  'min-h-[85vh]',
  'z-max',
  'focus:outline-none',

  'motion-safe:animate-[animate-show-content_150ms_cubic-bezier(0.390, 0.575, 0.565, 1.000)_both]',
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
  'm-[10px 0 20px]',
  'px-3',
]);

export const dialogClose = cva(['relative', 'right-[-8px]']);

export const dialogFooter = cva([
  'flex',
  'justify-end',
  'items-center',
  'gap-3',
  'px-2',
  'py-2',
]);
