import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$spacing-1',
  width: '100%',
  background: '$surface-color-background-default',
  pt: '$spacing-2',
  pb: '$spacing-3',
  px: '$spacing-3',
  radii: '$radii-sm',
  boxShadow: '0px 3px 2px 0px #00000007',
  border: 'none',
});
