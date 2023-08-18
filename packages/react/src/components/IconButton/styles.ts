import { cva } from 'class-variance-authority';

export const button = cva(
  [
    'bg-action-color-background-transparent-enabled',
    'flex',
    'items-center',
    'justify-center',
    'outline-none',
    'border-none',
    'outline-transparent',
    'cursor-pointer',
    'transition-all',

    'hover:bg-action-color-background-transparent-hover',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-action-color-background-transparent-hover',

    'aria-disabled:opacity-60',
    'aria-disabled:cursor-not-allowed',

    'active:scale-95',

  ],
  {
    variants: {
      size: {
        xs: ['w-[22px]', 'h-[22px]', 'p-0', 'rounded-sm'],
        sm: ['w-[28px]', 'h-[28px]', 'p-0', 'rounded-sm'],
        md: ['w-6', 'h-6', 'p-0', 'rounded-md'],
      },

      variant: {
        primary: [],
        secondary: [
          'shadow-low',
          'border-2',
          'border-action-color-border-transparent-pressed',
        ],
      },

      color: {
        primary: [
          'text-action-color-text-transparent-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
        secondary: [
          'text-interactive-color-background-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
        danger: [
          'text-action-color-background-danger-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
      },

      loading: {
        true: [
          'relative',
          'bg-action-color-background-transparent-hover',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:right-0',
          'after:bottom-0',
          'after:left-0',
          'after:rounded-md',
          'after:bg-loading-gradient',
          '!after:border-[2.4px]',
          '!after:border-neutral-200',
          'after:bg-100',
          'after:clip-path-[var(--button-loading-clip-path)]',
          'after:animate-button-loading',
        ],
      },
    },

    defaultVariants: {
      variant: 'primary',
      color: 'primary',
      size: 'sm',
    },
  }
);
