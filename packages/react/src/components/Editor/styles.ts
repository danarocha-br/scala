import { styled } from '../../styles';
import { EditorContent, BubbleMenu } from '@tiptap/react';

export const EditorContainer = styled(EditorContent, {
  width: '100%',
  padding: '$spacing-2',

  '& .c-editor': {
    color: '$text-color-body',
    fontFamily: '$font-family-sans',
    outline: 'none',

    '& p': {
      margin: '$spacing-1',
    },

    '& h1, h2, h3, h4, h5, h6': {
      my: '$spacing-2',
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
    color: '$text-color-caption',
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
          p: '$spacing-3',
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
  // boxShadow: '$elevation-medium',
  boxShadow: '0 2px 10px $colors$action-color-border-transparent',
  display: 'flex',
  gap: '$spacing-2',
  px: '$spacing-2',
  py: '$spacing-2',
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

// export const CustomButton = styled('button', {
//   all: 'unset',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   p: '2px',
//   borderRadius: '$radii-md',
//   transition: 'all',

//   '& svg': {
//     fill: '$text-color-caption',
//   },

//   '&:hover': {
//     background: '$action-color-background-transparent-hover',

//     '& svg': {
//       fill: '$text-color-body',
//     },
//   },

//   '&:focus': {
//     outline: '2px solid',
//     outlineOffset: '1px',
//     outlineColor: '$action-color-border-transparent-pressed',
//   },

//   variants: {
//     isActive: {
//       true: {
//         background: '$action-color-background-transparent-pressed',

//         '& svg': {
//           fill: '$text-color-body',
//         },
//       },
//     },
//   },

//   defaultVariants: {
//     isActive: false,
//   },
// });
