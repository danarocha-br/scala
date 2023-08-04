import { styled, keyframes } from '../../styles';
import { Content } from '@radix-ui/react-popover';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(6px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-6px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-6px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(6px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const ContainerContent = styled(Content, {
  color: '$text-color-body',
  fontFamily: '$font-family-sans',
  fontSize: '$font-size-sm',
  backgroundColor: '$surface-color-background-default',
  p: '$spacing-2',
  minWidth: 120,
  borderRadius: '$radii-sm',
  boxShadow: '$elevation-high',
  outline: 'none',

  animationDuration: '500ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  zIndex: '$max',
});
