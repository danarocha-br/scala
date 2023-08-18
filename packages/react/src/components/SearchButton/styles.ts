import { cva } from 'class-variance-authority';

export const container = cva([
  'text-text-color-caption',
  'font-sans',
  'bg-transparent',
  'border',
  'border-[#D5DBDB]/50',
  'rounded-sm',
  'flex',
  'items-center',
  'justify-between',
  'w-full',
  'px-3',
  'py-2',
  'pr-2',
  'transition-all',
  'outline-transparent',
  'cursor-pointer',

  'hover:bg-action-color-background-transparent-hover',
  'focus:outline-2',
  'focus:outline-offset-2',
  'focus:outline-action-color-background-transparent-hover',

  'data-[mode=dark]:border-[#252e30]/50',
]);
