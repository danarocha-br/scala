import { cva } from 'class-variance-authority';

export const container = cva([
  'group/container',
  'relative',
  'hover:w-auto',
  'transition-all',
]);

export const menu = cva([
  'font-sans',
  'flex',
  'flex-col',
  'gap-3',
  'w-full',
  'pointer-events-none',

  'group-hover/container:opacity-100',
  'group-hover/container:translate-y-0',
  'group-hover/container:pointer-events-auto',
]);

export const menuItem = cva(
  [
    'font-sans',
    'text-text-color-body-lighter',
    'whitespace-nowrap',
    'transition-all',

    'after:content-[""]',
    'after:bg-form-color-border-default',
    'after:absolute',
    'after:left-2',
    'after:w-[10px]',
    'after:h-[10px]',
    'after:rounded-circle',
    'after:transition-all',

    'before:content-[""]',
    'before:bg-form-color-border-default',
    'before:absolute',
    'before:left-[12px]',
    'before:mt-2',
    'before:w-[2px]',
    'before:h-5',
    'before:transition-all',
    'last:before:hidden',

    'first:mt-4',

    'group-hover/container:mb-3',
    'group-hover/container:after:translate-y-[6px]',
  ],
  {
    variants: {
      isActive: {
        true: [
          'after:bg-interactive-color-background-subdued',
          'group-hover/container:after:bg-interactive-color-background-enabled',
        ],
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

export const anchor = cva(
  [
    'text-text-color-body',
    'font-medium',
    'inline-block',
    'ml-5',
    'opacity-100',
    'cursor-pointer',
    'translate-y-[-8px]',
    'transition-all',

    'hover:text-interactive-color-background-subdued',
    'hover:after:bg-interactive-color-background-subdued',

    'group-hover/container:opacity-100',
    'group-hover/container:translate-x-0',
    'group-hover/container:translate-y-[-2px]',
  ],
  {
    variants: {
      isActive: {
        true: ['text-interactive-color-background-subdued'],
      },
    },
  }
);

export const backButton = cva([
  'group/item',
  'font-sans',
  'font-medium',
  'cursor-pointer',
  'flex',
  'items-center',
  'justify-center',
  'gap-2',
]);

export const backLabel = cva([
  'text-text-color-caption',
  'inline-block',
  'ml-2',
  'opacity-0',
  'translate-x-2',
  'transition-all',

  'group-hover/container:opacity-100',
  'group-hover/container:translate-x-[-1px]',
]);

export const iconWrapper = cva([
  'bg-interactive-color-background-subdued',
  'relative',
  'flex',
  'items-center',
  'justify-center',
  'w-5',
  'h-5',
  'rounded-circle',
]);
