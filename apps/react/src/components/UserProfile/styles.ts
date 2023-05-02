import { styled } from '../../styles';

export const Trigger = styled('button', {
  // all: 'unset',
  bg: 'transparent',
  cursor: 'pointer',
  pl: '$spacing-2',
  pr: '$spacing-3',
  py: '$spacing-2',
  border: '1px solid transparent',
  borderRadius: '$radii-sm',
  transition: '$base',
  transform: 'translateX(0)',

  d: 'flex',
  align: 'center',
  gap: '$spacing-3',
  outline: 'none',

  '&:hover': {
    background: '$surface-color-background-disabled',

    '& .avatar__username': {
      transform: 'translateX(3px) scale(0.95)',
    },
  },

  '&:focus': {
    border: '1px dashed $surface-color-background-hover !important',
    background: '$action-color-background-transparent-hover',

    '& .avatar__username': {
      transform: 'translateX(3px) scale(0.95)',
    },
  },
});
