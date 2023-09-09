import { cva } from 'class-variance-authority';

export const selectBox = cva([
  'text-text-color-body',
  'text-sm',
  'bg-transparent',
  'border',
  'border-dashed',
  'border-transparent',
  'rounded-sm',
  'inline-flex',
  'items-center',
  'justify-center',
  'py-0',
  'px-2',
  'gap-2',
  'h-[40px]',
  'relative',
  'transition-all',
  'outline-none',

  'hover:bg-action-color-background-transparent-disabled',
  'focus:bg-action-color-background-transparent-disabled',
  'focus:border-surface-color-background-hover',
  'focus:outline-none',
]);

export const selectContent = cva([
  'overflow-hidden',
  'bg-surface-color-background-default',
  'rounded-md',
  'shadow-low',
]);

export const selectViewport = cva(['p-2']);

export const selectItem = cva([
  'text-sm',
  'text-text-color-body',
  'rounded-sm',
  'flex',
  'items-center',
  'h-5',
  'py-0',
  'pr-2',
  'pl-5',
  'relative',
  'select-none',
  'outline-none',

  'data-[disabled]:text-text-color-body-lighter',
  'data-[disabled]:cursor-not-allowed',

  'focus:text-text-color-on-dark',
  'focus:bg-interactive-color-background-subdued',
  'focus:outline-none',
  'focus:[&_>_svg]:text-text-color-on-dark',
]);

export const selectLabel = cva([
  'text-xs',
  'text-text-color-body',
  'py-0',
  'px-4',
]);

export const selectSeparator = cva([
  'bg-form-color-border-default',
  'h-[1px]',
  'm-[5px]',
]);

export const selectItemIndicator = cva([
  'absolute',
  'left-0',
  'w-4',
  'inline-flex',
  'items-center',
  'justify-center',
]);

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$text-color-body',
  cursor: 'default',
};

export const selectScrollUpButton = cva([
  'text-text-color-body',
  'bg-surface-color-background-default',
  'flex',
  'items-center',
  'justify-center',
  'h-4',
  'cursor-default',
]);

export const selectItemText = cva(['flex', 'gap-1', 'items-center']);
