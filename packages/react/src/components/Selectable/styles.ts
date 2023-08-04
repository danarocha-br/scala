import { styled } from '../../styles';
import { Button as AccessibleButton } from '@ariakit/react';

export const Container = styled(AccessibleButton, {
  color: '$text-color-body-lighter',
  backgroundColor: '$action-color-background-transparent-hover',
  border: 'none',
  borderRadius: '$radii-sm',
  outline: 'none',
  outlineColor: '$action-color-background-transparent-hover',
  cursor: 'pointer',

  display: 'flex',
  gap: '$spacing-2',
  alignItems: 'center',
  px: '$spacing-2',
  height: '34px',
  transition: '$base',

  '&:hover': {
    color: '$text-color-body',
    backgroundColor: '$interactive-color-background-disabled',
  },

  '&:focus, &[data-focus-visible]': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: '$action-color-background-transparent-hover',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },

  '&[aria-disabled="true"]': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },

  variants: {
    isActive: {
      true: {
        color: '$text-color-body',
      },
    },
  },
});
