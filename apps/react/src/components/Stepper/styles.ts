import { styled } from '../../styles';

export const Menu = styled('ul', {
  all: 'unset',
  fontFamily: '$font-family-sans',

  d: 'flex',
  fd: 'column',

  pointerEvents: 'none',

  w: '100px',
});

export const MenuItem = styled('li', {
  all: 'unset',
  fontFamily: '$font-family-sans',
  color: '$text-color-body-lighter',
  whiteSpace: 'nowrap',

  '&::after': {
    content: '',
    position: 'absolute',
    left: '$spacing-2',
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '$form-color-border-default',
    transition: '$base',
  },

  '&:not(:last-child)': {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '12px',
      mt: '$spacing-2',
      w: '2px',
      h: '$spacing-5',
      background: '$form-color-border-default',
      transition: '$base',
    },
  },

  '&:first-child': {
    mt: '$spacing-4',
  },

  '& a': {
    all: 'unset',
    cursor: 'pointer',
    mb: '$spacing-3',

    color: '$text-color-body',
    fontWeight: '$font-weight-medium',

    d: 'inline-block',
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: '$base',
    ml: '$spacing-5',

    '&:hover': {
      color: '$interactive-color-background-subdued',

      '&::after': {
        bg: '$interactive-color-background-subdued',
      },
    },
  },

  variants: {
    isActive: {
      true: {
        '& a': {
          color: '$interactive-color-background-subdued',
        },
        '&::after': {
          bg: '$interactive-color-background-subdued',
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

export const BackButton = styled('a', {
  all: 'unset',
  fontFamily: '$font-family-sans',

  cursor: 'pointer',
  fontWeight: '$font-weight-medium',

  d: 'flex',
  alignItems: 'center',
  justifyItems: 'center',

  gap: '$spacing-2',

  '& div': {
    position: 'relative',
    d: 'flex',
    alignItems: 'center',
    justifyItems: 'center',

    w: '$spacing-5',
    h: '$spacing-5',
    borderRadius: '50%',
    background: '$interactive-color-background-subdued',
  },

  '& span': {
    d: 'inline-block',
    color: '$text-color-caption',
    marginLeft: '$spacing-2',
    opacity: 0,
    transform: 'translateX(-20px)',
    transition: 'all .2s ease',
  },

  '&:hover': {
    '& span': {
      color: '$text-color-body',
    },
  },
});

export const Container = styled('div', {
  position: 'relative',

  '&:hover': {
    w: 'auto',

    [`& ${Menu}`]: {
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'auto',
    },

    [`& ${MenuItem}`]: {
      mb: '$spacing-4',

      '&::after': {
        transform: 'translateY(6px)',
      },

      '& a': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },

    [`& ${BackButton}`]: {
      '& span': {
        transform: 'translateX(0)',
        opacity: 1,
      },
    },
  },

  variants: {
    isActive: {
      true: {
        '&:hover': {
          [`& ${MenuItem}`]: {
            '&::after': {
              bg: '$interactive-color-background-enabled',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
