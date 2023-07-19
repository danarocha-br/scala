import { styled, keyframes } from '../../styles';

import {
  Root,
  Trigger,
  Overlay,
  Content,
  Close,
  Title,
  Description,
} from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.8 },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transformOrigin: 'bottom left',
    transform: 'translate(-50%, -48%) scale(.96)',
  },

  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const ModalOverlay = styled(Overlay, {
  backgroundColor: '$color-neutral-800',
  position: 'fixed',
  inset: 0,
  left: 0,

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 100ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const ModalContent = styled(Content, {
  fontFamily: '$font-family-sans',
  backgroundColor: '$surface-color-background-default',
  borderRadius: '$radii-md',
  boxShadow: '$elevation-high',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
    animationDelay: '10ms',
  },
  '&:focus': { outline: 'none' },

  '@bp-md': {
    width: '85vw',
    height: '80%',
  },

  '@bp-xl': {
    width: '70vw',
  },
});

export const ModalTitle = styled(Title, {
  margin: 0,
  fontWeight: '$font-weight-medium',
  color: '$text-color-body-lighter',
  fontSize: '$font-size-md',
  pt: '$spacing-2',
  height: '$spacing-4',

  variants: {
    variant: {
      danger: {
        color: '$feedback-danger-color-background-default',
      },
      transactional: {},
      passive: {},
    },
  },

  defaultVariants: {
    variant: 'transactional',
  },
});

export const ModalDescription = styled(Description, {
  margin: '10px 0 20px',
  color: '$text-color-caption',
  fontSize: 15,
  lineHeight: 1.5,
  px: '$spacing-3',
});

export const ModalClose = styled(Close, {
  position: 'relative',
  right: -8,
});

export const ModalFooter = styled('footer', {
  d: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '$spacing-3',
  px: '$spacing-2',
  py: '$spacing-2',
  position: 'fixed',
  bottom: 0,
  right: '$spacing-1',
});

export const Modal = styled(Root, {});
export const ModalTrigger = Trigger;
