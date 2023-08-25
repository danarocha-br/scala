import { cva } from 'class-variance-authority';

export const commandContainer = cva([
  'text-text-color-body',
  'bg-surface-color-background-default',
  'dark:bg-neutral-800',
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
  'font-sm',
  'p-2',
  'relative',
  'cursor-default',
  'flex',
  'items-center',
  'gap-1',
  'rounded-sm',
  'transition-colors',
  'outline-none',

  '[&_svg]:text-text-color-body-lighter',
  '[&_svg]:w-[18px]',
  '[&_svg]:h-[18px]',
  '[&_svg]:relative',
  '[&_svg]:-left-1',

  'hover:bg-action-color-background-transparent-hover',
  'dark:hover:bg-action-color-background-transparent-hover/60',

  'focus:bg-action-color-background-transparent-hover',
  'focus:outline-2',
  'focus:outline-offset-2',
  'focus:outline-action-color-background-transparent-hover',

  'focus-within:bg-action-color-background-transparent-hover',
  'focus-within:outline-2',
  'focus-within:outline-offset-2',
  'focus-within:outline-action-color-background-transparent-hover',

  'aria-disabled:opacity-50',
  'aria-disabled:pointer-events-none',

  'aria-selected:bg-action-color-background-transparent-hover/60',
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
  'bg-action-color-border-transparent-pressed/60',
  'my-2',
]);

export const commandFooter = cva([
  'text-xs',
  'text-text-color-caption',
  'bg-surface-color-background-subdued',
  'dark:bg-neutral-900/40',
  'border-t',
  'border-surface-color-border-default',
  'py-2',
  'px-2',
  'mt-2',
]);
export const commandFooterIcons = cva([
  'text-xs',
  'font-normal',
  'flex',
  'h-3',
  'w-3',
  'p-[2px]',
  'items-center',
  'justify-center',
  'rounded-[2px]',
  'bg-neutral-300/30',
  'text-center',
]);
