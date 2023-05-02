import { styled } from '../../styles';
import {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
} from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 11;

export const ScrollArea = styled(Root, {
  width: '100%',
  height: '100%',
  borderRadius: 4,
  overflow: 'hidden',
});

export const ScrollViewport = styled(Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

export const ScrollBar = styled(Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: '$form-color-background-subdued',
  transition: 'all 160ms ease-out',
  '&:hover': { background: '$form-color-background-disabled' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const SrollThumb = styled(Thumb, {
  flex: 1,
  background: '$surface-color-background-pressed',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const ScrollCorner = styled(Corner, {
  background: '$form-color-background-disabled',
});
