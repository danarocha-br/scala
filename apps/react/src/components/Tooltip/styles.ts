import { keyframes, styled } from '../../styles';
import {
  Content as TooltipContent,
  Arrow as TooltipArrow,
} from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(5px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-5px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-5px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(5px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Content = styled(TooltipContent, {
  color: '$text-color-body',
  fontSize: '$font-size-xs',
  fontFamily: '$font-family-sans',
  backgroundColor: '$surface-color-background-subdued',

  px: '$spacing-2',
  py: '$spacing-1',

  d: 'inline-flex',
  align: 'center',
  gap: '$spacing-2',

  boxShadow: 'hsl(206 22% 8% / 5%) 0px 0px 20px 5px',
  borderRadius: '$radii-sm',
  border: '1px solid',
  borderColor: '$action-color-background-transparent-hover',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  variants: {
    hasSlot: {
      true: {
        px: '$spacing-1',
      },
    },
  },

  defaultVariants: {
    hasSlot: false,
  },
});

export const Arrow = styled(TooltipArrow, {
  fill: 'none',
});
