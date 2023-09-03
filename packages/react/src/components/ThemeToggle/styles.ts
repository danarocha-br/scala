import { cva } from 'class-variance-authority';

export const button = cva([
  'rounded-sm',
  'cursor-pointer',
  'relative',
  'scale-[0.8]',
  'p-2',
  'transition-all',
  'outline-none',

  'hover:bg-action-color-background-transparent-hover',

  'focus:outline-2',
  'focus:outline-action-color-background-transparent-disabled',
  'focus:outline-offset-2',
]);

export const svg = cva(
  [
    'my-0',
    'mx-auto',
    'fill-none',
    'transition-all',

    '[&_path]:stroke-text-color-body-lighter',
    '[&_path]:stroke-2',
    '[&_path]:[stroke-line-cap:round]',
    '[&_path]:transition-all',
  ],
  {
    variants: {
      isDark: {
        true: ['translate-y-[-3px]'],
      },
    },

    defaultVariants: {
      isDark: false,
    },
  }
);

export const light = cva(
  ['[stroke-dasharray:3px]', '[stroke-dashoffset:0px]'],
  {
    variants: {
      isDark: {
        true: ['[stroke-dashoffset:3px]', 'opacity-0'],
      },
    },
    defaultVariants: {
      isDark: false,
    },
  }
);
