import { Content, Root } from '@radix-ui/react-collapsible';
import { transparentize } from 'polished';
import { styled, keyframes } from '../../styles';

const open = keyframes({
  from: { width: 0, opacity: 1 },
  to: { width: 0, opacity: 1 },
  // to: { width: 280, opacity: 1 },
});

const close = keyframes({
  from: { width: 0, opacity: 1 },
  to: { width: 0, opacity: 1 },
  // to: { width: 0, opacity: 0 },
});

export const Anchor = styled('a', {
  color: '$text-color-body',
  fontFamily: '$font-family-sans',
  textDecoration: 'none',
  opacity: 0.65,

  d: 'inline-flex',
  align: 'center',
  gap: '$spacing-3',
  px: '$spacing-2',
  py: '$spacing-2',
  borderRadius: '$radii-sm',

  w: '100%',
  position: 'relative',
  transition: '$base',

  outline: '1px solid transparent',

  '& > span': {
    position: 'relative',
    top: '-2px',
    transform: 'translateX(0px)',
    transition: '$slow',
  },

  '&:focus-visible': {
    opacity: 1,
    outline: '1px dashed',
    outlineOffset: '2px',
    outlineColor: '$surface-color-background-pressed',

    [`.dark-theme &`]: {
      outlineColor: '$color-neutral-700',
    },
  },

  variants: {
    isActive: {
      true: {
        color: '$text-color-body',
        fontWeight: '$font-weight-medium',
        background: '$color-royal-50',
        opacity: 1,

        '& > svg': {
          color: '$brand-color-primary',
        },

        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          background: '$interactive-color-background-disabled',

          '& > svg': {
            color: '$feedback-color-background-danger-subdued',
          },
        },
      },
    },

    hasShortcut: {
      true: {},
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.4,

        '&::after': {
          content: 'PRO',
          position: 'absolute',
          right: '$spacing-4',

          color: '$text-color-on-dark',
          backgroundColor: '$action-color-background-primary-enabled',
          fontSize: '$font-size-xs',
          py: '$spacing-1',
          px: '$spacing-2',
          borderRadius: '$radii-sm',

          [`.dark-theme &`]: {
            color: '$action-color-text-primary-enabled',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      isActive: true,
      hasShortcut: true,
      css: {
        fontWeight: '$regular',
      },
    },

    {
      disabled: false,
      css: {
        '&:hover': {
          color: '$text-color-body',
          bg: '$action-color-background-transparent-disabled',
          opacity: 1,

          '& svg': {
            fill: '$brand-color-primary',
          },

          '& > span': {
            transform: 'translateX(4px)',
          },
        },
      },
    },

    {
      hasShortcut: true,
      disabled: false,
      css: {
        '&:hover': {
          '&::after': {
            content: 'attr(data-title)',
            position: 'absolute',
            right: '$spacing-2',

            color: '$text-color-caption',
            fontSize: '$font-size-xs',
            py: '$spacing-1',
            px: '$spacing-2',
            borderRadius: '$radii-sm',
          },
        },
      },
    },
  ],

  defaultVariants: {
    isActive: false,
    hasShortcut: false,
    disabled: false,
  },
});

export const Container = styled('aside', {
  h: '100%',
  d: 'block',
  bg: 'transparent',
});

export const CollapsibleContent = styled(Content, {
  overflow: 'hidden',
  d: 'flex',
  flexDirection: 'column',
  justify: 'space-between',
  px: '$spacing-2',
  h: 'calc(100% - 60px)',

  '&[data-state="open"]': {
    animation: `${open} 400ms ease-in`,
    backgroundColor: '$surface-color-background-default',
    [`.dark-theme &`]: {
      bg: '$surface-color-background-pressed',
    },
  },
  '&[data-state="closed"]': {
    animation: `${close} 200ms ease-in`,
  },
});

export const CollapsibleRoot = styled(Root, {
  height: '100vh',
  position: 'sticky',
  top: 0,

  '&[data-state="open"]': {
    bg: '$surface-color-background-default',
    borderRight: '1px solid',
    borderColor: `${transparentize(0.7, '#D5DBDB')}`,
    minWidth: 280,

    [`.dark-theme &`]: {
      bg: '$surface-color-background-pressed',
    },
  },

  ['.dark-theme &']: {
    borderColor: `${transparentize(0.7, '#252e30')}`,
  },
});

export const Header = styled('div', {
  px: '$spacing-2',
  pb: 4,
  pt: '$spacing-2',
  h: 53,

  d: 'flex',
  justify: 'space-between',
  align: 'center',

  '&[data-state="open"]': {
    backgroundColor: '$surface-color-background-default',

    [`.dark-theme &`]: {
      bg: '$surface-color-background-pressed',
    },
  },

  variants: {
    isClosed: {
      true: {
        borderBottom: '1px solid',
        borderColor: `${transparentize(0.5, '#D5DBDB')}`,
        backgroundColor: '$surface-color-background-default',

        ['.dark-theme &']: {
          borderColor: `${transparentize(0.7, '#252e30')}`,
          bg: '$surface-color-background-pressed',
        },
      },
    },
  },

  defaultVariants: {
    isClosed: false,
  },
});

export const Footer = styled('footer', {
  px: '$spacing-2',
  py: '$spacing-2',

  d: 'flex',
  justify: 'space-between',
  align: 'center',
  w: '100%',
});

export const ToogleButton = styled('button', {
  all: 'unset',
  w: 'auto',

  p: '$spacing-2',
  pb: '2px',
  borderRadius: '$radii-md',
  transition: '$base',
  border: '1px solid transparent',

  '&:hover': {
    bg: '$action-color-background-transparent-hover',
  },

  '&:focus': {
    bg: '$action-color-background-transparent-disabled',
    border: '1px dashed $surface-color-background-hover',
  },
});

export const Svg = styled('svg', {
  transform: 'scale(1.1)',

  '& .fill': {
    fill: '$loading-color-background-subdued',
  },
  '& .outline': {
    fill: '$text-color-body',
  },
});

export const MobileMenuBar = styled('div', {
  position: 'fixed',
  bottom: 0,
  zIndex: '$100',

  w: '100%',
  h: '$10',

  bg: '$interactive-color-background-enabled',
});
