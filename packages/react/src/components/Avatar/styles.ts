import { styled } from '../../styles';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const Container = styled(AvatarPrimitive.Root, {
  fontFamily: '$font-family-sans',
  textTransform: 'uppercase',

  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  verticalAlign: 'middle',

  overflow: 'hidden',
  userSelect: 'none',

  variants: {
    variant: {
      circle: {
        borderRadius: '$radii-circle',
      },
      square: {
        borderRadius: '$radii-sm',
      },
    },

    size: {
      sm: {
        fontSize: '$font-size-xs',
        w: '$spacing-4',
        h: '$spacing-4',
      },

      md: {
        fontSize: '$font-size-sm',
        w: '$spacing-5',
        h: '$spacing-5',
      },

      lg: {
        fontSize: '$font-size-md',
        width: '$spacing-6',
        h: '$spacing-6',
      },
    },
  },

  defaultVariants: {
    variant: 'circle',
    size: 'md',
  },
});

export const Image = styled(AvatarPrimitive.Image, {
  w: '100%',
  h: '100%',

  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Fallback = styled(AvatarPrimitive.Fallback, {
  fontSize: 'inherit',
  fontWeight: '$font-weight-medium',

  w: '100%',
  h: '100%',
  d: 'flex',
  align: 'center',
  justify: 'center',

  variants: {
    loading: {
      true: {
        color: '$text-color-body',
        background: '$loading-color-background-subdued',
      },
    },
  },

  defaultVariants: {
    loading: false,
  },
});
