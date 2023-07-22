import { transparentize } from 'polished';
import { styled } from '../../styles';

export const Container = styled('button', {
  color: '$text-color-caption',
  fontFamily: '$font-family-sans',
  border: '1px solid',
  borderColor: `${transparentize(0.5, '#D5DBDB')}`,
  borderRadius: '$radii-sm',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justify: 'space-between',

  width: '100%',
  px: '$spacing-3',
  py: '$spacing-2',
  pr: '$spacing-2',

  transition: '$base',
  outlineColor: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$action-color-background-transparent-hover',
  },

  '&:focus': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: '$action-color-background-transparent-hover',
  },

  ['.dark-theme &']: {
    borderColor: `${transparentize(0.5, '#252e30')}`,
  },
});
