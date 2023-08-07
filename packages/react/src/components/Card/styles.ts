import { cva } from 'class-variance-authority';

export const card = cva([
  'bg-surface-color-background-default',
  'flex',
  'flex-col',
  'gap-1',
  'w-full',
  'pt-2',
  'pb-3',
  'px-3',
  'rounded-sm',
  'shadow-[0px_3px_2px_0px_#00000007]',
  'border-none',

  '[data-mode=dark]:bg-[#323d4370]',
  '[data-mode=dark]:border',
  '[data-mode=dark]:border-surface-color-background-enabled',
]);

