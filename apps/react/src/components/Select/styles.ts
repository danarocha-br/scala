import { styled } from '../../styles';
import Select from 'react-select';

export const Container = styled('div', {
  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-regular',
  background: '$form-color-background-default',

  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: 'auto',

  w: '100% !important',
  position: 'relative',

  borderRadius: '$radii-md',
  border: '1px solid',
  borderColor: '$form-color-border-default',

  transition: '$base',

  '&:hover:not([disabled])': {
    borderColor: '$form-color-border-hover',

    '& .c-select__single-value': {
      color: '$text-color-on-dark !important',
    },

    '& .c-select__dropdown-indicator': {
      color: '$text-color-on-dark',
    },

    '& .c-select__input-container': {
      color: '$text-color-on-dark',
    },

    '& .c-select__placeholder': {
      color: '$text-color-on-dark',
    },
  },

  '&:hover .c-select__control': {
    color: '$text-color-on-dark',
    background: '$form-color-background-hover',
    borderBottomLeftRadius: '$radii-sm',
    borderBottomRightRadius: '$radii-sm',
    outline: 'none',
  },

  variants: {
    isTable: {
      true: {
        borderRadius: 0,
        border: 'none',
      },
    },

    hasError: {
      true: {
        borderColor: '$form-color-border-error',
      },
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,

        '& .c-select--is-disabled': {
          bg: '$form-form-color-background-default',
        },

        '&:hover': {
          borderColor: '$form-color-border-default !important',

          '& .c-select__control': {
            bg: '$form-color-background-default',
          },

          '& .c-select__input-container': {
            color: '$text-color-body !important',
          },

          '& .c-select__placeholder': {
            color: '$text-color-body-lighter !important',
          },

          '& .c-select__clear-indicator': {
            color: '$text-color-body !important',
          },

          '& .c-select__dropdown-indicator': {
            color: '$text-color-caption !important',
            opacity: 0.6,
          },
        },
      },
    },
  },
  defaultVariants: {
    isTable: false,
    hasError: false,
    isDisabled: false,
  },
});

export const customSelectStyles = {
  w: '100%',

  '& .c-select': {
    w: '100%',

    '&__control': {
      fontSize: 'max($font-size-base, $font-size-sm)',
      px: '$spacing-1',
      border: 'none',
      borderTop: '1px solid',
      borderColor: '$form-color-border-default',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      bg: 'transparent',
      appearance: 'none',
      transition: '$base',
      boxShadow: 'none',

      '&:hover:not([disabled])': {
        color: '$text-color-on-dark',
      },

      '&--is-focused': {
        color: '$text-color-on-dark',
        outline: 'none',
        bg: '$form-color-background-focus',
        border: '1px solid',
        borderColor: '$form-color-border-focus',

        '& .c-select__input-container': {
          color: '$text-color-on-dark !important',
        },

        '& .c-select__single-value': {
          color: '$text-color-on-dark !important',
        },

        '& .c-select__dropdown-indicator': {
          color: '$text-color-on-dark',
        },

        '& .c-select__placeholder': {
          color: '$text-color-on-dark',
        },

        '& .c-select__input': {
          color: '$text-color-on-dark',
        },

        '& .c-select__clear-indicator': {
          color: '$text-color-on-dark',
        },
      },

      '&__single-value': {
        color: '$text-color-body !important',
      },

      '&__indicator-separator': {
        bg: '$form-color-background-default',
      },

      '&__placeholder': {
        color: '$form-color-background-default',
        opacity: 0.4,
        fontWeight: '$font-weight-regular',
      },

      '&__dropdown-indicator': {
        color: '$form-color-background-default',
        p: '$spacing-1',
      },
    },

    '&__clear-indicator': {
      p: '0',

      '&:hover': {
        color: '$text-color-on-dark',
      },
    },

    '&__single-value': {
      color: '$text-color-body !important',
    },

    '&__option': {
      color: '$text-color-body',
      py: '$spacing-2',
      transition: '$base',

      '&--is-focused': {
        color: '$text-color-on-dark',
        bg: '$form-color-background-focus',
      },
      '&--is-selected': {
        color: '$text-color-on-dark',
        bg: '$form-color-background-focus',
      },
    },

    '&__menu': {
      bg: '$form-color-background-default',
      borderRadius: '$radii-md',
      p: 0,
      zIndex: '3 !important',
    },

    '&__menu-list': {
      p: 0,
      borderRadius: '$radii-md',
      borderBottomLeftRadius: '$radii-md',
      borderBottomRightRadius: '$radii-md',
    },

    '&--is-disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
      bg: '$form-color-background-default',
    },

    '&__indicator-separator': {
      d: 'none',
    },

    '&__multi-value': {
      bg: '$interactive-color-background-disabled',
      position: 'relative',

      '&__label': {
        color: '$text-color-body',
        fontSize: '$font-size-sm',
        position: 'relative',
        top: -1,
        pr: '$spacing-2',
      },
      '&__remove': {
        color: '$text-color-body',
        opacity: 0.7,
      },
    },
  },
  variants: {
    isTable: {
      true: {
        h: '$spacing-5',

        '& .c-select__control': {
          h: '100%',
          border: '1px solid transparent',
          borderRadius: '0 !important',

          '&:hover': {
            borderColor: '$form-color-border-focus',
            borderRadius: '0 !important',
          },
        },

        '&__indicator-separator': {
          w: 0,
        },
      },
    },

    hasButton: {
      true: {
        '& .c-select__control--is-focused': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        '& .c-select__control__menu-list': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },

  defaultVariants: {
    hasButton: false,
    isTable: false,
  },
};

export const CustomSelect = styled(Select, {
  ...customSelectStyles,
});

export const Label = styled('label', {
  color: '$text-color-body-lighter',
  fontSize: '$font-size-sm',
  fontWeight: '$font-weight-medium',
  backgroundColor: '$surface-color-background-subdued',
  borderTopLeftRadius: '$radii-md',
  borderTopRightRadius: '$radii-md',

  d: 'flex',
  justifyContent: 'space-between',
  position: 'relative',

  w: '-webkit-fill-available',
  padding: '$spacing-1 $spacing-3',

  '& .c-select__icon--error': {
    position: 'absolute',
    right: '$spacing-1',
  },

  '& .c-select__icon': {
    position: 'relative',
    left: '-8px',
    mr: '0px',
  },
});

export const ActionMenuButton = styled('button', {
  color: '$text-color-success',
  fontWeight: '$font-weight-medium',
  bg: '$surface-color-background-subdued',
  border: 'none',
  borderTop: '1px solid $form-color-border-default',
  w: '100%',
  h: '$spacing-6',
  outline: 'none',
  boxShadow: 'none',

  d: 'flex',
  alignItems: 'center',
  px: '$spacing-3',

  borderBottomLeftRadius: '$radii-md',
  borderBottomRightRadius: '$radii-md',

  transition: '$base',

  '&:hover': {
    color: '$text-color-on-dark',
    bg: '$action-color-background-primary-enabled',
  },

  '& svg': {
    mr: '$spacing-2',
  },
});
