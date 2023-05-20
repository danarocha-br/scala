import { styled } from '../../styles';

export const Anchor = styled('span', {
  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-medium',

  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  position: 'relative',
  whiteSpace: 'nowrap',
  px: '$spacing-1',

  '&:hover': {
    outline: 'none',

    '&::before': {
      transform: 'translate3d(0, 2px, 0) scale3d(1.05, 2, 1)',
      clipPath:
        'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
    },

    '& span': {
      transform: 'translate3d(0, -2px, 0)',
    },
  },

  '&:focus': {
    background: 'transparent',
    outline: '1px dashed',
    outlineOffset: '3px',
    outlineColor: '$interactive-color-background-disabled',
    borderRadius: '$radii-sm',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '1px',
    background: 'currentColor',
    top: '100%',
    left: '0',
    pointerEvents: 'none',

    transformOrigin: '50% 100%',
    transition: 'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
    clipPath:
      'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
  },

  '&::after': {
    position: 'absolute',
    width: '100%',
    height: '1px',
    background: 'currentColor',
    top: '100%',
    left: '0',
    pointerEvents: 'none',
  },

  '& span': {
    d: 'inline-block',
    transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
  },

  variants: {
    color: {
      primary: {
        color: '$text-color-body',
        '&:active': {
          color: '$action-color-background-primary-pressed',
        },
      },
      secondary: {
        color: '$interactive-color-background-enabled',
        '&:active': {
          color: '$interactive-color-background-pressed',
        },
      },
      caption: {
        color: '$text-color-body-lighter',
        '&:active': {
          color: '$text-color-body',
        },
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});
