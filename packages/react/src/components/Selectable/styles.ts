import { styled } from '../../styles';
import { Button as AccessibleButton } from '@ariakit/react';
import Select from 'react-select';

export const Container = styled('div', {
  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-regular',
  background: '$action-color-background-transparent-hover',
  outline: 'none',
  outlineColor: '$action-color-background-transparent-hover',

  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: 'auto',

  w: '100% !important',
  height: '34px',
  position: 'relative',
  borderRadius: '$radii-sm',
  transition: '$base',

  '&:hover:not([disabled])': {
    color: '$text-color-body',
    backgroundColor: '$interactive-color-background-disabled',
    cursor: 'pointer',
  },

  '&:hover .c-selectable__control': {
    color: '$text-color-body',
    backgroundColor: '$interactive-color-background-disabled',
    outline: 'none',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,

        '& .c-selectable--is-disabled': {
          bg: '$form-form-color-background-default',
        },

        '&:hover': {
          borderColor: '$form-color-border-default !important',

          '& .c-selectable__control': {
            bg: '$form-color-background-default',
          },

          '& .c-selectable__input-container': {
            color: '$text-color-body !important',
          },

          '& .c-selectable__placeholder': {
            color: '$text-color-body-lighter !important',
          },

          '& .c-selectable__clear-indicator': {
            color: '$text-color-body !important',
          },

          '& .c-selectable__dropdown-indicator': {
            color: '$text-color-caption !important',
            opacity: 0.6,
          },
        },
      },
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
});

export const customSelectStyles = {
  w: '100%',

  '& .c-selectable': {
    w: '100%',

    '&__control': {
      fontSize: 'max($font-size-base, $font-size-sm)',
      px: '$spacing-1',
      border: 'none',
      bg: 'transparent',
      appearance: 'none',
      transition: '$base',
      boxShadow: 'none',
      outline: 'none',
      outlineColor: '$action-color-background-transparent-hover !important',

      '&--is-focused': {
        color: '$text-color-body',
        backgroundColor: '$interactive-color-background-disabled',
        outline: '2px solid !important',
        outlineOffset: '2px !important',
        outlineColor: '$interactive-color-background-disabled !important',
      },

      '&__placeholder': {
        color: '$text-color-body-lighter',
        fontWeight: '$font-weight-regular',
      },
    },

    '&__indicator-separator': {
      display: 'none !important',
    },

    '&__dropdown-indicator': {
      display: 'none !important',
    },

    '&__clear-indicator': {
      pr: '$spacing-1',
      color: '$text-color-caption',
      opacity: 0.5,

      '&:hover': {
        color: '$text-color-danger',
        bg: 'transparent !important',
      },
    },

    '&__single-value': {
      color: '$text-color-body !important',
    },

    '&__option': {
      color: '$text-color-body',
      py: '12px',
      transition: '$base',
      display: 'flex',
      gap: '$spacing-1',
      justifyContent: 'space-between',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      width: '100%',
      borderRadius: '$radii-xs',

      '&--is-focused': {
        bg: '$action-color-background-transparent-hover',
      },
      '&--is-selected': {
        bg: '$interactive-color-background-disabled',
      },
    },

    '&__menu': {
      backgroundColor: '$surface-color-background-default',
      borderRadius: '$radii-sm',
      border: '1px solid',
      borderColor: '$action-color-border-transparent-enabled',
      boxShadow: '$elavation-low',
      p: '$spacing-1',
      zIndex: '3 !important',
      minWidth: '120px',
      width: 'auto',
    },

    '&__menu-list': {
      p: 0,
      borderRadius: '$radii-sm',
    },

    '&--is-disabled': {
      cursor: 'not-allowed !important',
      opacity: 0.6,
      bg: '$surface-color-background-default',
    },

    '&__value-container--is-multi': {
      gap: '$spacing-1',
    },

    '&__multi-value': {
      bg: 'transparent',

      position: 'relative',
      transition: '$base',

      '&__label': {
        color: '$text-color-body',
        fontSize: '$font-size-sm',
        display: 'flex',
        alignItems: 'center',
        gap: '$spacing-1',
        position: 'relative',
        top: -1,
        p: 0,
      },
      '&__remove': {
        color: '$text-color-caption',
        opacity: 0.5,
        p: 0,
        ml: '$spacing-1',
        display: 'none',
      },

      '&:hover': {
        '& .c-selectable__multi-value__remove': {
          display: 'flex',
        },
      },
    },
  },
  variants: {},

  defaultVariants: {
    hasButton: false,
    isTable: false,
  },
};

export const CustomSelect = styled(Select, {
  ...customSelectStyles,
});

export const ButtonContainer = styled(AccessibleButton, {
  fontFamily: '$font-family-sans',
  color: '$text-color-body-lighter',
  backgroundColor: '$action-color-background-transparent-hover',
  border: 'none',
  borderRadius: '$radii-sm',
  outline: 'none',
  outlineColor: '$action-color-background-transparent-hover',
  cursor: 'pointer',

  display: 'flex',
  gap: '$spacing-2',
  alignItems: 'center',
  px: '$spacing-2',
  height: '34px',
  transition: '$base',

  '&:hover': {
    color: '$text-color-body',
    backgroundColor: '$interactive-color-background-disabled',
  },

  '&:focus, &[data-focus-visible]': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: '$interactive-color-background-disabled',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },

  '&[aria-disabled="true"]': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },

  variants: {
    isActive: {
      true: {
        color: '$text-color-body',
      },
    },
  },
});
