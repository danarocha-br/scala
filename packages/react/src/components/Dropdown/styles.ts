import { cva } from 'class-variance-authority';

export const dropdownMenuContent = cva([
  'font-sans',
  'bg-surface-color-background-default',
  'rounded-sm',
  'shadow-low',
  'dark:shadow-[black]/20',
  'border',
  'border-surface-color-background-hover',
  'w-full',
  'min-w-[200px]',
  'p-1',
  'transition-all',

  'will-change-[transform,_opacity]',
  'data-[state=open]:data-[side=top]:animate-slide-up',

  'data-[state=open]:data-[side=right]:animate-slide-right',

  'data-[state=open]:data-[side=bottom]:animate-slide-down',

  'data-[state=open]:data-[side=left]:animate-slide-left',
]);

export const dropdownMenuArrow = cva([
  'fill-current',
  'fill-text-color-on-dark',
  'dark:fill-text-color-on-light',
]);

const itemStyles = [
  'text-text-color-body-lighter',
  'font-normal',
  'text-sm',
  'text-left',
  'rounded-sm',
  'py-2',
  'px-2',
  'flex',
  'items-center',
  'cursor-pointer',
  'transition-all',
  'outline-none',
  'select-none',

  'hover:text-text-color-body',
  'hover:bg-interactive-color-background-enabled',
  'dark:hover:bg-interactive-color-background-disabled/20',

  'focus:text-text-color-body',
  'focus:bg-interactive-color-text-enabled',
  'focus:border-transparent',
  'focus:border-interactive-color-background-disabled',
  'dark:focus:bg-interactive-color-background-disabled/20',
  'focus:outline-none',

  'data-[disabled]:text-text-color-caption',
  'data-[disabled]:cursor-not-allowed',
  'data-[disabled]:pointer-events-none',

  '[&_>_a]:flex',
  '[&_>_a]:justify-between',
  '[&_>_a]:w-full',
];

export const dropdownItem = cva(itemStyles);

export const rightSlot = cva([
  'text-text-color-caption',
  'text-sm',
  'bg-action-color-background-transparent-hover',
  'rounded-sm',
  'px-1',

  'focus:text-text-color-body',
  'data-[disabled]:text-action-color-background-transparent-hover',
]);

export const dropdownSeparator = cva([
  'bg-surface-color-background-hover',
  'h-[1px]',
  'my-2',
  'relative',
]);
