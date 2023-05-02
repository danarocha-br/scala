import { styled } from '../../styles';

export const SVG = styled('svg', {
  fill: 'currentColor',

  variants: {
    color: {
      body: {
        color: '$text-color-body',
      },
      'body-lighter': {
        color: '$text-color-body-lighter',
      },
      caption: {
        color: '$text-color-caption',
      },
      danger: {
        color: '$text-color-danger',
      },
      success: {
        color: '$text-color-success',
      },
      warning: {
        color: '$text-color-warning',
      },
      'on-light': {
        color: '$text-color-on-light',
      },
      'on-dark': {
        color: '$text-color-on-dark',
      },
      current: {
        color: 'currentColor',
      },
    },

    size: {
      xs: {
        width: '$spacing-3',
      },
      sm: {
        width: 20,
      },
      md: {
        width: '$spacing-4',
      },
      lg: {
        width: '$spacing-5',
      },
    },
  },
});
