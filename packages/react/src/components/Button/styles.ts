import { cva } from 'class-variance-authority';

//TODO: button disabled fix cursor

export const button = cva(
  [
    'group',
    'select-none',
    'box-border',
    'font-sans',
    'font-medium',
    'whitespace-nowrap',
    'pointer-events-auto',
    'flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'relative',
    'outline-none',
    'border-none',
    'outline-transparent',
    'cursor-pointer',
    'transition-all',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-transparent',
    'data-[focus-visible]:outline-2',
    'data-[focus-visible]:offset-2',
    'data-[focus-visible]:outline-transparent',

    'aria-disabled:opacity-50',
    'aria-disabled:cursor-not-allowed',

    'active:scale-95',

    '[&_svg]:z-[1]',
  ],
  {
    variants: {
      color: {
        primary: [],
        secondary: [],
        danger: [],
      },

      variant: {
        primary: [],

        transparent: [
          'font-normal',
          'bg-action-color-background-transparent-enabled',

          'hover:bg-action-color-background-transparent-hover',

          'aria-disabled:hover:bg-action-color-background-transparent-hover',

          '[&_svg]:bg-action-color-background-transparent-hover',
          '[&_svg]:rounded-md',
          '[&_svg]:mr-2',
          '[&_svg]:p-1',
        ],
      },

      size: {
        lg: ['text-md', 'p-4', 'rounded-md', 'h-[64px]'],
        md: ['text-md', 'py-3', 'px-4', 'rounded-md'],
        sm: [
          'text-sm',
          'py-1',
          'px-3',
          'rounded-sm',
          'focus:outline-2',
          'focus:outline-offset-0',
          'focus:outline-transparent',
        ],
        xs: [
          'text-xs',
          'py-1',
          'px-2',
          'rounded-sm',
          'h-[30px]',
          'focus:outline-2',
          'focus:outline-offset-0',
          'focus:outline-transparent',
        ],
      },

      fullWidth: {
        true: ['w-full'],
      },

      animateOnHover: {
        true: [
          'hover:before:translate-[translate3d(0,0,0)]',
          'hover:before:scale-[scale3d(1,1,1)]',
          'hover:before:transition-[transform 0.4s cubic-bezier(0.1, 0, 0.3, 1)]',

          'hover:after:transform-[translate3d(0,0,0)]',
          'hover:after:transition-all',
          'hover:after:duration-[0.05s]',
          'hover:after:delay-[0.4s]',
          'hover:after:ease-linear',

          '[&_span]:block',
          '[&_span]:relative',
          '[&_span]:z-[1]',

          'before:content-[""]',
          'before:w-[120%]',
          'before:h-0',
          'before:absolute',
          'before:pb-[120%]',
          'before:top-[-110%]',
          'before:left-[-10%]',
          'before:rounded-[50%]',
          'before:translate-[translate3d(0,68%,0)]',
          'before:scale-[scale(0,0,0)]',

          'after:content-[""]',
          'after:w-full',
          'after:h-full',
          'after:absolute',
          'after:top-0',
          'after:left-0',
          'after:rounded-[50%]',
          'after:translate-[translate3d(0,-100%,0)]',
          'after:transition-transform',
          'after:ease-in-[cubic-bezier(0.1, 0, 0.3, 1)]',
          'after:duration-[0.4s]',

          // '[&_span]:move-scale-up-start',
          // '[&_span]:duration-[0.3s]',

          {
            '& span': {
              animation: `move-scale-up-start 0.3s forwards, move-scale-up-end 0.3s forwards 0.3s`,
            },
          },
        ],
      },

      disabled: {
        true: ['cursor-not-allowed'],
      },

      loading: {
        true: [
          '--borderWidth: 2.4px',
          '--gradient: linear-gradient(99deg, var(--color-neutral-200), var(--color-royal-300), var(--color-froly-300)',
          'relative',
          'bg-action-color-background-transparent-hover',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:right-0',
          'after:bottom-0',
          'after:left-0',
          'after:rounded-md',
          'after:border-[var(--button-loading-border-width)]',
          'after:border-neutral-200',
          'after:bg-[var(--button-loading-gradient)]',
          'after:bg-100',
          'after:clip-path-[var(--button-loading-clip-path)]',
          'after:animation-[--button-loading-animation]'
        ],
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        animateOnHover: true,

        class: [
          'before:bg-action-color-background-primary-pressed',
          'after:bg-action-color-background-primary-pressed',
        ],
      },

      {
        color: 'secondary',
        animateOnHover: true,

        class: [
          'before:bg-interactive-color-background-hover',
          'after:bg-interactive-color-background-hover',
        ],
      },

      {
        color: 'danger',
        animateOnHover: true,

        class: [
          'before:bg-feedback-color-background-danger-hover',
          'after:bg-feedback-color-background-danger-hover',
        ],
      },

      {
        variant: 'transparent',
        animateOnHover: true,

        class: [
          'before:bg-surface-color-background-subdued',
          'after:bg-surface-color-background-subdued',
        ],
      },
      {
        variant: 'transparent',
        color: 'secondary',
        animateOnHover: true,

        class: [
          'before:bg-surface-color-background-subdued',
          'after:bg-surface-color-background-subdued',
        ],
      },
      {
        variant: 'transparent',
        color: 'danger',
        animateOnHover: true,

        class: [
          'before:bg-surface-color-background-subdued',
          'after:bg-surface-color-background-subdued',
        ],
      },
      {
        variant: 'primary',
        color: 'primary',
        class: [
          'text-action-color-text-primary-enabled',
          'bg-action-color-background-primary-enabled',
          'hover:bg-action-color-background-primary-hover',
          'hover:[&_span]:z-[1]',
          'focus:outline-action-color-border-primary-pressed',
          'aria-disabled:text-action-color-text-primary-disabled',
          'aria-disabled:bg-action-color-background-primary-disabled',
        ],
      },
      {
        variant: 'primary',
        color: 'secondary',
        class: [
          'text-action-color-text-secondary-enabled',
          'bg-action-color-background-secondary-enabled',
          'hover:bg-action-color-background-secondary-hover',
          'hover:[&_span]:z-[1]',
          'focus:outline-action-color-border-secondary-pressed',
          'aria-disabled:text-action-color-text-secondary-disabled',
          'aria-disabled:bg-action-color-background-secondary-disabled',
        ],
      },
      {
        variant: 'primary',
        color: 'danger',
        class: [
          'text-action-color-text-danger-enabled',
          'bg-action-color-background-danger-enabled',
          'hover:bg-action-color-background-danger-hover',
          'hover:[&_span]:z-[1]',
          'focus:outline-action-color-border-danger-pressed',
          'aria-disabled:text-action-color-text-danger-disabled',
          'aria-disabled:bg-action-color-background-danger-disabled',
        ],
      },
      {
        variant: 'transparent',
        color: 'primary',
        class: [
          'text-text-color-body',
          'focus:outline-action-color-border-transparent-pressed',
        ],
      },

      {
        variant: 'transparent',
        color: 'secondary',

        class: [
          'text-interactive-color-background-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
      },
      {
        variant: 'transparent',
        color: 'danger',

        class: [
          'text-feedback-color-background-danger-enabled',
          'focus:outline-action-color-border-transparent-pressed',
        ],
      },
      {
        variant: 'transparent',
        size: 'xs',
        class: ['px-1'],
      },
      {
        variant: 'transparent',
        size: 'sm',
        class: ['px-2'],
      },
      {
        variant: 'transparent',
        size: 'md',
        class: ['px-3', 'h-[50px]', '[&_svg]:mr-1'],
      },
      {
        variant: 'transparent',
        size: 'lg',
        class: ['px-4', 'h-[64px]', '[&_svg]:mr-0'],
      },
    ],

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      color: 'primary',
      fullWidth: false,
      animateOnHover: false,
      loading: false,
    },
  }
);

export const icon = cva(
  ['group-hover:bg-action-color-background-transparent-hover relative'],
  {
    variants: {
      size: {
        lg: ['left-[-14px]'],
        md: ['left-[-8px]'],
        sm: ['left-[-6px]'],
        xs: ['left-[-2px], mr-1'],
      },
    },
  }
);
