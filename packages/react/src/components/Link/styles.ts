import { cva } from 'class-variance-authority';

export const container = cva([
  'rounded-sm',
  'outline-none',
  'focus-visible:outline-2',
  'focus-visible:offset-2',
  'focus-visible:outline-interactive-color-background-disabled',
]);

export const anchor = cva(
  [
    'font-medium',
    'no-underline',
    'outline-none',
    'cursor-pointer',
    'relative',
    'whitespace-nowrap',
    'px-1',
    'rounded-sm',
    'group',

    'hover:outline-none',

    'hover:before:[transform:translate3d(0,_2px,_0)]',
    'hover:before:[transform:scale3d(1.05,_2,_1)]',
    'hover:before:[clip-path:polygon(0%_0%,_0%_100%,_50%_100%,_50%_0,_50%_0,_50%_100%,_50%_100%,_0_100%,_100%_100%,_100%_0%)]',

    'before:content-[""]',
    'before:absolute',
    'before:w-full',
    'before:h-[2px]',
    'before:bg-current',
    'before:top-[100%]',
    'before:left-0',
    'before:pointer-events-none',
    'before:origin-[50%_100%]',
    'before:[clip-path:polygon(0%_0%,_0%_100%,_0_100%,_0_0,_100%_0,_100%_100%,_0_100%,_0_100%,_100%_100%,_100%_0%)]',
    'before:transition-all',
    'before:duration-300',
    'before:ease-[cubic-bezier(0.2,1,0.8,1)]',
    'after:absolute',
    'after:w-full',
    'after:bg-current',
    'after:top-[100%]',
    'after:left-0',
    'after:pointer-events-none',
  ],
  {
    variants: {
      color: {
        primary: [
          'text-text-color-body',
          'active:text-action-color-background-primary-pressed',
        ],

        secondary: [
          'text-interactive-color-background-enabled',
          'active:text-interactive-color-background-pressed',
        ],

        caption: [
          'text-text-color-body-lighter',
          'active:text-text-color-body',
        ],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export const label = cva([
  'group-hover:[transform:translate3d(0,_-2px,_0)]',
  'inline-block',
  'transition-transform',
  'animate-[transform_0.3s_cubic-bezier(0.2,_1,_0.8,_1)]',
]);
