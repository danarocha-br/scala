import { cva } from 'class-variance-authority';

export const header = cva(
  [
    'text-md',
    'rounded-tr-md',
    'flex',
    'items-center',
    'gap-2',
    'w-full',
    'h-5',

    'relative',

    '[data-mode=dark]:text-text-color-on-light',
  ],
  {
    variants: {
      variant: {
        info: [
          'text-feedback-color-background-info-enabled',
          'bg-feedback-color-background-info-disabled',

          '[data-mode=dark]:bg-[#405fed1c]',
          '[data-mode=dark]:text-text-color-on-dark',
        ],
        success: [
          'text-feedback-color-background-success-enabled',
          'bg-feedback-color-background-success-disabled/60',

          '[data-mode=dark]:text-text-color-on-dark',
          '[data-mode=dark]:bg-[#37b1351a]',
        ],
        danger: [
          'text-feedback-color-background-danger-enabled',
          'bg-feedback-color-background-danger-disabled/60',
          '[data-mode=dark]:text-text-color-on-dark',
          '[data-mode=dark]:bg-[#f1786f17]',
        ],
        warning: [
          'text-feedback-color-background-warning-enabled',
          'bg-feedback-color-background-warning-disabled',
          '[data-mode=dark]:text-text-color-on-dark',
          '[data-mode=dark]:bg-[#fcc88d1f]',
        ],
      },
    },

    defaultVariants: {
      variant: 'info',
    },
  }
);

export const container = cva([
  'text-sm',
  'w-full',
  'flex',
  'rounded-md',
  'border',
  'border-action-color-border-transparent-enabled',
]);

export const marker = cva(['w-1', 'h-auto', 'rounded-tl-md', 'rounded-bl-md'], {
  variants: {
    variant: {
      info: ['bg-feedback-color-background-info-enabled'],
      success: ['bg-feedback-color-background-success-enabled'],
      danger: ['bg-feedback-color-background-danger-enabled'],
      warning: ['bg-feedback-color-background-warning-enabled'],
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});
