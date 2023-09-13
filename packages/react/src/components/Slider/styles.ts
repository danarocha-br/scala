import { cva } from 'class-variance-authority';

export const container = cva([
  'relative',
  'flex',
  'w-full',
  'touch-none',
  'select-none',
  'items-center',
]);

export const track = cva([
  'bg-surface-color-background-hover',
  'rounded-pill',
  'relative',
  'h-[5px]',
  'w-full',
  'grow',
  'overflow-hidden',
]);

export const range = cva([
  'bg-interactive-color-background-enabled',
  'dark:bg-neutral-700',
  'absolute',
  'h-full',
]);

export const thumb = cva([
  'bg-white',
  'border-2',
  'border-surface-color-background-default',
  'rounded-circle',
  'block',
  'h-3',
  'w-3',
  'shadow-[0_0_0_3px]',
  'shadow-interactive-color-background-enabled',
  'transition-all',

  'focus:bg-interactive-color-background-enabled',
  'focus:ring-interactive-color-background-enabled',
  'focus:outline-none',
  'focus:ring-offset-2',
  'focus:ring-3',

  'disabled:pointer-events-none',
  'disabled:opacity-50',
]);
