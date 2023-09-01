import { cva } from 'class-variance-authority';

export const root = cva(['w-full']);

export const list = cva([
  'border-b-2',
  'border-surface-color-border-default/50',
  'flex',
  'gap-3',
]);

export const item = cva([
  'text-text-color-body',
  'opacity-50',
  'pt-2',
  'pb-[12px]',
  'px-2',
  'relative',
  'w-auto',
  'flex',
  'justify-center',
  'rounded-sm',
  'transition-opacity',

  'hover:opacity-100',

  'outline-none',
  'focus-visible:outline-2',
  'focus-visible:-outline-offset-1',
  'focus-visible:outline-surface-color-border-default/50',

  'data-[state=active]:opacity-100',
]);

export const itemSelected = cva([
  'bg-interactive-color-background-enabled',
  'absolute',
  'bottom-[-1px]',
  'h-[4.5px]',
  'rounded-tl-md',
  'rounded-tr-md',
]);

export const content = cva(['py-4', 'focus:outline-none']);
