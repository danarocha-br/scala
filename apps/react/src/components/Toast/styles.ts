import { styled } from '../../styles';
import { motion } from 'framer-motion';

export const Container = styled(motion.div, {
  fontFamily: '$font-family-sans',
  position: 'fixed',

  userSelect: 'none',
  w: 'inherit',
  h: 'auto',
  d: 'flex',
  flexDirection: 'column',
  gap: '$spacing-2',

  zIndex: '100',

  variants: {
    directionY: {
      top: {
        top: '$spacing-4',
      },
      bottom: {
        bottom: '$spacing-4',
      },
    },

    directionX: {
      left: {
        left: '$spacing-4',
      },
      right: {
        right: '$spacing-4',
      },
    },
  },

  defaultVariants: {
    directionX: 'right',
    directionY: 'top',
  },
});

export const Toast = styled(motion.div, {
  position: 'relative',
  pb: '$spacing-2',

  borderRadius: '$radii-md',
  boxShadow: '$elevation-low',
  border: '1px solid',
  borderColor: '$action-color-background-transparent-pressed',
  background: '$surface-color-background-subdued',
  // w: '100%',

  '@bp-md': {
    w: 400,
  },
});

export const Marker = styled('div', {
  w: '100%',
  h: '$spacing-1',

  bg: 'red',
  borderTopLeftRadius: '$radii-md',
  borderTopRightRadius: '$radii-md',

  variants: {
    variant: {
      info: { bg: '$interactive-color-background-subdued' },
      success: { bg: '$feedback-color-background-success-default' },
      danger: { bg: '$feedback-color-background-danger-subdued' },
      warning: { bg: '$feedback-color-background-warning-default' },
      neutral: { bg: '$surface-color-background-pressed' },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Title = styled('div', {
  color: '$text-color-body',
  fontWeight: '$font-weight-medium',
  d: 'flex',
  gap: '$spacing-2',
  justifyContent: 'space-between',

  pt: '$spacing-2',
  pb: '$spacing-1',
  px: '$spacing-2',
  position: 'relative',

  variants: {
    variant: {
      info: {
        '& svg': {
          color: '$interactive-color-background-subdued',
        },
      },
      success: {
        '& svg': {
          color: '$feedback-color-background-success-default',
        },
      },
      danger: {
        '& svg': {
          color: '$feedback-color-background-danger-default',
        },
      },
      warning: {
        '& svg': {
          color: '$feedback-color-background-warning-default',
        },
      },
      neutral: {
        '& svg': {
          color: '$text-color-caption',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Message = styled('div', {
  color: '$text-color-body-lighter',

  px: '$spacing-3',
  pt: '$spacing-2',
  pb: '$spacing-1',
});
