import { styled, keyframes } from '../../styles';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(15px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-15px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-15px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(15px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  fontFamily: '$font-family-sans',
  background: '$surface-color-background-default',
  borderRadius: '$radii-sm',
  boxShadow:
    '0px -7px 20px 0px #00000010, 0px 6.3px 8.5px 0px #00000000, 0px 30px 48px 0px #00000026',

  w: '100%',
  minWidth: 200,
  p: '$spacing-1',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '500ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'currentColor',
  color: '$text-color-on-dark',
  [`.dark-theme &`]: {
    color: '$text-color-on-light',
  },
});

const itemStyles = {
  all: 'unset',
  color: '$text-color-body-lighter',
  fontSize: '$font-size-sm',
  fontWeight: '$font-weight-regular',
  textAlign: 'left',
  borderRadius: '$radii-sm',
  border: '1px dashed transparent',

  height: '$spacing-5',
  px: '$spacing-3',
  d: 'flex',
  align: 'center',

  cursor: 'pointer',
  transition: '$fast',
  outline: 'none',
  userSelect: 'none',

  '&:hover': {
    color: '$text-color-body !important',
    background: '$interactive-color-background-default !important',
    border: '1px dashed transparent !important',

    [`.dark-theme &`]: {
      background: '$color-royal-500 !important',
    },
  },

  '&[data-disabled]': {
    color: '$text-color-caption',
    cursor: 'not-allowed !important',
    pointerEvents: 'none',
  },

  '&:focus': {
    color: '$text-color-body !important',
    background: '$interactive-color-text-enabled !important',
    border: '1px dashed $interactive-color-background-disabled',
    outline: 'none',
  },

  '& > a': {
    all: 'unset',
    d: 'flex',
    w: '100%',
    justify: 'space-between',
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});

export const RightSlot = styled('div', {
  color: '$text-color-caption',
  fontSize: '$font-size-sm',

  ':focus > &': {
    color: '$text-color-body',
  },
  '[data-disabled] &': {
    color: '$action-color-background-transparent-hover',
  },
});

export const DropdownSeparator = styled(DropdownMenuPrimitive.Separator, {
  bg: '$surface-color-background-hover',
  h: 1,
  my: '$spacing-2',
  position: 'relative',
});
