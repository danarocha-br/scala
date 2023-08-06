//TODO: refactor to tailwind
import { styled } from '../../styles';
import { EditorContent, BubbleMenu } from '@tiptap/react';
import {
  Content as PopoverContent,
  Arrow as PopoverArrow,
} from '@radix-ui/react-popover';
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../Dropdown/styles';

export const EditorContainer = styled(EditorContent, {
  width: '100%',

  '& .c-editor': {
    color: '$text-color-body',
    fontFamily: '$font-family-sans',
    outline: 'none',

    '& p': {
      my: '$spacing-3',
    },

    '& h1, h2, h3, h4, h5, h6': {
      my: '$spacing-3',
    },

    '&__code-block ': {
      position: 'relative',

      '& select': {
        position: 'absolute',
        right: '0.5rem',
        top: '0.5rem',
      },
    },
  },

  '& .ProseMirror p.is-empty::before': {
    color: '$text-color-body-lighter',
    content: 'attr(data-placeholder)',
    float: 'left',
    height: 0,
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      ghost: {},

      form: {
        '& .c-editor': {
          border: '1px solid $colors$form-color-border-default',
          borderRadius: '$radii-md',
          px: '$spacing-3',
          py: '$spacing-1',
          overflow: 'scroll',
          borderTopRightRadius: '$radii-md',
          borderBottomRightRadius: '$radii-md',

          '&::-webkit-scrollbar': {
            width: '$spacing-2',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '$form-color-background-pressed',
            borderRadius: '$radii-pill',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'form',
  },
});

export const EditorMenu = styled(BubbleMenu, {
  background: '$surface-color-background-default',
  border: '1px solid',
  borderColor: '$action-color-border-transparent-enabled',
  // boxShadow: '0 2px 10px $colors$action-color-border-transparent-enabled',
  display: 'flex',
  alignItems: 'center',
  gap: '$spacing-2',
  px: '$spacing-2',
  py: '$spacing-1',
  borderRadius: '$radii-sm',
});

// export const EditorFloatingMenu = styled(FloatingMenu, {
//   background: 'transparent',
//   display: 'flex',
//   gap: '$spacing-2',
//   borderRadius: '$radii-sm',

//   '& button': {
//     unset: 'all',
//   },
// });

export const CustomButton = styled('button', {
  color: '$text-color-body-lighter',
  fontFamily: '$font-family-sans',
  fontWeight: '$font-weight-light',
  fontSize: '$font-size-md',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '2px',
  borderRadius: '$radii-sm',
  border: 'none',
  transition: '$base',
  backgroundColor: '$action-color-text-transparent-hover',
  outlineColor: 'transparent',

  w: '$spacing-4',
  h: '$spacing-4',

  '& svg': {
    fill: '$text-color-body-lighter',
  },

  '&:hover': {
    background: '$action-color-background-transparent-hover',

    '& svg': {
      fill: '$text-color-body',
    },
  },

  '&:focus': {
    outline: '2px solid',
    outlineOffset: '.5px',
    outlineColor: '$action-color-border-secondary-pressed',
  },

  variants: {
    isActive: {
      true: {
        color: '$action-color-text-primary-enabled',
        background: '$action-color-background-primary-enabled',

        '& svg': {
          fill: '$action-color-text-primary-enabled',
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

export const CustomPopoverContent = styled(PopoverContent, {
  backgroundColor: '$surface-color-background-default',
  borderRadius: '$radii-md',
  boxShadow: '$elevation-low',
  p: '$spacing-2',
});

export const CustomInput = styled('input', {
  all: 'unset',
  color: '$text-color-body',
  fontFamily: '$font-family-sans',
  fontSize: '$font-size-md',
  outline: 'none',
  border: 'none',
  outlineColor: 'transparent',
  borderRadius: '$radii-sm',

  '&::placeholder': {
    color: '$text-color-caption',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '500ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const CustomPopoverArrow = styled(PopoverArrow, {
  fill: '$surface-color-background-default',
  color: '$text-color-on-dark',
  [`.dark-theme &`]: {
    color: '$text-color-on-light',
  },
});
