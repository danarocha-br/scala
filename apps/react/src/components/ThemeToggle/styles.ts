import { styled } from '../../styles';

export const Button = styled('button', {
  all: 'unset',

  position: 'relative',
  cursor: 'pointer',
  borderRadius: '$radii-sm',
  transform: 'scale(0.8)',
  p: 2,
  transition: 'background .3s linear',

  '&:hover': {
    bg: '$action-color-background-transparent-hover',
  },

  '&:focus': {
    outline: '2px solid',
    outlineColor: '$action-color-background-transparent-disabled',
    outlineOffset: '2px',
  },

  '& svg': {
    transition: 'all .3s linear',
    margin: '0 auto',
    fill: 'none',

    '& path': {
      stroke: '$text-color-body-lighter',
      strokeWidth: 2,
      strokeLinecap: 'round',
      transition: 'all .2s linear',

      '&.light': {
        stroke: '$text-color-body-lighter',
        strokeDasharray: '3px',
        strokeDashoffset: 0,
      },
    },
  },

  variants: {
    isDark: {
      true: {
        '& svg': {
          transform: 'translateY(-3px)',
        },

        '& path': {
          '&.light': {
            strokeDashoffset: '3px !important',
            opacity: 0,
          },
        },
      },
    },
  },
});
