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
  'pl-3',
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
    'rounded-circle',
    'outline-color',
    'scale-90',
    'transition-all',
    'outline-none',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-interactive-color-border-pressed',

    'disabled:bg-transparent',
    'disabled:cursor-not-allowed',
    'disabled:opacity-30',
    'disabled:border',
    'disabled:border-dashed',
    'disabled:border-action-color-border-primary-enabled',

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
          'dark:bg-surface-color-background-subdued/50',
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

export const input = cva(
  [
    'text-text-color-body',
    'w-full',
    'py-2',
    'px-3',
    'bg-surface-color-background-subdued',
    'outline-none',
    'transition-colors',

    'hover:text-text-color-body',
    'hover:bg-royal-100',
    'dark:hover:bg-royal-200/40',

    'placeholder:hover:text-text-color-body',
    'dark:placeholder:hover:text-text-color-on-dark',
    'placeholder:focus:text-text-color-on-dark',
  ],
  {
    variants: {
      hasErrors: {
        true: [
          'border-interactive-color-border-error',
          'focus:bg-feedback-color-background-danger-disabled',
          'focus:text-text-color-on-dark',
        ],
        false: [
          'focus:bg-form-color-background-focus',
          'focus:text-text-color-on-dark',
        ],
      },
      hideHelpers: {
        true: ['m-2', 'rounded-sm'],
      },
    },

    defaultVariants: {
      hasErrors: false,
      hideHelpers: false,
    },
  }
);

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
  'outline-none',

  'hover:bg-surface-color-background-subdued',

  'focus:outline-2',
  'focus:outline-action-color-border-transparent-pressed',
]);

export const selectContainer = cva([
  'bg-surface-color-background-default',
  'dark:bg-neutral-800',
  'overflow-hidden',
  'rounded-sm',
  'shadow-low',
  'p-1',
  'min-w-[120px]',
]);

export const selectValue = cva([
  'flex',
  'items-center',
  'capitalize',
  'gap-1',
  'outline-none',
  'pl-1',
  'rounded-[2px]',

  'hover:outline-2',
  'hover:outline-action-color-border-transparent-pressed',

  'focus:outline-2',
  'focus:outline-action-color-border-transparent-pressed',
]);

export const selectItem = cva([
  'text-sm',
  'capitalize',
  'leading-none',
  'text-text-color-body-lighter',
  'rounded-[3px]',
  'flex',
  'items-center',
  'h-5',
  'p-2',
  'relative',
  'select-none',
  'transition-all',
  'outline-none',

  'data-[disabled]:text-text-color-caption',
  'data-[disabled]:pointer-events-none',

  'data-[highlighted]:outline-none',
  'data-[highlighted]:bg-interactive-color-background-disabled',
  'dark:data-[highlighted]:bg-interactive-color-background-disabled/50',
  'data-[highlighted]:text-interactive-color-border-enabled',
  'dark:data-[highlighted]:text-text-color-on-dark',
  'data-[highlighted]:font-semibold',
]);
