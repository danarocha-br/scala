import { cva } from 'class-variance-authority';

export const card = cva(
  [
    'group',
    'bg-surface-color-background-default',
    'cursor-pointer',
    'rounded-sm',
    'outline-none',
    'border',
    'border-action-color-border-transparent-enabled/50',

    'p-0',
    'transition-all',

    'hover:bg-[#FBFBFA]',
    'hover:[data-mode=dark]:text-text-color-on-dark',
    'hover:[data-mode=dark]:bg-surface-color-background-subdued',

    'focus:outline-offset-2',
    'focus:outline-2',
    'focus:outline-action-color-border-transparent-pressed',
  ],
  {
    variants: {
      status: {
        published: [],
        draft: [
          'border-dashed',
          'border-action-color-border-danger-enabled/50',
        ],
      },
    },
  }
);
