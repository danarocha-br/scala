import { cva } from 'class-variance-authority';

export const button = cva([
  'text-action-color-text-transparent-enabled',
  'bg-action-color-background-transparent-enabled',
  'flex',
  'justify-center',
  'items-center',
  'outline-none',
  'outline-transparent',
  'border-none',
  'transition-all',
  'w-[28px]',
  'h-[28px]',
  'p-0',
  'rounded-sm',

  'hover:bg-action-color-background-transparent-hover',
  'focus:outline-2',
  'focus:outline-offset-2',
  'focus:transparent',

  'disabled:opacity-60',
  'disabled:cursor-not-allowed',

  'active:scale-95',
]);

export const iconClipboard = cva([
  'fill-action-color-background-primary-enabled',
]);

export const iconCheck = cva('fill-feedback-color-background-success-subdued');
