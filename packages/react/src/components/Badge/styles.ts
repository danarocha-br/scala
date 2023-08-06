import { cva } from 'class-variance-authority';

export const badge = cva(
  [
    'font-sans',
    'text-sm',
    'border-1',
    'border-transparent',
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
          'text-action-color-text-primary-enabled',
          'border-action-color-background-primary-enabled',
          'bg-action-color-background-primary-enabled',
        ],
        info: [
          'text-feedback-color-text-info-enabled',
          'bg-feedback-color-background-info-enabled',
          'bg-feedback-color-background-info-enabled',
        ],
        warning: [
          'text-feedback-color-text-warning-enabled',
          'bg-feedback-color-background-warning-enabled',
          'bg-feedback-color-background-warning-enabled',
        ],
        danger: [
          'text-feedback-color-text-danger-enabled',
          'bg-feedback-color-background-danger-enabled',
          'bg-feedback-color-background-danger-enabled',
        ],
        success: [
          'text-feedback-color-text-success-enabled',
          'bg-feedback-color-background-success-enabled',
          'bg-feedback-color-background-success-enabled',
        ],
        'on-dark': [
          'text-[inherit]',
          'border-text-color-on-dark',
          'bg-text-color-on-dark',
        ],
      },

      outlined: {
        true: ['bg-transparent'],
      },
    },

    compoundVariants: [
      {
        color: 'primary',
        outlined: true,
        class: ['text-action-color-background-primary-enabled'],
      },
      {
        color: 'info',
        outlined: true,
        class: ['text-feedback-color-text-info-enabled'],
      },
      {
        color: 'warning',
        outlined: true,
        class: ['text-feedback-color-background-warning-pressed'],
      },
      {
        color: 'danger',
        outlined: true,
        class: ['text-action-color-background-danger-enabled'],
      },
      {
        color: 'on-dark',
        outlined: true,
        class: ['text-text-color-on-dark'],
      },
      {
        color: 'success',
        outlined: true,
        class: ['text-text-color-success'],
      },
    ],

    defaultVariants: {
      variant: 'default',
      color: 'primary',
      outlined: false,
    },
  }
);
