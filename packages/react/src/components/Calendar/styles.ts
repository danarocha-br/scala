import { cva } from 'class-variance-authority';

export const container = cva([
  'flex',
  'flex-col',
  'gap-3',
  'w-full',
  'shadow-low',
  'rounded-md',
  'border',
  'border-surface-color-border-default/50',
  'bg-surface-color-background-default',
  'min-w-[300px]',
  'max-w-[380px]',
]);

export const header = cva([
  'flex',
  'items-center',
  'justify-between',
  'gap-3',
  'pl-4',
  'pr-3',
]);

export const title = cva(['flex', 'items-center', 'gap-2', 'capitalize']);

export const actions = cva(['flex', 'gap-2']);

export const content = cva([
  'w-full',
  'font-sans',
  'border-spacing-2',
  'table-fixed',

  '[&_thead_th]:font-medium',
  '[&_thead_th]:capitalize',
  '[&_thead_th]:text-xs',
  '[&_thead_th]:text-text-color-caption',

  '[&_tbody]:before:content-["."]',
  '[&_tbody]:before:leading-3',
  '[&_tbody]:before:block',
  '[&_tbody]:before:opacity-0',
]);

export const dayContainer = cva(['text-center']);

export const day = cva(
  [
    'w-full',
    'aspect-square',
    'text-center',
    'rounded-xl',
    'outline-color',
    'scale-90',
    'transition-all',
    'outline-none',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-interactive-color-border-pressed',

    'disabled:bg-transparent',
    'disabled:cursor-not-allowed',
    'disabled:opacity-40',

    'relative',
  ],
  {
    variants: {
      isToday: {
        true: [
          'text-interactive-color-background-enabled',
          'dark:text-royal-100',

          'border-interactive-color-background-enabled',
          'border-2',
          'hover:bg-interactive-color-background-hover',

          // 'after:content-[""]',
          // 'after:absolute',
          // 'after:w-1',
          // 'after:h-1',
          // 'after:-translate-x-1/2',
          // 'after:left-1/2',
          // 'after:bottom-1',
          // 'after:rounded-circle',
          // 'after:bg-interactive-color-background-enabled',
        ],
      },
      isSelected: {
        true: [
          'text-interactive-color-text-enabled',
          'bg-interactive-color-background-enabled',
          'hover:bg-interactive-color-background-hover',
        ],
        false: [
          'bg-surface-color-background-subdued',
          'hover:bg-royal-100',
          'dark:hover:bg-royal-400/60',
        ],
      },
    },
    defaultVariants: {
      isSelected: false,
      isToday: false,
    },
  }
);

export const inputContainer = cva(['w-full']);

export const input = cva(['w-full']);

export const actionButton = cva([
  'text-text-color-body-lighter',
  'text-sm',
  'w-full',
  'flex',
  'items-center',
  'justify-between',
  'rounded-sm',
  'py-1',
  'px-2',
  'transition-colors',

  'hover:bg-surface-color-background-subdued',
]);
