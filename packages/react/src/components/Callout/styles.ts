import { cva } from 'class-variance-authority';

export const header = cva(
  [
    'font-sans',
    'text-md',
    'rounded-tr-md',
    'flex',
    'items-center',
    'gap-2',
    'w-full',
    'h-4',
    'py-1',
    'relative',

    '[data-mode=dark]:text-text-color-on-light',

    '[&_h5]:px-4',
  ],
  {
    variants: {
      variant: {
        info: [
          'text-feedback-color-background-info-enabled',
          'bg-[#d2e7feb3]',

          '[data-mode=dark]:bg-[#405fed1c]',
          '[data-mode=dark]:text-text-color-on-dark',
        ],
        success: [
          'text-feedback-color-background-success-enabled',
          'bg-color-forest-100',

          '[data-mode=dark]:text-text-color-on-dark',
          '[data-mode=dark]:bg-[#37b1351a]',
        ],
        danger: [
          'text-feedback-color-background-danger-enabled',
          'bg-color-froly-100',
          '[data-mode=dark]:text-text-color-on-dark',
          '[data-mode=dark]:bg-[#f1786f17]',
        ],
        warning: [
          'text-feedback-color-background-warning-enabled',
          'bg-[#fddeba60]',
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
  'font-sans',
  'text-sm',
  'w-full',
  'flex',
  'rounded-md',
  'border',
  'border-action-color-border-transparent-enabled',

  '[&_.callout__content]:px-4',
  '[&_.callout__content]:pb-2',
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
