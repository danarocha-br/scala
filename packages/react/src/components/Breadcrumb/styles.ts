import { cva } from 'class-variance-authority';

export const bredcrumItem = cva(
  [
    'group',
    'font-sans',
    'text-md',
    'list-none',
    'cursor-pointer',
    'transition-all',
    'inline-flex',

    '[&_button]:text-text-color-caption',
    '[&_button]:outline-none',
    '[&_button]:rounded-sm',
    '[&_button]:py-1',
    '[&_button]:px-2',
    '[&_button]:whitespace-nowrap',
    '[&_button]:hover:bg-action-color-background-transparent-hover',
    '[&_button]:focus:outline-2',
    '[&_button]:focus:outline-offset-2',
    '[&_button]:focus:action-color-border-transparent-pressed',

    '[&_a]:text-text-color-caption',
    '[&_a]:outline-none',
    '[&_a]:no-underline',
    '[&_a]:py-1',
    '[&_a]:px-2',
    '[&_a]:whitespace-nowrap',
    '[&_a]:hover:bg-action-color-background-transparent-hover',
    '[&_a]:focus:outline-2',
    '[&_a]:focus:outline-offset-2',
    '[&_a]:focus:action-color-border-transparent-pressed',

    '[&:not(:last-child):after]:content-[""]',
    '[&:not(:last-child):after]:text-text-color-caption',
    '[&:not(:last-child):after]:text-text-color-caption',
    '[&:not(:last-child):after]:opacity-50',
    '[&:not(:last-child):after]:mt-1',
    '[&:not(:last-child):after]:ml-2',
    '[&:not(:last-child):after]:mr-1',
  ],
  {
    variants: {
      isActive: {
        true: ['[&_a]:text-text-color-body', '[&_button]:text-text-color-body'],
      },
    },
  }
);
