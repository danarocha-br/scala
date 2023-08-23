import { cva } from 'class-variance-authority';

//TODO: button disabled fix cursor

export const button = cva(
  [
    'group',
    'select-none',
    'box-border',
    'font-medium',
    'whitespace-nowrap',
    'pointer-events-auto',
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'outline-none',
    'outline-transparent',
    'border-none',
    'cursor-pointer',
    'transition-all',


    'focus:outline-2',
    'focus:outline-offset-2',
    'focus-visible:outline-2',
    'focus-visible:offset-2',
    'focus-visible:outline-transparent',

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
        contained: [],

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
        lg: ['text-md', 'rounded-md', 'h-[64px]', 'px-4'],
        md: ['text-md', 'h-[54px]', 'px-4', 'rounded-md'],
        sm: [
          'text-sm',
          'h-[40px]',
          'px-3',
          'rounded-sm',
          'focus:outline-2',
          'focus:outline-offset-0',
          'focus:outline-transparent',
        ],
        xs: [
          'text-xs',
          'h-[28px]',
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
          'overflow-hidden',
          'hover:before:translate-0',
          'hover:before:scale-150',
          'hover:before:transition-transform',
          'hover:before:duration-[0.4s]',
          'hover:before:ease-[cubic-bezier(0.1, 0, 0.3, 1)]',

          'hover:after:transform-0',
          'hover:after:duration-[0.05s]',
          'hover:after:delay-[0.4s]',
          'hover:after:ease-linear',

          '[&_span]:inline-flex',
          '[&_span]:items-center',
          '[&_span]:justify-center',
          '[&_span]:relative',
          '[&_span]:h-full',

          'before:content-[""]',
          'before:w-[120%]',
          'before:h-0',
          'before:absolute',
          'before:pb-[120%]',
          'before:top-[-110%]',
          'before:left-[-10%]',
          'before:rounded-[50%]',
          'before:translate-y[68%]',
          'before:scale-0',

          'after:content-[""]',
          'after:w-full',
          'after:h-full',
          'after:absolute',
          'after:top-0',
          'after:left-0',
          'after:rounded-[50%]',
          'after:translate-y-[-100%]',
          'after:motion-safe:animate-[transform_0.4s_cubic-bezier(0.1, 0, 0.3, 1)]',
        ],
      },

      disabled: {
        true: ['cursor-not-allowed'],
      },

      loading: {
        true: [
          'relative',
          'bg-action-color-background-transparent-hover',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:right-0',
          'after:bottom-0',
          'after:left-0',
          'after:rounded-md',
          'after:bg-loading-gradient',
          '!after:border-[2.4px]',
          '!after:border-neutral-200',
          'after:bg-100',
          'after:clip-path-[var(--button-loading-clip-path)]',
          'after:animate-button-loading',
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
          'before:bg-interactive-color-background-pressed',
          'after:bg-interactive-color-background-pressed',
        ],
      },

      {
        color: 'danger',
        animateOnHover: true,

        class: [
          'before:bg-feedback-color-background-danger-pressed',
          'after:bg-feedback-color-background-danger-pressed',
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
        variant: 'contained',
        color: 'primary',
        class: [
          'text-action-color-text-primary-enabled',
          'bg-action-color-background-primary-enabled',
          'hover:bg-action-color-background-primary-hover',
          'focus:outline-action-color-border-primary-pressed',
          'aria-disabled:text-action-color-text-primary-disabled',
          'aria-disabled:bg-action-color-background-primary-disabled',
        ],
      },
      {
        variant: 'contained',
        color: 'secondary',
        class: [
          'text-action-color-text-secondary-enabled',
          'bg-action-color-background-secondary-enabled',
          'hover:bg-action-color-background-secondary-hover',
          'focus:outline-action-color-border-secondary-pressed',
          'aria-disabled:text-action-color-text-secondary-disabled',
          'aria-disabled:bg-action-color-background-secondary-disabled',
        ],
      },
      {
        variant: 'contained',
        color: 'danger',
        class: [
          'text-action-color-text-danger-enabled',
          'bg-action-color-background-danger-enabled',
          'hover:bg-action-color-background-danger-hover',
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
      variant: 'contained',
      size: 'md',
      color: 'primary',
      fullWidth: false,
      animateOnHover: false,
      loading: false,
    },
  }
);

export const icon = cva(['relative'], {
  variants: {
    variant: {
      contained: [],
      transparent: [
        'group-hover:bg-action-color-background-transparent-hover relative',
      ],
    },
    size: {
      lg: ['left-[-12px]'],
      md: ['left-[-12px]'],
      sm: ['left-[-6px]'],
      xs: ['left-[-2px], mr-1'],
    },
  },
  compoundVariants: [
    {
      variant: 'transparent',
      size: 'md',
      class: ['!mr-0']
    },
    {
      variant: 'transparent',
      size: 'lg',
      class: ['!mr-0']
    }
  ]
});
