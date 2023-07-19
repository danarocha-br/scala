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
  '100%': { opacity: 0.1 },
});

// const contentShow = keyframes({
//   '0%': {
//     opacity: 0,
//     zIndex: -1,
//     transformOrigin: 'bottom left',
//     transform: 'translate(-100%, 0) scaleX(0) rotateY(100deg)',
//   },

//   '80%': {
//     zIndex: -1,
//   },

//   '100%': {
//     opacity: 1,
//     transform: 'translate(0, 0) scale(1) rotateY(0deg)',
//     zIndex: 1,
//   },
// });

export const PanelOverlay = styled(Overlay, {
  backgroundColor: '$action-color-background-primary-enabled',
  position: 'fixed',
  inset: 0,

  variants: {
    isNavigationOpen: {
      true: {
        left: 280,
      },
      false: {
        left: 0,
      },
    },
  },
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  zIndex: '$max',
});

export const PanelContent = styled(Content, {
  fontFamily: '$font-family-sans',
  backgroundColor: '$surface-color-background-subdued',
  borderTopRightRadius: '$radii-md',
  borderBottomRightRadius: '$radii-md',

  position: 'fixed',
  top: 0,
  h: '100vh',
  w: '100%',

  boxShadow: 'hsl(206 22% 7% / 15%) 10px 0px 30px -20px',
  zIndex: '$max',

  '@bp-md': {
    width: 384,
  },

  '@media (prefers-reduced-motion: no-preference)': {
    // animation: `${contentShow} 500ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
  '&:focus': { outline: 'none' },

  variants: {
    isNavigationOpen: {
      true: {
        '@bp-lg': {
          left: 280,
        },
      },
      false: {
        left: 0,
      },
    },
  },
});

export const PanelTitle = styled(Title, {
  margin: 0,
  fontWeight: '$font-weight-medium',
  color: '$text-color-body-lighter',
  fontSize: '$font-size-lg',
});

export const PanelDescription = styled(Description, {
  margin: '10px 0 20px',
  color: '$text-color-caption',
  fontSize: '$font-size-sm',
});

export const PanelClose = styled(Close, {
  position: 'relative',
});

export const PanelFooter = styled('footer', {
  py: '$spacing-3',
  px: '$spacing-3',
  bg: '$surface-color-background-subdued',

  d: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '$spacing-3',

  position: 'fixed',
  bottom: 0,
  zIndex: 9,

  boxShadow: '$elevation-medium',

  w: '93.333%',

  '@bp-sm': {
    w: '95.333%',
  },

  '@bp-md': {
    width: 352,
    maxWidth: 352,
  },
});

export const Panel = Root;
export const PanelTrigger = Trigger;
