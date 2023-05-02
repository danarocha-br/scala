import { styled } from '../../styles';
import { Root } from '@radix-ui/react-separator';

export const Container = styled(Root, {
  backgroundColor: '$surface-color-background-subdued',
  my: '$spacing-2',

  '&[data-orientation=horizontal]': { height: 4, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 4 },
});
