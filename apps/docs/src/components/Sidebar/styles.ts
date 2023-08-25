import { cva } from 'class-variance-authority';

export const sidebar = cva([
  'bg-navigation-surface-color-background',
  'border-r',
  'border-navigation-surface-color-border',
  'w-[360px]',
  'h-screen',
  'sticky',
  'top-0',
  'pl-4',
  'pr-2',
  'pt-2',
]);

export const navigationLinks = cva(['mt-5']);
