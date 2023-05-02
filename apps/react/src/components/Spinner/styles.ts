import { keyframes, styled } from '../../styles';

const dash = keyframes({
  '0%': {
    'stroke-dasharray': '0, 150',
    'stroke-dashoffset': 0,
  },
  '50%': {
    'stroke-dasharray': '100, 150',
    'stroke-dashoffset': -24,
  },
  '100%': {
    'stroke-dasharray': '0, 150',
    'stroke-dashoffset': -124,
  },
});

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const colors = keyframes({
  '0%, 100%': {
    stroke: '$interactive-color-background-enabled',
  },
  '35%': {
    stroke: '$feedback-color-background-success-default',
  },
  '75%': {
    stroke: '$feedback-color-background-danger-default',
  },
});

export const Container = styled('svg', {
  animation: `${rotate} 2.625s linear infinite`,

  '& circle': {
    animation: `${dash} 1.4s ease-in-out infinite, ${colors} 2.5s ease-in-out 0.75s infinite`,
    stroke: '$feedback-danger-color-background-default',
    'stroke-linecap': 'round',
  },

  variants: {
    size: {
      xs: {
        width: '$spacing-3',
        height: '$spacing-3',
      },
      sm: {
        width: '$spacing-4',
        height: '$spacing-4',
      },
      md: {
        width: '$spacing-8',
        height: '$spacing-8',
      },
    },
  },
});
