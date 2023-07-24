import { styled } from '../../styles';

export const Button = styled('button', {
  color: '$action-color-text-transparent-enabled',
  background: '$action-color-background-transparent-enabled',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  border: 'none',
  outlineColor: 'transparent',
  transition: '$base',
  w: '28px',
  h: '28px',
  p: '0',
  borderRadius: '$radii-sm',

  '&:hover:not([disabled])': {
    background: '$action-color-background-transparent-hover',
  },

  '&:focus': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: 'transparent',
  },

  '&:disabled': {
    opacity: '0.65',
    cursor: 'not-allowed',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },
});

export const IconClipboard = styled('path', {
  fill: '$action-color-background-primary-enabled',
});
export const IconCheck = styled('path', {
  fill: '$feedback-color-background-success-subdued',
});
