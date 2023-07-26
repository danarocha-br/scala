import { styled } from '../../styles';
import {
  Root as CheckboxPrimitiveRoot,
  Indicator as CheckboxPrimitiveIndicator,
} from '@radix-ui/react-checkbox';

export const Container = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$spacing-2',
});

export const Indicator = styled(CheckboxPrimitiveIndicator, { all: 'unset' });

export const CheckboxWrapper = styled('div', {
  mr: '$spacing-2',
  width: '$spacing-3 !important',
  height: '$spacing-3 !important',

  border: '2px solid',
  borderColor: '$form-color-border-default',
  borderRadius: '$radii-sm',

  variants: {
    hasError: {
      true: {
        borderColor: '$form-color-border-error',
      },
    },
  },

  defaultVariants: {
    hasError: false,
  },
});

export const CheckboxWrapperTask = styled('div', {
  position: 'relative',
  top: '1px',
  d: 'inline-block',
  w: '$spacing-3',
  h: '$spacing-3',
  mr: '$spacing-2',

  border: '2px solid',
  borderColor: '$form-color-border-default',
  borderRadius: '$radii-sm',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-14px 0px 0px -12px',
    w: '$spacing-4',
    h: '$spacing-4',
    borderRadius: '$radii-circle',
    bg: '$feedback-color-background-success-default',
    transform: 'scale(0)',
  },

  '&::after': {
    content: '',
    position: 'absolute',
    top: '7px',
    left: '4px',
    width: '3px',
    height: '2px',
    borderRadius: '3px',
    boxShadow:
      '0 -18px 0 $colors$feedback-color-background-success-default, 12px -12px 0 $colors$feedback-color-background-success-default, 18px 0 0 $colors$feedback-color-background-success-default, 12px 12px 0 $colors$feedback-color-background-success-default, 0 18px 0 $colors$feedback-color-background-success-default, -12px 12px 0 $colors$feedback-color-background-success-default, -18px 0 0 $colors$feedback-color-background-success-default, -12px -12px 0 $colors$feedback-color-background-success-default',
    transform: 'scale(0)',
  },
});

export const Root = styled(CheckboxPrimitiveRoot, {
  all: 'unset',

  d: 'flex',
  alignItems: 'center',
  gap: '$spacing-2',
  position: 'relative',

  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  variants: {
    variant: {
      regular: {
        '& > label': {
          pointerEvents: 'none',
          verticalAlign: 'middle',
        },

        '&:hover:not([disabled])': {
          [`& ${CheckboxWrapper}`]: {
            '& svg': {
              '& path': {
                strokeDashoffset: 0,
              },
            },
          },
        },

        '&[data-disabled]': {
          [`& ${CheckboxWrapper}`]: {
            borderColor: '$form-color-border-default',
            '& svg': {
              '& path': {
                fill: '$form-color-border-default',
              },
            },
          },
        },

        '&[data-state="checked"]': {
          [`& ${CheckboxWrapper}`]: {
            borderColor: '$interactive-color-border-enabled',

            '& svg': {
              '& path': {
                fill: '$interactive-color-border-enabled',
              },
              '& polyline': {
                strokeDashoffset: 0,
              },
            },
          },
        },
      },

      task: {
        transition: '$base',
        transform: 'translateZ(0)',

        '& > label': {
          position: 'relative',
          transition: 'color .3s ease',

          '&::after': {
            content: '',
            position: 'absolute',
            top: '54%',
            left: '0',
            width: '0',
            height: '1px',
            bg: '$text-color-body-lighter',
          },
        },

        '&:hover:not([disabled]):not([data-state="checked"])': {
          [`& ${CheckboxWrapperTask}`]: {
            borderColor: '$feedback-color-background-success-default',
          },
        },

        '&[data-state="checked"]': {
          [`& ${CheckboxWrapperTask}`]: {
            borderColor: 'transparent',

            '& svg': {
              transform: 'scale(1.1)',
              transition: 'all .4s ease',
              transitionDelay: '.1s',
            },

            '&::before': {
              transform: 'scale(1.1)',
              opacity: 0,
              transition: 'all .3s ease',
            },

            '&::after': {
              transform: 'scale(1.5)',
              opacity: 0,
              transition: 'all .6s ease',
            },
          },
          '& label': {
            color: '$text-color-body-lighter',

            '&::after': {
              w: '100%',
              transition: 'all .4s ease',
            },
          },
        },
      },
    },

    hasError: {
      true: {},
    },
  },

  defaultVariants: {
    variant: 'regular',
    hasError: false,
  },
});

export const Svg = styled('svg', {
  position: 'absolute',
  top: '4.2px',
  left: '-0.1px',

  '& path': {
    fill: 'none',
    stroke: '$interactive-color-background-enabled',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDasharray: '71px',
    strokeDashoffset: '71px',
    transition: 'all .6s ease',
  },

  '& polyline': {
    fill: 'none',
    stroke: '#FFF',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDasharray: '18px',
    strokeDashoffset: '18px',
    transition: 'all, .3s ease',
    transform: 'scale(.85) translateX(2px) translateY(1px)',
    ml: '$spacing-1',
  },
});

export const SvgTask = styled('svg', {
  position: 'relative',
  transform: 'scale(0)',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',

  '& polyline': {
    strokeWidth: 2,
    stroke: '$feedback-color-background-success-default',
  },
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  d: 'flex',
  flexDirection: 'column',
  gap: '$spacing-3',

  outline: 'none',
  border: 'none',
  p: '0',
  '&:focus-visible': {
    '&[aria-activedescendant]': {
      boxShadow: '0 0 0 3px $colors$form-color-background-disabled',
      borderRadius: '$radii-md',
    },
  },

  variants: {
    variant: {
      regular: {},
      task: {
        w: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'regular',
  },
});
