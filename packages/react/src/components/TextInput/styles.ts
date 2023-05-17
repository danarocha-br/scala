import { Button } from 'reakit';
import { styled } from '../../styles';

export const Addon = styled('span', {
  color: '$text-color-body',
  fontSize: '$font-size-sm',

  position: 'absolute',
  top: '$spacing-5',
  left: '$spacing-3',
  mt: 2,

  variants: {
    isFocused: {
      true: {
        color: '$text-color-on-dark',
      },
    },
    isDisabled: {
      true: {
        color: '$text-color-body-lighter',
      },
    },
    isTable: {
      true: {
        top: '$spacing-3',
      },
    },
    isReadOnly: {
      true: {
        top: '$spacing-4',
        left: 0,
        mt: 3,
      },
    },
  },

  defaultVariants: {
    isFocused: false,
  },
});

export const BaseInputStyles = {
  fontFamily: '$font-family-sans',
  color: '$text-color-body',
  fontSize: 'max($md, $sm)',
  bg: '$form-color-background-default',
  py: '$spacing-2',
  px: '$spacing-3',
  border: 'none',
  borderTop: '1px solid $colors$form-color-border-default',
  w: 'stretch',
  maxWidth: '100%',

  appearance: 'none',
  transition: 'all $transitions$base',

  '&::placeholder': {
    color: '$text-color-body-lighter',
    fontWeight: '$font-weight-normal',
    fontFamily: '$font-family-sans',

    opacity: 0.4,
  },

  '&:focus:not([readonly])': {
    color: '$text-color-on-dark',
    bg: '$form-color-background-focus',

    outline: 'none',
  },

  '&:read-only': {
    border: 'none',
    outline: 'none',
    padding: 0,
    bg: 'transparent',
    borderTop: 'none',
    userSelect: 'none !important',
    pointerEvents: 'none',

    '&:focus': {
      color: '$colors$text-color-body !important',
      bg: 'transparent !important',

      '&::placeholder': {
        color: '$text-color-body-lighter !important',
      },
    },

    '&:hover': {
      bg: 'transparent !important',
    },

    [`& ${Addon}`]: {
      color: '$text-color-body-lighter !important',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
    bg: '$form-color-background-default !important',
    padding: '$spacing-2 $spacing-3',
    pointerEvents: 'auto',

    '&:hover': {
      bg: '$form-color-background-default !important',
    },
  },

  '&:-webkit-autofill': {
    '-webkit-box-shadow':
      '0 0 0 $spacings$spacing-2 $colors$text-color-body inset',
    filter: 'none',
  },

  variants: {
    variant: {
      default: {
        borderBottomRightRadius: '$radii-sm',
        borderBottomLeftRadius: '$radii-sm',

        h: '100%',
      },
      table: {
        borderRadius: 0,
        border: '1px solid transparent',

        h: '$spacing-5',

        '&[readonly]': {
          padding: '0 $spacing-2',
        },

        '&:hover:not([readonly]):not([disabled])': {
          border: '1px solid $colors$form-color-border-focus',
        },
      },
    },

    isFocused: {
      true: {
        '&::placeholder': {
          opacity: 0,
        },
      },
    },

    hasAddon: {
      true: {
        pl: '$spacing-9 !important',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    isFocused: false,
    hasAddon: false,
  },
};

export const Input = styled('input', {
  ...BaseInputStyles,
});

export const Container = styled('div', {
  fontFamily: '$font-family-sans',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  zIndex: '1 !important',

  bg: '$surface-color-background-subdued',

  transition: 'all $transitions$base',
  position: 'relative',

  '@motion': {
    transition: 'none',
  },

  '&:hover': {
    borderColor: '$form-color-border-focus',

    '& input:not([readonly])::placeholder': {
      color: '$text-color-on-dark',
    },

    '& input:disabled::placeholder': {
      color: '$text-color-body-lighter !important',
    },

    [`& ${Addon}`]: {
      color: '$text-color-on-dark !important',

      '& input:disabled': {
        color: '$text-color-body-lighter !important',
      },
    },

    '& input:not([readonly])': {
      bg: '$form-color-background-hover',
      borderColor: '$form-color-border-focus',
      color: '$text-color-on-dark !important',

      '&:focus': {
        bg: '$form-color-background-focus',
      },

      '&:hover': {
        color: '$text-color-on-dark',
      },
    },
  },

  variants: {
    variant: {
      default: {
        borderRadius: '$radii-md',
        border: '1px solid',
        borderColor: '$form-color-border-default',
      },
      table: {
        borderRadius: 0,
      },
    },
    isFocused: {
      true: {
        borderColor: '$form-color-border-focus',
        transition: 'all $transitions$fast',
        '&.input__icon--password': {
          color: '$text-color-on-dark !important',
        },
      },
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed !important',
        opacity: 0.7,

        bg: 'transparent !important',

        '& input:disabled': {
          bg: '$form-color-border-default !important',
        },

        '&:hover': {
          borderColor: '$form-color-border-default',

          '& input:disabled': {
            bg: '$form-color-border-default !important',
          },
        },
      },
    },

    hasIcon: {
      true: {
        '& .input__icon': {
          mr: '$spacing-1',

          '&--error': {
            right: '$spacing-6',
          },
        },
      },
    },

    isReadOnly: {
      true: {
        border: 'none',
        bg: 'transparent !important',

        '&:hover': {
          [`& ${Addon}`]: {
            color: '$text-color-body-lighter !important',
          },
        },
      },
    },

    hasError: {
      true: {
        borderColor: '$form-color-border-error',

        '& input': {
          borderTop: '1px solid $colors$form-color-border-error',
        },

        '& .input__action': {
          transform: 'translateX(-$space$spacing-5)',
        },
      },
    },

    isLoading: {
      true: {
        '& .input__action': {
          transform: 'translateX(-$space$spacing-5)',
        },
      },
    },
  },

  compoundVariants: [
    {
      isFocused: true,
      hasIcon: true,
      css: {
        '.input__icon': {
          fill: '$form-color-background-focus',

          [`.dark-theme &`]: {
            fill: '$form-color-background-subdued',
          },
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    isFocused: false,
    isDisabled: false,
    isReadOnly: false,
    hasIcon: false,
    isLoading: false,
  },
});

export const Label = styled('label', {
  color: '$text-color-body-lighter',
  fontSize: '$font-size-xs',
  fontWeight: '$font-weight-medium',
  padding: '$spacing-1 $spacing-3',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'stretch',

  position: 'relative',

  '&.input__error-icon': {
    position: 'absolute',
    right: '$spacing-1',
  },

  variants: {
    isReadOnly: {
      true: {
        pl: 0,
      },
    },
  },

  defaultVariants: {
    isReadOnly: false,
  },
});

export const SettingsButton = styled(Button, {
  all: 'unset',
  color: '$text-color-body',
  fontSize: '$font-size-xs',
  display: 'flex',
  alignItems: 'center',
  gap: '$spacing-1',
  bg: 'transparent',
  zIndex: '$100',
  position: 'absolute',
  right: '$spacing-2',
  top: 4,

  '&:hover': {
    color: '$action-color-background-primary-hover',
  },
  '&:focus': {
    color: '$action-color-background-primary-focus',
  },
});
