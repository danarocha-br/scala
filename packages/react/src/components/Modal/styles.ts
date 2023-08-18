import { cva } from 'class-variance-authority';

export const modalOverlay = cva([
  'bg-neutral-800',
  'fixed',
  'inset-0',
  'left-0',
  'z-max',
  'animate-overlay',
]);

export const modalContent = cva([
  'font-sans',
  'bg-surface-color-background-default',
  'rounded-md',
  'shadow-high',
  'fixed',
  'top-1/2',
  'left-1/2',
  'translate-x-1/2',
  'translate-y-1/2',
  'w-full',
  'h-full',
  'z-max',

  'focus:outline-none',

  'motion-safe:animate-show-overlay-content',
  'delay-[10ms]',

  'md:w-[85vw]',
  'md:h-[80vh]',
  'xl:w-[60vw]',
  'xl:h-[80vh]',
]);

export const modalTitle = cva(
  ['text-text-color-body-lighter', 'font-medium', 'text-md', 'm-0', 'pt-2'],
  {
    variants: {
      variant: {
        danger: ['text-feedback-danger-color-background-default'],
        transactional: [],
        passive: [],
      },

      hasCustomHeader: {
        true: ['pb-0', 'flex', 'items-center'],
      },
    },

    defaultVariants: {
      variant: 'transactional',
      hasCustomHeader: false,
    },
  }
);

export const modalDescription = cva([
  'text-text-color-caption',
  'text-[15px]',
  'leading-[1.5]',
  'm-[10px_0_20px]',
  'px-3',
]);

export const modalClose = cva(['relative', 'right-[-8px]']);

export const modalFooter = cva([
  'flex',
  'justify-end',
  'items-center',
  'gap-3',
  'px-2',
  'py-2',
  'bottom-0',
  'right-1',
  'fixed',
]);
