import { styled } from '../../styles';
import { Text } from '../Text';

export const Container = styled('div', {});

export const Label = styled(Text, {
  defaultVariants: {
    size: 'xs',
    color: 'caption',
  },
});

export const Steps = styled('div', {
  d: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-count), 1fr)',
  gap: '$spacing-2',
  mt: '$spacing-1',
});

export const Step = styled('div', {
  h: '$spacing-1',
  borderRadius: '$radii-sm',
  bg: '$surface-color-background-hover',

  variants: {
    isActive: {
      true: {
        bg: '$feedback-color-background-success-subdued',
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
