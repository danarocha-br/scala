import { CSS, styled } from '../../styles';

export type TextProps = {
  as?: React.ElementType;
  css?: CSS;
} & React.ComponentProps<typeof Text>;

export const Text = styled('span', {
  margin: '0',
  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xxs: {
        fontSize: '$font-size-xxs',
        lineHeight: '$line-height-1',
      },
      xs: {
        fontSize: '$font-size-xs',
        lineHeight: '$line-height-2',
      },
      sm: {
        fontSize: '$font-size-sm',
        lineHeight: '$line-height-3',
      },
      md: {
        fontSize: '$font-size-md',
        lineHeight: '$line-height-4',
      },
      lg: {
        fontSize: '$font-size-lg',
        lineHeight: '$line-height-4',
      },
      //TODO: divive these to heading instead
      xl: {
        fontSize: '$font-size-xl',
        lineHeight: '$line-height-5',
      },
      '2xl': {
        fontSize: '$font-size-2xl',
        lineHeight: '$line-height-6',
      },
      '3xl': {
        fontSize: '$font-size-3xl',
        lineHeight: '$line-height-5',
      },
      '4xl': {
        fontSize: '$font-size-4xl',
        lineHeight: '$line-height-6',
      },
    },

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
      success: {
        color: '$text-color-success',
      },
      danger: {
        color: '$text-color-danger',
      },
      warning: {
        color: '$text-color-warning',
      },
      'on-dark': {
        color: '$text-color-on-dark',
      },
      'on-light': {
        color: '$text-color-on-light',
      },
      current: {
        color: 'inherit',
      },
    },

    weight: {
      light: {
        fontWeight: '$font-weight-light',
      },
      regular: {
        fontWeight: '$font-weight-regular',
      },
      medium: {
        fontWeight: '$font-weight-medium',
      },
      semibold: {
        fontWeight: '$font-weight-semibold',
      },
    },

    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },

    leading: {
      1: {
        lineHeight: '$line-height-1',
      },
      2: {
        lineHeight: '$line-height-2',
      },
      3: {
        lineHeight: '$line-height-3',
      },
      4: {
        lineHeight: '$line-height-4',
      },
      5: {
        lineHeight: '$line-height-5',
      },
      6: {
        lineHeight: '$line-height-6',
      },
      7: {
        lineHeight: '$line-height-7',
      },
      8: {
        lineHeight: '$line-height-8',
      },
      9: {
        lineHeight: '$line-height-9',
      },
    },
  },

  defaultVariants: {
    align: 'left',
    size: 'md',
    color: 'body',
    leading: '4',
    weight: 'regular',
  },
});

Text.displayName = 'Text';
