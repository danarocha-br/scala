import { cva } from 'class-variance-authority';

export const button = cva(
  [
    'text-action-color-text-transparent-enabled',
    'bg-action-color-background-transparent-enabled',
    'flex',
    'items-center',
    'justify-center',
    'outline-none',
    'border-none',
    'outline-transparent',
    'cursor-pointer',
    'transition-all',

    'hover:not([disabled]):bg-action-color-background-transparent-hover',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-transparent',

    'aria-disabled:opacity-60',
    'aria-disabled:cursor-not-allowed',

    'active:scale-95',

    '[&_svg]:fill-action-color-text-transparent-enabled',
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
        primary: ['focus:outline-action-color-border-transparent-pressed'],
        secondary: [
          'text-interactive-color-background-enabled',
          '[&_svg]:fill-interactive-color-background-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
        danger: [
          'text-feedback-color-background-danger-enabled',
          '[&_svg]:fill-interactive-color-background-danger-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
      },

      loading: {
        true: [
          'bg-action-color-background-transparent-hover',
          'border-0',
          'relative',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:bottom-0',
          'after:left-0',
          'after:right-0',
          'after:rounded-md',
          'after:bg-[var(--button-loading-gradient)]',
          'after:bg-100',
          'after:clip-path-[var(--button-loading-clip-path)]',
          'after:animation-[--button-loading-animation]',
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
