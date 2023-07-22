import { styled } from '../../styles';
import { MoveLoadingGradientStart } from '../Button/styles';

export const Container = styled('button', {
  all: 'unset',
  color: '$action-color-text-transparent-enabled',
  background: '$action-color-background-transparent-enabled',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outlineColor: 'transparent',
  transition: '$base',

  '& svg': {
    fill: '$action-color-text-transparent-enabled',
  },

  '&:hover:not([disabled])': {
    background: '$action-color-background-transparent-hover',
  },

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

  variants: {
    size: {
      xs: { w: '22px', h: '22px', p: '0', borderRadius: '$radii-sm' },
      sm: {
        w: '28px',
        h: '28px',
        p: '0',
        borderRadius: '$radii-sm',
      },
      md: {
        w: '$spacing-6 ',
        h: '$spacing-6 ',
        p: '0 ',
        borderRadius: '$radii-md',
      },
    },

    variant: {
      primary: {},
      secondary: {
        // boxShadow: '$elevation-low',
        border: '2px solid',
        borderColor: '$action-color-border-transparent-pressed',
      },
    },

    color: {
      primary: {
        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed',
        },
      },
      secondary: {
        color: '$interactive-color-background-enabled',
        '& svg': {
          fill: '$interactive-color-background-enabled',
        },

        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed',
        },
      },
      danger: {
        color: '$feedback-color-background-danger-default',
        '& svg': {
          fill: '$feedback-color-background-danger-default',
        },

        '&:focus': {
          outlineColor: '$action-color-border-transparent-pressed',
        },
      },
    },

    loading: {
      true: {
        borderWidth: 0,
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
          background: '$$gradient',
          backgroundSize: '100% 100%',
          clipPath:
            'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), $$borderWidth calc(100% - $$borderWidth), $$borderWidth 100%, 100% 100%, 100% 0%, 0% 0%)',
          animation: `${MoveLoadingGradientStart} 2s ease-in-out alternate infinite`,
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
    variant: 'primary',
    color: 'primary',
  },
});
