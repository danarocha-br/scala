import { cva } from 'class-variance-authority';

export const button = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'outline-none',
    'outline-transparent',
    'border-none',
    'transition-all',
    'w-[28px]',
    'h-[28px]',
    'p-0',
    'rounded-sm',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:transparent',

    'disabled:opacity-60',
    'disabled:cursor-not-allowed',

    'active:scale-95',
  ],
  {
    variants: {
      theme: {
        none: [
          'text-action-color-text-transparent-enabled',
          'bg-action-color-background-transparent-enabled',
          'hover:bg-action-color-background-transparent-hover',
        ],
        dark: [
          'bg-neutral-600',
          'text-text-color-on-dark',
          'hover:bg-neutral-800',
        ],
        light: [
          'bg-neutral-100',
          'hover:bg-action-color-background-transparent-hover',
        ],
      },
    },
  }
);

export const iconClipboard = cva([], {
  variants: {
    theme: {
      none: ['fill-action-color-text-transparent-enabled'],
      dark: ['fill-text-color-on-dark'],
      light: ['fill-action-color-text-transparent-enabled'],
    },
  },
});

export const iconCheck = cva('fill-feedback-color-background-success-subdued');
