import { cva } from 'class-variance-authority';

export const anchor = cva(
  [
    'group',
    'font-sans',
    'no-underline',
    'inline-flex',
    'items-center',
    'gap-3',
    'px-2',
    'py-2',
    'rounded-sm',
    'w-full',
    'relative',
    'transition-all',
    'duration-500',
    'outline-none',
    'outline-transparent',

    'hover:opacity-100',
    'focus-visible:outline',
    'focus-visible:opacity-100',
    'focus-visible:outline-dashed',
    'focus-visible:outline-offeset-2',
    'focus-visible:outline-action-color-border-transparent-pressed',
    'dark:focus-visible:outline-neutral-800',

    'aria-disabled:transition-none',
    'aria-disabled:cursor-not-allowed',
    'aria-disabled:opacity-40',
    'aria-disabled:select-none',
    'aria-disabled:after:content-["PRO"]',
    'aria-disabled:after:text-text-color-on-dark',
    'aria-disabled:after:bg-action-color-background-primary-enabled',
    'aria-disabled:after:text-xs',
    'aria-disabled:after:absolute',
    'aria-disabled:after:right-2',
    'aria-disabled:after:py-1',
    'aria-disabled:after:px-2',
    'aria-disabled:after:rounded-sm',
    'dark:aria-disabled:after:text-action-color-text-primary-enabled',
  ],
  {
    variants: {
      isActive: {
        true: [
          'text-text-color-body',
          'font-medium',
          'bg-interactive-color-background-disabled',
          'opacity-100',

          '[&_svg]:fill-brand-color-primary',
          'dark:text-text-color-on-dark',
          'dark:bg-interactive-color-background-disabled/20',
          'dark:[&_svg]:fill-feedback-color-background-danger-subdued',
          'dark:text-text-color-on-dark',
        ],
        false: ['text-text-color-body', 'opacity-50'],
      },

      hasShortcut: {
        true: [
          'aria-disabled:hover:after:content-[attr(data-title)]',
          'aria-disabled:hover:after:absolute',
          'aria-disabled:hover:after:right-2',
          'aria-disabled:hover:after:text-text-color-caption',
          'aria-disabled:hover:after:text-xs',
          'aria-disabled:hover:after:py-1',
          'aria-disabled:hover:after:px-2',
          'aria-disabled:hover:after:rounded-sm',
        ],
      },
    },

    compoundVariants: [
      {
        isActive: true,
        hasShortcut: true,
        class: ['font-regular'],
      },
    ],

    defaultVariants: {
      isActive: false,
      hasShortcut: false,
    },
  }
);

export const label = cva([
  'relative',
  'top-[-2px]',
  'translate-x-0',
  'transition-transform',
  'duration-500',

  'group-hover:translate-x-1',
  'group-hover:aria-disabled:translate-x-0',
]);

export const content = cva([
  'overflow-hidden',
  'flex',
  'flex-col',
  'justify-between',
  'px-2',
  'h-[calc(100%_-_60px)]',
  'duration-300',

  'data-[state=open]:w-full',
  'data-[state=closed]:opacity-100',
  'data-[state=closed]:w-[40px]',
  'transition-[width,opacity]',

  'delay-300',
]);

export const root = cva(
  [
    'h-screen',
    'sticky',
    'top-0',
    'data-[state=open]:w-[17rem]',
    'data-[state=closed]:w-0',
    // 'transition-[width]',
    // 'duration-300',
    'group/root'
  ],
  {
    variants: {
      isClosed: {
        true: [],
        false: [
          'border-r',
          'border-navigation-surface-color-border',
          'bg-navigation-surface-color-background',
        ],
      },
    },
    defaultVariants: {
      isClosed: false,
    },
  }
);

export const header = cva(
  [
    'px-2',
    'pb-1',
    'pt-2',
    'h-[46.5px]',
    'flex',
    'items-center',
    'justify-between',
    'gap-1',

    'data-[state=open]:bg-navigation-surface-color-background',
  ],
  {
    variants: {
      isClosed: {
        true: [
          'border-b',
          'border-navigation-surface-color-border',
          'bg-navigation-surface-color-background',
        ],
      },
    },

    defaultVariants: {
      isClosed: false,
    },
  }
);

export const footer = cva([
  'py-2',
  'flex',
  'justify-between',
  'items-center',
  'w-full',
]);

export const toogleButton = cva([
  'w-auto',
  'p-1',
  'rounded-sm',
  'transition-all',
  'border',
  'border-dashed',
  'border-transparent',
  'outline-none',

  'hover:bg-action-color-background-transparent-hover',

  'focus:bg-action-color-background-transparent-disabled',
  'focus:border-surface-color-background-hover',
  'dark:focus:border-surface-color-background-hover',
]);

export const svg = cva([
  'scale-[1.1]',
  '[&_.svg-fill]:fill-loading-color-background-subdued',
  '[&_.svg-outline]:fill-text-color-body',
]);

export const mobileMenuBar = cva([
  'bg-interactive-color-background-enabled',
  'fixed',
  'bottom-0',
  'z-max',
  'w-full',
  'h-10',
]);
