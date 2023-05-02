import { styled } from '../../styles';
import {
  Indicator as PrimitiveIndicator,
  Item as PrimitiveItem,
  Root as PrimitiveRoot,
} from '@radix-ui/react-radio-group';

export const Indicator = styled(PrimitiveIndicator, {
  all: 'unset',
});

export const Root = styled(PrimitiveRoot, {
  d: 'flex',
  flexDirection: 'column',
  gap: '$spacing-2',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const Item = styled(PrimitiveItem, {
  all: 'unset',

  d: 'flex',
  alignItems: 'center',
  gap: '$spacing-3 !important',

  userSelect: 'none',
  '-webkit-user-select': 'none',
  cursor: 'pointer',

  borderRadius: '$radii-md',
  transition: '$base',
  position: 'relative',

  '&[data-state="checked"]': {
    opacity: 1,

    '& svg path': {
      transition: 'all .3s ease',
    },
    '& svg .inner': {
      strokeDasharray: 38,
      transitionDelay: '.1s',
    },
    '& svg .outer': {
      strokeDashoffset: 0,
    },
  },

  variants: {
    variant: {
      primary: {
        gap: '$spacing-2',
        pr: '$spacing-2',
        py: '$spacing-1',
        borderRadius: '$radii-pill',
      },
      secondary: {
        border: '2px solid',
        borderColor: '$interactive-color-background-disabled',
        opacity: 0.7,

        py: '$spacing-6',
        px: '$spacing-3',
        gap: '$spacing-2',

        '& svg circle': {
          stroke: 'none',
        },

        '&[data-state="checked"]': {
          bg: '$form-color-background-default',
          borderColor: '$interactive-color-background-enabled',
          boxShadow: '$30',
          opacity: 100,
        },
      },
      boxed: {
        border: '1px solid',
        borderColor: '$form-color-border-default',
        opacity: 1,

        py: '$spacing-6',
        px: '$spacing-3',
        gap: '$spacing-2',

        w: '100%',
        flexDirection: 'column',

        '& svg circle': {
          stroke: 'none',
        },

        '& svg': {
          position: 'absolute',
          top: '$spacing-2',
          left: '$spacing-2',
        },

        '& span': {
          mt: '$spacing-5',
        },

        '&[data-state="checked"]': {
          bg: '$form-color-background-default',
          borderColor: '$interactive-color-background-enabled',
          borderWidth: 1.5,
          opacity: 100,

          '& .radio__icon': {
            color: '$interactive-color-background-enabled',
          },
        },
      },
    },

    hasError: {
      true: {
        borderColor: '$form-color-border-error',

        '& svg circle': {
          stroke: '$form-color-border-error',
        },
      },
    },

    hasIcon: {
      true: {},
    },

    isDisabled: {
      true: {
        borderColor: '$form-color-border-disabled',
        cursor: 'not-allowed',

        '& span, & label, & .radio__icon': {
          opacity: 0.65,
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      isDisabled: false,
      css: {
        '&:hover': {
          // bg: '$form-disabled',

          '& svg path': {
            transition: 'all .4s ease',
          },

          '& svg .outer': {
            strokeDashoffset: 0,
          },
        },

        '&:active': {
          transform: ' scale(.97)',
        },
      },
    },
    {
      variant: 'secondary',
      isDisabled: false,
      css: {
        '&:hover': {
          borderColor: '$interactive-color-background-enabled',
          transform: ' scale(.99)',
          opacity: 100,

          '& svg path': {
            transition: 'all .4s ease',
          },

          '& svg .outer': {
            strokeDashoffset: 0,
          },
        },

        '&:active': {
          transform: ' scale(.97)',
        },
      },
    },
    {
      variant: 'boxed',
      isDisabled: false,
      css: {
        '&:hover': {
          borderColor: '$interactive-color-background-enabled',
          transform: ' scale(.99)',
          opacity: 100,

          '& svg path': {
            transition: 'all .4s ease',
          },

          '& svg .outer': {
            strokeDashoffset: 0,
          },
        },

        '&:active': {
          transform: ' scale(.97)',
        },
      },
    },
    {
      variant: 'boxed',
      hasIcon: true,
      css: {
        alignItems: 'baseline',

        '& .radio__icon': {
          mt: 40,
          ml: '$spacing-1',
        },

        '& label': {
          position: 'relative',
          top: '$spacing-5',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    isDisabled: false,
    fullWidth: false,
  },
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  d: 'flex',
  flexDirection: 'column',
  gap: '$spacing-2',

  outline: 'none',
  border: 'none',
  p: '0',
  userSelect: 'none',
  w: '100%',

  '&:focus-visible': {
    '&[aria-activedescendant]': {
      boxShadow: '0 0 0 3px $colors$form-color-background-disabled',
      borderRadius: '$radii-md',
    },
  },

  variants: {
    variant: {
      primary: {},
      secondary: {
        w: '100%',
      },
      boxed: {
        w: '100%',
        // flexDirection: 'row',
        // justifyContent: 'strecth',
        d: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        columnGap: '16px',
        rowGap: '16px',

        '@bp-md': {
          gridTemplateColumns: '1fr 1fr 1fr',
        },
      },
    },
    fullWidth: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variant: 'boxed',
      fullWidth: true,
      css: {
        '@bp-md': {
          d: 'flex',
          flexDirection: 'row',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    fullWidth: false,
  },
});

export const Svg = styled('svg', {
  fill: 'none',
  verticalAlign: 'middle',

  '& circle': {
    strokeWidth: 2,
    stroke: '$form-color-border-default',
  },

  '& path': {
    strokeWidth: 2,
    stroke: '$interactive-color-background-enabled',
  },

  '& .inner': {
    strokeWidth: 6,
    strokeDasharray: 19,
    strokeDashoffset: 19,
  },

  '& .outer': {
    strokeWidth: 2,
    strokeDasharray: 57,
    strokeDashoffset: 57,
  },

  variants: {
    hasError: {
      true: {
        '& path': {
          stroke: '$form-color-border-error',
        },
      },
    },

    isDisabled: {
      true: {
        '& path': {
          stroke: '$form-color-border-default',
        },
      },
    },
  },

  defaultVariants: {
    hasError: false,
    isDisabled: false,
  },
});
