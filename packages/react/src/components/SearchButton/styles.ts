import { cva } from 'class-variance-authority';

export const container = cva([
  'text-text-color-caption',
  'font-sans',
  'bg-transparent',
  'border',
  'border-form-color-border-default',
  'dark:border-form-color-border-default/20',
  'rounded-sm',
  'flex',
  'items-center',
  'justify-between',
  'w-full',
  'h-6',
  'px-3',
  'py-2',
  'pr-2',
  'transition-all',
  'outline-none',
  'outline-transparent',
  'cursor-pointer',

  'hover:bg-action-color-background-transparent-hover',
  'focus:bg-action-color-background-transparent-hover',
]);
