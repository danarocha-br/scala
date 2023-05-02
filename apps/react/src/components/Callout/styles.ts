import { styled } from '../../styles';

export const Header = styled('header', {
  fontSize: '$font-size-md',
  fontWeight: '$font-weight-medium',
  borderTopRightRadius: '$radii-md',

  d: 'flex',
  alignItems: 'center',
  gap: '$spacing-2',
  w: '100%',
  h: '$spacing-4',
  py: '$spacing-1',
  position: 'relative',

  [`.dark-theme &`]: {
    color: '$text-color-on-light',
  },

  '& h5': {
    all: 'unset',
    px: '$spacing-4',
  },

  variants: {
    variant: {
      info: {
        color: '$interactive-color-text-enabled',
        background: '#d2e7feb3',

        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          background: '#405fed1c',
        },
      },
      success: {
        color: '$feedback-color-background-success-default',
        background: '$color-forest-100',

        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          bg: '#37b1351a',
        },
      },
      danger: {
        color: '$feedback-color-background-danger-default',
        bg: '$color-froly-100',

        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          bg: '#f1786f17',
        },
      },
      warning: {
        color: '$feedback-color-background-warning-default',
        bg: '#fddeba60',

        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          bg: '#fcc88d1f',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export const Container = styled('div', {
  fontFamily: '$font-family-sans',
  w: '100%',
  d: 'flex',

  borderRadius: '$radii-md',
  border: '1px solid',
  borderColor: '$action-color-border-transparent-enabled !important',

  fontSize: '$font-size-sm !important',

  '& .callout__content': {
    px: '$spacing-4',
    pb: '$spacing-2',
  },
});

export const Marker = styled('div', {
  w: '$spacing-1',
  h: 'auto',
  borderTopLeftRadius: '$radii-md',
  borderBottomLeftRadius: '$radii-md',

  variants: {
    variant: {
      info: {
        background: '$color-royal-300',

        [`.dark-theme &`]: {
          background: '$color-royal-500',
        },
      },
      success: {
        bg: '$feedback-color-background-success-default',
      },
      danger: {
        bg: '$feedback-color-background-danger-default',
      },
      warning: {
        bg: '$feedback-color-background-warning-default',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});
