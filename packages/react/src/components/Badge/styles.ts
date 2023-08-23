import { cva } from 'class-variance-authority';

export const badge = cva(
  ['text-sm', 'px-2', 'pb-[1px]', 'white-space-nowrap'],
  {
    variants: {
      variant: {
        boxed: 'rounded-sm',
        pill: 'rounded-pill',
      },

      color: {
        neutral: [],
        info: [],
        warning: [],
        danger: [],
        success: [],
        'on-dark': [],
      },

      type: {
        filled: [],
        outlined: [],
        inverted: [],
      },
    },

    compoundVariants: [
      {
        color: 'neutral',
        type: 'outlined',
        class: [
          'text-action-color-background-primary-enabled',
          'border',
          'border-action-color-background-primary-enabled',
        ],
      },
      {
        color: 'neutral',
        type: 'filled',
        class: [
          'text-action-color-background-primary-enabled',
          'bg-action-color-background-primary-disabled/40',
        ],
      },
      {
        color: 'neutral',
        type: 'inverted',
        class: [
          'text-action-color-text-primary-enabled',
          'bg-action-color-background-primary-enabled',
        ],
      },

      {
        color: 'info',
        type: 'outlined',
        class: [
          'text-feedback-color-background-info-enabled',
          'border',
          'border-feedback-color-background-info-enabled',
        ],
      },
      {
        color: 'info',
        type: 'filled',
        class: [
          'text-feedback-color-background-info-enabled',
          'dark:text-feedback-color-text-info-enabled',
          'bg-feedback-color-background-info-disabled',
        ],
      },
      {
        color: 'info',
        type: 'inverted',
        class: [
          'text-feedback-color-text-info-enabled',
          'bg-feedback-color-background-info-enabled',
        ],
      },

      {
        color: 'warning',
        type: 'outlined',
        class: [
          'text-feedback-color-background-warning-pressed',
          'border',
          'border-feedback-color-background-warning-enabled',
        ],
      },
      {
        color: 'warning',
        type: 'filled',
        class: [
          'text-feedback-color-background-warning-pressed',
          'dark:text-feedback-color-text-warning-enabled',
          'bg-feedback-color-background-warning-disabled',
        ],
      },
      {
        color: 'warning',
        type: 'inverted',
        class: [
          'text-feedback-color-text-warning-enabled',
          'bg-feedback-color-background-warning-enabled',
        ],
      },

      {
        color: 'danger',
        type: 'outlined',
        class: [
          '!text-feedback-color-background-danger-enabled',
          'border',
          'border-feedback-color-background-danger-enabled',
        ],
      },
      {
        color: 'danger',
        type: 'filled',
        class: [
          'text-feedback-color-background-danger-enabled',
          'dark:text-feedback-color-text-danger-enabled',
          'bg-feedback-color-background-danger-disabled',
        ],
      },
      {
        color: 'danger',
        type: 'inverted',
        class: [
          'text-feedback-color-text-danger-enabled',
          'bg-feedback-color-background-danger-enabled',
        ],
      },

      {
        color: 'on-dark',
        type: 'outlined',
        class: [
          'text-text-color-on-dark',
          'dark:!text-text-color-on-dark',
          'border',
          'border-text-color-on-dark',
        ],
      },
      {
        color: 'on-dark',
        type: 'filled',
        class: ['text-text-color-on-dark', 'bg-text-color-on-dark/5'],
      },
      {
        color: 'on-dark',
        type: 'inverted',
        class: ['text-text-color-on-dark', 'bg-text-color-on-dark'],
      },

      {
        color: 'success',
        type: 'outlined',
        class: [
          '!text-feedback-color-background-success-enabled',
          'border',
          'border-feedback-color-background-success-enabled',
        ],
      },
      {
        color: 'success',
        type: 'filled',
        class: [
          'text-feedback-color-background-success-enabled',
          'dark:text-feedback-color-text-success-enabled',
          'bg-feedback-color-background-success-disabled',
        ],
      },
      {
        color: 'success',
        type: 'inverted',
        class: [
          'text-feedback-color-text-success-enabled',
          'bg-feedback-color-background-success-enabled',
        ],
      },
    ],

    defaultVariants: {
      variant: 'boxed',
      color: 'neutral',
      type: 'filled',
    },
  }
);
