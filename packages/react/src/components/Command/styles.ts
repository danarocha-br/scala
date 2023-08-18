import { cva } from 'class-variance-authority';

export const commandContainer = cva([
  'text-text-color-body',
  'bg-surface-color-background-default',
  'font-sans',
  'text-sm',
  'flex',
  'flex-col',
  'h-full',
  'w-full',
  'min-w-[120px]',
  'overflow-hidden',
  'rounded-sm',
  'border',
  'border-action-color-border-transparent-pressed',
  'shadow-medium',
]);

export const commandDialog = cva(['overflow-hidden', 'p-0']);

export const commandGroupHeading = cva([
  'font-xs',
  'text-text-color-caption',
  'font-medium',
  'px-1',
  'py-2',
]);

export const commandGroup = cva([
  'px-1',
  'overflow-hidden',
  '[&:not(hidden)]_~[cmdk-group]:pt-1',
  '![&_[cmdk-group-heading]]:font-xs',
  '[&_[cmdk-group-heading]]:text-text-color-caption',
  '[&_[cmdk-group-heading]]:px-2',
  '[&_[cmdk-group-heading]]:py-1',
  '[&_[cmdk-group-heading]]:mb-1',
]);

export const commandInput = cva([
  'font-sm',
  'bg-transparent',
  'rounded-sm',
  'flex',
  'w-full',
  'h-4',
  'py-2',
  'border-none',
  'outline-none',
  'transition-all',

  'placeholder:text-text-color-caption',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
]);

export const commandItem = cva([
  'p-2',
  'relative',
  'cursor-default',
  'select-none',
  'outline-none',
  'flex',
  'items-center',
  'gap-1',
  'rounded-sm',
  'transition-colors',

  '[&_svg]:text-text-color-body-lighter',
  '[&_svg]:w-[18px]',
  '[&_svg]:h-[18px]',
  '[&_svg]:relative',
  '[&_svg]:-left-1',

  'hover:bg-action-color-background-transparent-hover/60',
  'aria-disabled:opacity-50',
  'aria-disabled:pointer-events-none',
]);

export const commandList = cva([
  'max-h-[300px]',
  'overflow-y-auto',
  'overflow-x-hidden',
  'px-2',
  'py-2',
]);

export const commandEmpty = cva([
  'text-text-color-body-lighter',
  'text-sm',
  'text=center',
  'py-2',
]);

export const commandSeparator = cva([
  'h-[2px]',
  'bg-action-color-border-transparent-pressed',
  'my-2',
]);
