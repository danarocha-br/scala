import { cva } from 'class-variance-authority';

export const title = cva([
  'font-mono',
  'text-text-color-success',
  'bg-surface-color-background-subdued',
  'w-full',
  'py-2',
  'px-4',
  'rounded-t-md',
  'border',
  'border-surface-color-border-default',
]);

export const table = cva([
  'w-full',
  'table-fixed',
  'border-separate',
  'border-surface-color-border-default',
  'border',
  'rounded-b-md',

  '[&_tr]:border-l',
  '[&_tr]:border-r',
  '[&_tr]:border-surface-color-border-default',
]);

export const tableHeader = cva([
  'text-left',
  'text-xs',
  'text-text-color-caption',
  '[&_th]:py-2',
  '[&_th]:px-4',
  'bg-surface-color-background-default',
  'border',
  'border-surface-color-border-default',
]);

export const tableCell = cva(
  [
    'border-surface-color-border-default',
    'px-4',
    'py-2',
    'text-text-color-body',
  ],
  {
    variants: {
      variant: {
        default: [],
        type: [
          '[&_span]:pb-1',
          '[&_span]:px-1',
          '[&_span]:border',
          '[&_span]:rounded-sm',
          'leading-none',
        ],
        description: ['text-text-color-caption'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
