import { cva } from 'class-variance-authority';

export const nav = cva([
  'bg-navigation-surface-color-background',
  'border-navigation-surface-color-border',
  'border-b',
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
]);
