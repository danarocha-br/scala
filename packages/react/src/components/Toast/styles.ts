import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'fixed',
    'select-none',
    'w-[inherit]',
    'h-auto',
    'flex',
    'flex-col',
    'gap-2',
    'z-[100]',
  ],
  {
    variants: {
      directionY: {
        top: ['top-4'],
        bottom: ['bottom-4'],
      },

      directionX: {
        left: ['left-4'],
        right: ['right-4'],
      },
    },

    defaultVariants: {
      directionX: 'right',
      directionY: 'top',
    },
  }
);

export const toast = cva([
  'bg-surface-color-background-subdued',
  'rounded-sm',
  'border',
  'border-action-color-background-transparent-pressed',
  'relative',
  'pb-2',

  'md:w-[400px]',
]);

export const marker = cva(
  ['bg-red', 'w-full', 'h-1', 'rounded-tl-md', 'rounded-tr-md'],
  {
    variants: {
      variant: {
        info: ['bg-interactive-color-background-subdued'],
        success: ['bg-feedback-color-background-success-enabled'],
        danger: ['bg-feedback-color-background-danger-subdued'],
        warning: ['bg-feedback-color-background-warning-enabled'],
        neutral: ['bg-surface-color-background-pressed'],
      },
    },

    defaultVariants: {
      variant: 'info',
    },
  }
);

export const title = cva([
  'text-text-color-body',
  'font-medium',
  'flex',
  'justify-between',
  'gap-2',
  'pt-2',
  'pb-1',
  'px-2',
  'relative',
]);

export const icon = cva([], {
  variants: {
    variant: {
      info: ['fill-interactive-color-background-subdued'],
      success: ['fill-feedback-color-background-success-enabled'],
      danger: ['fill-feedback-color-background-danger-enabled'],
      warning: ['fill-feedback-color-background-warning-enabled'],
      neutral: ['fill-text-color-caption'],
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const message = cva([
  'text-text-color-body-lighter',
  'px-3',
  'pt-2',
  'pb-1',
]);
