import { cva } from 'class-variance-authority';

export const editorContainer = cva(
  [
    'w-full',
    '[&_.c-editor]:text-text-color-body',
    '[&_.c-editor]:font-sans',
    '[&_.c-editor]:outline-none',
    '[&_.c-editor_p]:my-3',
    '[&_.c-editor_h1]:my-3',
    '[&_.c-editor_h2]:my-3',
    '[&_.c-editor_h3]:my-3',
    '[&_.c-editor_h4]:my-3',
    '[&_.c-editor_h5]:my-3',
    '[&_.c-editor_h6]:my-3',
    // '[.c-editor_.c-editor__code-block]:relative',
    // '[.c-editor_.c-editor__code-block_select]:absolute',
    // '[.c-editor_.c-editor__code-block_select]:right-[0.5rem]',
    // '[.c-editor_.c-editor__code-block_select]:top-[0.5rem]',

    '[&_.ProseMirror_p.is-empty]:before:color-text-color-body-lighter',
    '[&_.ProseMirror_p.is-empty]:before:content-[attr(data-placeholder)]',
    '[&_.ProseMirror_p.is-empty]:before:float-left',
    '[&_.ProseMirror_p.is-empty]:before:h-0',
    '[&_.ProseMirror_p.is-empty]:before:pointer-events-none',
  ],

  {
    variants: {
      variant: {
        ghost: [],

        form: [
          '[&_.c-editor]:border',
          '[&_.c-editor]:border-form-color-border-default',
          '[&_.c-editor]:rounded-md',
          '[&_.c-editor]:px-3',
          '[&_.c-editor]:py-1',
          '[&_.c-editor]:overflow-scroll',
          '[&_.c-editor]:rounded-tr-md',
          '[&_.c-editor]:rounded-br-md',
          '[&_.c-editor::-webkit-scrollbar]:w-2',
          '[&_.c-editor::-webkit-scrollbar-track]:bg-transparent',
          '[&_.c-editor::-webkit-scrollbar-thumb]:bg-form-color-background-pressed',
          '[&_.c-editor::-webkit-scrollbar-thumb]:rounded-pill',
        ],
      },
    },
    defaultVariants: {
      variant: 'form',
    },
  }
);

export const editorMenu = cva([
  'bg-surface-color-background-default',
  'border',
  'border-action-color-border-transparent-enabled',
  'flex',
  'items-center',
  'gap-2',
  'px-2',
  'py-1',
  'rounded-sm',
]);

// export const EditorFloatingMenu = styled(FloatingMenu, {
//   background: 'transparent',
//   display: 'flex',
//   gap: '$spacing-2',
//   borderRadius: '$radii-sm',

//   '& button': {
//     unset: 'all',
//   },
// });

export const customButton = cva(
  [
    'text-text-color-body-lighter',
    'font-sans',
    'font-light',
    'text-md',
    'bg-action-color-text-transparent-hover',
    'cursor-pointer',
    'flex',
    'items-center',
    'justify-center',
    'rounded-sm',
    'border-none',
    'transition-all',
    'outline-transparent',
    'w-4',
    'h-4',

    '[&_svg]:fill-text-color-body-lighter',

    'focus:outline-2',
    'focus:outline-offset-[.5px]',
    'focus:outline-action-color-border-transparent-pressed',
  ],
  {
    variants: {
      isActive: {
        true: [
          'text-action-color-text-primary-enabled',
          'bg-action-color-background-primary-enabled',
          '[&_svg]:fill-text-color-on-dark',

          'hover:bg-action-color-background-primary-hover',
        ],
        false: [
          'hover:bg-action-color-background-transparent-hover',
          'hover:[&_svg]:fill-text-color-body',
        ],
      },
    },

    defaultVariants: {
      isActive: false,
    },
  }
);

export const popoverContent = cva([
  'bg-surface-color-background-default',
  'rounded-md',
  'p-2',
  'shadow-low',
]);

export const customInput = cva([
  'text-text-color-body',
  'font-sans',
  'text-md',
  'outline-none',
  'border-none',
  'outline-transparent',
  'rounded-sm',

  'placeholder:text-text-color-caption',

  'motion-safe:duration-500',
  'motion-safe:ease-[cubic-bezier(0.16, 1, 0.3, 1)]',
  'motion-safe:will-change-[transform, opacity]',
  'motion-safe:data-[state=open]:data-[side=top]:animate-[slide-up-and-fade]',
  'motion-safe:data-[state=open]:data-[side=right]:animate-[slide-right-and-fade]',
  'motion-safe:data-[state=open]:data-[side=left]:animate-[slide-left-and-fade]',
  'motion-safe:data-[state=open]:data-[side=down]:animate-[slide-down-and-fade]',
]);

export const popoverArrow = cva([
  'fill-background-color-default',
  'text-text-color-on-dark',
  'data-[mode-dark]:text-text-color-on-light',
]);
