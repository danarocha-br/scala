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
    'outline',
    'outline-transparent',

    'hover:opacity-100',
    'focus-visible:opacity-100',
    'focus-visible:outline-dashed',
    'focus-visible:outline-offeset-2',
    'focus-visible:outline-surface-color-background-hover',
    'data-[mode=dark]:focus-visible:outline-neutral-700',

    'aria-disabled:transition-none',
    'aria-disabled:cursor-not-allowed',
    'aria-disabled:opacity-40',
    'aria-disabled:select-none',
    'aria-disabled:after:content-["PRO"]',
    'aria-disabled:after:text-text-color-on-dark',
    'aria-disabled:after:bg-action-color-background-primary-enabled',
    'aria-disabled:after:text-xs',
    'aria-disabled:after:absolute',
    'aria-disabled:after:right-4',
    'aria-disabled:after:py-1',
    'aria-disabled:after:px-2',
    'aria-disabled:after:rounded-sm',
    'aria-disabled:after:data-[mode=dark]:text-action-color-text-primary-enabled',
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
          'data-[mode=dark]:text-text-color-on-dark',
          'data-[mode=dark]:[&_svg]:fill-feedback-color-background-danger-subdued',
          'data-[mode=dark]:text-text-color-on-dark',
        ],
        false: ['text-text-color-body', 'opacity-60'],
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

export const container = cva(['h-full', 'block', 'bg-transparent']);

export const content = cva([
  'overflow-hidden',
  'flex',
  'flex-col',
  'justify-between',
  'px-2',
  'h-[calc(100%_-_60px)]',

  'data-[state=open]:animate-[navigation-open_400ms_ease-in]',
  'data-[state=open]:bg-surface-color-background-default',
  'data-[state=open]:data-[mode=dark]:bg-surface-color-background-pressed',

  'data-[state=closed]:animate-[navigation-close_200ms_ease-in]',
]);

export const root = cva([
  'h-full',
  'sticky',
  'top-0',

  'data-[state=open]:bg-surface-color-background-default',
  'data-[state=open]:border-r',
  'data-[state=open]:border-[#D5DBDB]/50',
  'data-[state=open]:w-[(minmax(15rem,_18rem))]',
  'data-[state=open]:data-[mode=dark]:bg-surface-color-background-pressed',
  'data-[state=open]:data-[mode=dark]:border-[#252e30]/70',
]);

export const header = cva(
  [
    'px-2',
    'pb-1',
    'pt-2',
    'h-[53px]',
    'flex',
    'items-center',
    'justify-between',

    'data-[state=open]:bg-surface-color-background-default',
    'data-[state=open]:data-[mode=dark]:bg-surface-color-background-pressed',
  ],
  {
    variants: {
      isClosed: {
        true: [
          'border-b',
          'border-[#D5DBDB]/50',
          'bg-surface-color-background-default',
          'data-[mode=dark]:border-[#252e30]/70',
          'data-[mode=dark]:bg-surface-color-background-pressed',
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
  'p-2',
  'mb-1',
  'rounded-sm',
  'transition-all',
  'border',
  'border-dashed',
  'border-transparent',
  'outline-none',

  'hover:bg-action-color-background-transparent-hover',

  'focus:bg-action-color-background-transparent-disabled',
  'focus:border-surface-color-background-hover',
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
