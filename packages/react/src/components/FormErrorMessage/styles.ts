import { styled } from '../../styles';

export const Container = styled('div', {
  fontSize: '$font-size-xs',
  fontFamily: '$font-family-sans',

  pb: '$spacing-1',
  pt: '$spacing-2',
  px: '$spacing-3',

  position: 'relative',
  top: -4,
  zIndex: '1',

  color: '$text-color-danger',
  bg: '$color-froly-100',
  border: '1px solid $color-froly-200',

  [`.dark-theme &`]: {
    color: '$color-neutral-200',
    bg: '#f1786f20',
    border: '1px solid #f1786f10',
  },

  variants: {
    variant: {
      inside: {
        borderBottomLeftRadius: '$radii-md',
        borderBottomRightRadius: '$radii-md',
      },
      outside: {
        mt: '$spacing-2',
        borderRadius: '$radii-md',
      },
    },
  },

  defaultVariants: {
    variant: 'inside',
  },
});
