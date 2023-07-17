import { styled } from '../../styles';

export const Container = styled('span', {
  fontFamily: '$font-family-sans',
  fontSize: '$font-size-sm',
  border: '1px solid transparent',
  px: '$spacing-2',
  pb: '1px',
  whiteSpace: 'nowrap',

  variants: {
    variant: {
      default: {
        borderRadius: '$radii-sm',
      },
      pill: {
        borderRadius: '$radii-pill',
      },
    },

    color: {
      primary: {
        color: '$action-color-text-primary-enabled',
        borderColor: '$action-color-background-primary-enabled',
        backgroundColor: '$action-color-background-primary-enabled',
      },
      secondary: {
        color: '$action-color-text-secondary-enabled',
        borderColor: '$action-color-background-secondary-enabled',
        backgroundColor: '$action-color-background-secondary-enabled',
      },
      warning: {
        color: '$feedback-color-text-warning-default',
        borderColor: '$feedback-color-background-warning-default',
        backgroundColor: '$feedback-color-background-warning-default',
      },
      danger: {
        color: '$feedback-color-text-danger-default',
        borderColor: '$feedback-color-background-danger-default',
        backgroundColor: '$feedback-color-background-danger-default',
      },
      'on-dark': {
        color: 'inherit',
        borderColor: '$text-color-on-dark',
        backgroundColor: '$text-color-on-dark',
      },
    },

    outlined: {
      true: {
        backgroundColor: 'transparent !important',
      },
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      outlined: true,
      css: {
        color: '$action-color-background-primary-enabled',
      },
    },
    {
      color: 'secondary',
      outlined: true,
      css: {
        color: '$action-color-background-secondary-enabled',
      },
    },
    {
      color: 'warning',
      outlined: true,
      css: {
        color: '$feedback-color-background-warning-pressed',
      },
    },
    {
      color: 'danger',
      outlined: true,
      css: {
        color: '$action-color-background-danger-enabled',
      },
    },
    {
      color: 'on-dark',
      outlined: true,
      css: {
        color: '$text-color-on-dark',
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    color: 'primary',
    outlined: false,
  },
});
