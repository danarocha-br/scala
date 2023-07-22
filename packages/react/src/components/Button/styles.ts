import { styled, keyframes } from '../../styles';
import { Button as AccessibleButton } from 'reakit/Button';

const MoveScaleUpInitial = keyframes({
  to: { transform: 'translate3d(0,-100%,0) scale3d(1,1.1,1)', opacity: 0 },
});

const MoveScaleUpEnd = keyframes({
  from: {
    transform: 'translate3d(0,50%,0) scale3d(1,1.1,1)',
    opacity: 0,
  },
  to: {
    transform: 'translate3d(0,0,0)',
    opacity: 1,
  },
});

export const MoveLoadingGradientStart = keyframes({
  '0%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), $$borderWidth calc(100% - $$borderWidth), $$borderWidth 100%, 100% 100%, 100% 0%, 0% 0%)',
  },
  '25%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), calc(100% - $$borderWidth) calc(100% - $$borderWidth), calc(100% - $$borderWidth) 100%, 100% 100%, 100% 0%, 0% 0%)',
  },
  '50%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, 100% 0%, 0% 0%)',
  },
  '75%': {
    '-webkit-clip-path':
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth 0%, 0% 0%)',
  },
  '100%': {
    '-webkit-clip-path':
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, 0% 100%)',
  },
});

// const MoveLoadingGradientEnd = keyframes({
//   '0%': { backgroundPosition: '15% 0%' },
//   '50%': { backgroundPosition: '50% 0%' },
//   '100%': { backgroundPosition: '50% 100%' },
// });

//TODO: button disabled fix cursor

export const Container = styled(AccessibleButton, {
  all: 'unset',
  userSelect: 'none',
  boxSizing: 'border-box',
  '-webkit-appearance': 'none',

  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-medium',
  whiteSpace: 'nowrap',
  pointerEvents: 'initial',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',
  position: 'relative',
  outline: 'none',
  outlineColor: 'transparent',
  transition: 'all 300ms ease, outline 1ms',
  cursor: 'pointer',

  '&:focus': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: 'transparent',
  },

  '&:disabled': {
    opacity: '0.65',
    cursor: 'not-allowed',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },

  '& svg': {
    zIndex: '$1',
  },

  variants: {
    variant: {
      primary: {
        color: '$action-color-text-primary-enabled',
      },

      transparent: {
        fontWeight: '$font-weight-regular',
        color: '$action-color-text-transparent-enabled',
        background: '$action-color-background-transparent-enabled !important',

        '&:hover:not([disabled])': {
          // background: '$action-color-background-transparent-hover !important',
        },

        '&:disabled': {
          background: '$action-color-background-transparent-hover !important',
        },

        '& svg': {
          backgroundColor: '$action-color-background-transparent-hover',
          borderRadius: '$radii-md',
          mr: '$spacing-2',
          p: '$spacing-1',
        },

        '&:hover': {
          '& svg': {
            backgroundColor: '$action-color-background-transparent-pressed',
          },
        },
      },
    },

    size: {
      lg: {
        fontSize: '$font-size-md',
        padding: '$spacing-4 $spacing-4',
        borderRadius: '$radii-md',
        height: 64,
      },
      md: {
        fontSize: '$font-size-md',
        padding: '$spacing-3 $spacing-4',
        borderRadius: '$radii-md',
      },
      sm: {
        fontSize: '$font-size-sm',
        padding: '$spacing-1 $spacing-3',
        h: 40,
        borderRadius: '$radii-sm',

        '&:focus': {
          outline: '2px solid',
          outlineOffset: '0px',
          outlineColor: 'transparent',
        },
      },
      xs: {
        fontSize: '$font-size-xs',
        padding: '$spacing-1 $spacing-2',
        h: 30,
        borderRadius: '$radii-sm',

        '&:focus': {
          outline: '2px solid',
          outlineOffset: '0px',
          outlineColor: 'transparent',
        },
      },
    },

    fullWidth: {
      true: {
        w: '100%',
      },
    },

    color: {
      primary: {
        color: '$action-color-text-primary-enabled',
        background: '$action-color-background-primary-enabled',

        '&:hover:not([disabled])': {
          background: '$action-color-background-primary-hover',

          '& span': {
            zIndex: '$1',
          },
        },
        '&:focus': {
          outlineColor: '$action-color-border-primary-pressed',
        },
        '&:disabled': {
          color: '$action-color-text-primary-disabled !important',
          background: '$action-color-background-primary-disabled',
        },
      },
      secondary: {
        color: '$action-color-text-secondary-enabled',
        background: '$action-color-background-secondary-enabled',

        '&:hover:not([disabled])': {
          background: '$action-color-background-secondary-hover',
          '& span': {
            zIndex: '$1',
          },
        },
        '&:focus': {
          outlineColor: '$action-color-border-secondary-pressed',
          background: '$action-color-background-secondary-hover',
        },
        '&:disabled': {
          color: '$action-color-text-secondary-disabled !important',
          background: '$action-color-background-secondary-disabled',
        },
      },
      danger: {
        color: '$feedback-color-text-danger-default',
        background: '$feedback-color-background-danger-default',

        '&:hover:not([disabled])': {
          background: '$feedback-color-background-danger-hover',
        },
        '&:focus': {
          outlineColor: '$feedback-color-border-danger-pressed',
        },
        '&:disabled': {
          color: '$feedback-color-text-danger-disabled !important',
          background: '$feedback-color-background-danger-disabled',
        },
      },
    },

    animateOnHover: {
      true: {
        '&:hover:not([disabled])': {
          '&::before': {
            transform: 'translate3d(0,0,0) scale3d(1,1,1)',
            transition: 'transform 0.4s cubic-bezier(0.1, 0, 0.3, 1)',
          },

          '&::after': {
            transform: 'translate3d(0,0,0)',
            transitionDuration: '0.05s',
            transitionDelay: '0.4s',
            transitionTimingFunction: 'linear',
          },

          span: {
            animation: `${MoveScaleUpInitial} 0.3s forwards, ${MoveScaleUpEnd} 0.3s forwards 0.3s`,
          },
        },

        '& span': {
          display: 'block',
          position: 'relative',
          zIndex: '$1',
        },

        '&::before': {
          content: '',
          width: '120%',
          height: '0',
          position: 'absolute',
          paddingBottom: '120%',
          top: '-110%',
          left: '-10%',
          borderRadius: '50%',
          transform: 'translate3d(0,68%,0) scale3d(0,0,0)',
        },

        '&::after': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          transform: 'translate3d(0,-100%,0)',
          transition: 'transform 0.4s cubic-bezier(0.1, 0, 0.3, 1)',
        },
      },
    },

    loading: {
      true: {
        $$borderWidth: '2.4px',
        $$gradient:
          'linear-gradient(99deg, $colors$color-neutral-200, $colors$color-royal-300, $colors$color-froly-300)',
        position: 'relative',
        background: '$action-color-background-transparent-hover !important',

        '&::after': {
          content: '',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: '$radii-md',
          // border: '$$borderWidth solid $neutral200',
          background: '$$gradient',
          backgroundSize: '100% 100%',
          clipPath:
            'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), $$borderWidth calc(100% - $$borderWidth), $$borderWidth 100%, 100% 100%, 100% 0%, 0% 0%)',
          animation: `${MoveLoadingGradientStart} 2s ease-in-out alternate infinite`,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'transparent',
      color: 'primary',

      css: {
        color: '$text-color-body',
        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed',
        },
      },
    },

    {
      variant: 'transparent',
      color: 'secondary',

      css: {
        color: '$interactive-color-background-enabled',
        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed !important',
        },
      },
    },
    {
      variant: 'transparent',
      color: 'danger',

      css: {
        color: '$feedback-color-background-danger-default',
        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed',
        },
      },
    },

    {
      color: 'primary',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$action-color-background-primary-pressed',
        },
        '&::after': {
          background: '$action-color-background-primary-pressed',
        },
      },
    },

    {
      color: 'secondary',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$interactive-color-background-hover',
        },
        '&::after': {
          background: '$interactive-color-background-hover',
        },
      },
    },

    {
      color: 'danger',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$feedback-color-background-danger-hover',
        },
        '&::after': {
          background: '$feedback-color-background-danger-hover',
        },
      },
    },

    {
      variant: 'transparent',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-color-background-subdued !important',
        },
        '&::after': {
          background: '$surface-color-background-subdued !important',
        },
      },
    },
    // {
    //   variant: 'icon',
    //   animateOnHover: true,

    //   css: {
    //     '&::before': {
    //       background: '$surface-color-background-subdued !important',
    //       borderRadius: '50%',
    //       paddingBottom: '150%',
    //       top: '0%',
    //       left: '-10%',
    //     },
    //     '&::after': {
    //       background: '$surface-color-background-subdued !important',
    //     },
    //   },
    // },
    {
      variant: 'transparent',
      size: 'xs',
      css: {
        px: '$spacing-1',
      },
    },
    {
      variant: 'transparent',
      size: 'sm',
      css: {
        px: '$spacing-2',
      },
    },
    {
      variant: 'transparent',
      size: 'md',
      css: {
        px: '$spacing-3',
        height: '50px',

        '& svg': {
          mr: '$spacing-1 !important',
        },
      },
    },
    {
      variant: 'transparent',
      size: 'lg',
      css: {
        px: '$spacing-4',
        height: '64px',

        '& svg': {
          mr: '0 !important',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    color: 'primary',
    fullWidth: false,
    animateOnHover: false,
    loading: false,
  },
});
