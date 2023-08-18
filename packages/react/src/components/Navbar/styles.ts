import { cva } from 'class-variance-authority';

export const nav = cva([
  'bg-surface-color-background-default',
  'border',
  'border-[#D5DBDB]/50',
  'w-full',
  'h-[53px]',
  'pl-4',
  'pr-4',
  'sticky',
  'top-0',
  'z-[100]',
  'flex',
  'justify-between',
  'items-center',

  '[data-mode=dark]:bg-surface-color-background-pressed',
  '[data-mode=dark]:border-[#252e30]/70',
]);
