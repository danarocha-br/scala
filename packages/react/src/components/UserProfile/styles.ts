import { cva } from 'class-variance-authority';

export const trigger = cva([
  'font-sans',
  'bg-transparent',
  'cursor-pointer',
  'pl-2',
  'pr-3',
  'py-1',
  'border',
  'border-dashed',
  'border-transparent',
  'rounded-sm',
  'flex',
  'items-center',
  'gap-3',
  'outline-none',
  'group',

  'hover:bg-action-color-background-transparent-hover',

  'focus:bg-action-color-background-transparent-hover',
  'focus:border-surface-color-background-hover',

  'active:border-surface-color-background-hover',
]);
