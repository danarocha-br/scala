import { styled } from '../../styles';
import { transparentize } from 'polished';

export const Container = styled('nav', {
  w: '100%',
  h: 53,
  pl: '$spacing-5',
  pr: '$spacing-4',

  position: 'sticky',
  top: 0,
  zIndex: 99,

  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  bg: '$surface-color-background-default',
  borderBottom: '1px solid',
  borderColor: `${transparentize(0.5, '#D5DBDB')}`,

  ['.dark-theme &']: {
    borderColor: `${transparentize(0.7, '#252e30')}`,
    bg: '$surface-color-background-pressed',
  },
});
