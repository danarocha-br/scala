import { cva } from 'class-variance-authority';

export const badge = cva(
  [
    'font-sans',
    'text-sm',
    'border-1',
    'px-2',
    'pb-[1px]',
    'white-space-nowrap',
  ],
  {
    variants: {
      variant: {
        default: 'rounded-sm',
        pill: 'rounded-pill',
      },

      color: {
        primary: [
          'bg-action-color-background-primary-enabled',
          'border-action-color-background-primary-enabled',
        ],
        info: [
          'bg-feedback-color-background-info-enabled',
          'border-feedback-color-background-info-enabled',
        ],
        warning: [
          'bg-feedback-color-background-warning-enabled',
          'border-feedback-color-background-warning-enabled',
        ],
        danger: [
          'bg-feedback-color-background-danger-enabled',
          'border-feedback-color-background-danger-enabled',
        ],
        success: [
          'bg-feedback-color-background-success-enabled',
          'border-feedback-color-background-success-enabled',
        ],
        'on-dark': ['bg-text-color-on-dark', 'border-text-color-on-dark'],
      },

      outlined: {
        true: ['bg-transparent', 'border'],
      },
    },

    compoundVariants: [
      {
        color: 'primary',
        outlined: true,
        class: ['text-action-color-background-primary-enabled'],
      },
      {
        color: 'primary',
        outlined: false,
        class: ['text-action-color-text-primary-enabled'],
      },
      {
        color: 'info',
        outlined: true,
        class: ['text-feedback-color-background-info-enabled'],
      },
      {
        color: 'info',
        outlined: false,
        class: ['text-feedback-color-text-info-enabled'],
      },
      {
        color: 'warning',
        outlined: true,
        class: ['text-feedback-color-background-warning-pressed'],
      },
      {
        color: 'warning',
        outlined: false,
        class: ['text-feedback-color-text-warning-enabled'],
      },
      {
        color: 'danger',
        outlined: true,
        class: ['!text-feedback-color-background-danger-enabled'],
      },
      {
        color: 'danger',
        outlined: false,
        class: ['text-feedback-color-text-danger-enabled'],
      },
      {
        color: 'on-dark',
        outlined: true,
        class: ['text-text-color-on-dark'],
      },
      {
        color: 'on-dark',
        outlined: false,
        class: ['text-[inherit]'],
      },
      {
        color: 'success',
        outlined: true,
        class: ['!text-feedback-color-background-success-enabled'],
      },
      {
        color: 'success',
        outlined: false,
        class: ['text-feedback-color-text-success-enabled'],
      },
    ],

    defaultVariants: {
      variant: 'default',
      color: 'primary',
      outlined: false,
    },
  }
);
