import { cva } from 'class-variance-authority';

export const bredcrumItem = cva(
  [
    'group',
    'text-md',
    'list-none',
    'cursor-pointer',
    'transition-all',
    'inline-flex',
    'items-center',
    'gap-1',

    '[&:not(:last-child):after]:content-["/"]',
    '[&:not(:last-child):after]:text-text-color-caption',
    '[&:not(:last-child):after]:text-text-color-caption',
    '[&:not(:last-child):after]:opacity-50',
    '[&:not(:last-child):after]:ml-2',
    '[&:not(:last-child):after]:mr-1',
  ],
  {
    variants: {
      isActive: {
        true: ['[&_a]:text-text-color-body', '[&_button]:text-text-color-body'],
        false: [
          '[&_a]:text-text-color-caption',
          '[&_button]:text-text-color-caption',
        ],
      },
    },
  }
);

export const button = cva([
  'outline-none',
  'rounded-sm',
  'py-1',
  'px-2',
  'whitespace-nowrap',
  'hover:bg-action-color-background-transparent-hover/70',
  'focus:outline-2',
  'focus:outline-offset-2',
  'focus:outline-action-color-border-transparent-pressed/70',
  'transition-colors',
]);

export const link = cva([
  'outline-none',
  'no-underline',
  'whitespace-nowrap',
  'py-1',
  'px-2',
  'hover:bg-action-color-background-transparent-hover/70',
  'focus:outline-2',
  'focus:outline-offset-2',
  'focus:outline-action-color-border-transparent-pressed/70',
  'transition-colors',
]);

export const icon = cva([
  '-translate-x-1',
  'opacity-0',
  'transition-all',
  'duration-300',
  'ease-in-out',
  'group-hover:translate-x-[0px]',
  'group-hover:opacity-100',
]);
