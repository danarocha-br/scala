import { styled } from '../../styles';

export const Container = styled('li', {
  fontFamily: '$font-family-sans',
  fontSize: '$font-size-md',
  fontWeight: '$font-weight-regular',
  listStyle: 'none',
  cursor: 'pointer',
  transition: '$base',
  display: 'inline-flex',

  '& button': {
    all: 'unset',
  },

  '&:hover': {
    '& .breadcrumb__item--icon': {
      opacity: 1,
      transform: 'translateX(4px)',
    },
  },

  '& a, & button': {
    color: '$text-color-caption',
    borderRadius: '$radii-sm',
    padding: '$spacing-1 $spacing-2',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: '$action-color-background-transparent-hover',
    },

    '&:focus': {
      outline: '2px solid',
      outlineOffset: '2px',
      outlineColor: '$action-color-border-transparent-pressed !important',
    },
  },

  '& .breadcrumb__item--icon': {
    opacity: 0,
    transform: 'translateX(-2px)',
    transition: 'opacity, transform 0.3s ease-in-out',
  },

  '&:not(:last-child):after': {
    content: '/',
    color: '$text-color-caption',
    opacity: 0.5,
    mt: '$spacing-1',
    ml: '$spacing-2',
    mr: '$spacing-1',
  },

  variants: {
    isActive: {
      true: {
        '& a, & button': {
          color: '$text-color-body',
        },
      },
    },
  },
});
