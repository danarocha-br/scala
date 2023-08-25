import { cva } from 'class-variance-authority';

export const themeButton = cva(['w-3', 'h-3', 'border', 'rounded-sm'], {
  variants: {
    theme: {
      light: ['bg-neutral-200', 'border-neutral-300'],
      dark: ['bg-neutral-700', 'border-neutral-800'],
    },
  },
});

export const preview = cva(
  [
    'w-full',
    'h-full',
    'flex',
    'flex-2',
    'items-center',
    'justify-center',
    'bg-surface-color-background-default',
    'border',
    'border-surface-color-border-default',
    'py-6',
    'rounded-tl-md',
  ],
  {
    variants: {
      showCode: {
        false: ['rounded-br-md', 'rounded-bl-md'],
      },
      hasSlot: {
        false: ['rounded-tr-md'],
      },
    },
    defaultVariants: {
      showCode: false,
      hasSlot: false,
    },
  }
);

export const slot = cva([
  'flex-1',
  'min-w-[250px]',
  'h-full',
  'bg-surface-color-background-default',
  'border',
  'border-surface-color-border-default',
  'p-3',
  'rounded-tr-md',
]);

export const header = cva([
  'font-[monospace]',
  'text-md',
  'text-white',
  'bg-neutral-700',
  'py-2',
  'pl-4',
  'pr-3',
]);

export const editor = cva([
  'w-full',
  '[&_pre]:px-2',
  '[&_pre]:!py-0',
  '[&_pre]:rounded-br-md',
  '[&_pre]:rounded-bl-md',
  '[&_pre]:!bg-neutral-800',
  '[&_.class-name]:!text-neutral-100',
  '[&_.attr-name]:!text-macaroni-500',
  // "[&_.attr-value]:!text-froly-400",
  'font-[monospace]',
  'text-md',
]);
