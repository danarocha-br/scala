import { cva } from 'class-variance-authority';

export const separator = cva([
  'bg-surface-color-background-subdued',
  'my-2',
  '[&[data-orientation=horizontal]]:h-4',
  '[&[data-orientation=horizontal]]:w-full',
  '[&[data-orientation=vertical]]:h-full',
  '[&[data-orientation=vertical]]:w-1',
]);
