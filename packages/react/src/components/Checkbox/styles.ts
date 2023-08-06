import { cva } from 'class-variance-authority';

export const container = cva(['flex', 'flex-col', 'gap-2']);

export const checkboxWrapper = cva(
  [
    'mr-2',
    'w-[20px]',
    'h-[20px]',
    'border-2',
    'border-form-color-border-default',
    'rounded-sm',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-action-color-border-transparent-pressed',
  ],
  {
    variants: {
      hasError: {
        true: ['border-form-color-border-error'],
      },
    },

    defaultVariants: {
      hasError: false,
    },
  }
);

export const checkboxWrapperTask = cva([
  'relative',
  'inline-block',
  'w-[20px]',
  'h-[20px]',
  'mr-2',
  'border-2',
  'border-form-color-border-default',
  'rounded-sm',

  'before:content-[""]',
  'before:bg-feedback-color-background-success-default',
  'before:absolute',
  'before:left-1/2',
  'before:top-1/2',
  'before:m-[-14px 0px 0px -12px]',
  'before:w-[20px]',
  'before:h-[20px]',
  'before:rounded-circle',
  'before:scale-0',

  'after:content-[""]',
  'after:absolute',
  'after:left-1',
  'after:top-[7px]',
  'after:w-[3px]',
  'after:h-[2px]',
  'after:rounded-[3px]',
  'after:shadow-[0 -18px 0 var(--feedback-color-background-success-default), 12px -12px 0 var(--feedback-color-background-success-default), 18px 0 0 var(--feedback-color-background-success-default), 12px 12px 0 var(--feedback-color-background-success-default), 0 18px 0 var(--feedback-color-background-success-default), -12px 12px 0 var(--feedback-color-background-success-default), -18px 0 0 var(--feedback-color-background-success-default), -12px -12px 0 var(--feedback-color-background-success-default)]',
  'after:scale-0',
]);

export const root = cva(
  [
    'group',
    'flex',
    'items-center',
    'gap-2',
    'relative',
    '[data-disabled=true]:cursor-not-allowed',
    '[data-disabled=true]:opacity-60',
  ],
  {
    variants: {
      variant: {
        regular: [
          '[&_>_label]:pointer-events-none',
          '[&_>_label]:align-middle',
        ],
        task: [
          'transition-all',
          'translate-0',
          '[&_>_label]:relative',
          '[&_>_label]:transition-color',
          '[&_>_label]:duration-[.3s]',
          '[&_>_label:after]:content-[""]',
          '[&_>_label:after]:absolute',
          '[&_>_label:after]:top-[54%]',
          '[&_>_label:after]:left-0',
          '[&_>_label:after]:w-0',
          '[&_>_label:after]:h-1',
          '[&_>_label:after]:bg-text-color-body-lighter',
        ],
      },

      hasError: {
        true: [],
      },
      // variants: {
      //   variant: {
      //     regular: {
      //       '&:hover:not([disabled])': {
      //         [`& ${CheckboxWrapper}`]: {
      //           '& svg': {
      //             '& path': {
      //               strokeDashoffset: 0,
      //             },
      //           },
      //         },
      //       },

      //       '&[data-disabled]': {
      //         [`& ${CheckboxWrapper}`]: {
      //           borderColor: '$form-color-border-default',
      //           '& svg': {
      //             '& path': {
      //               fill: '$form-color-border-default',
      //             },
      //           },
      //         },
      //       },

      //       '&[data-state="checked"]': {
      //         [`& ${CheckboxWrapper}`]: {
      //           borderColor: '$interactive-color-border-enabled',

      //           '& svg': {
      //             '& path': {
      //               fill: '$interactive-color-border-enabled',
      //             },
      //             '& polyline': {
      //               strokeDashoffset: 0,
      //             },
      //           },
      //         },
      //       },
      //     },

      //     task: {
      //

      //       '&:hover:not([disabled]):not([data-state="checked"])': {
      //         [`& ${CheckboxWrapperTask}`]: {
      //           borderColor: '$feedback-color-background-success-default',
      //         },
      //       },

      //       '&[data-state="checked"]': {
      //         [`& ${CheckboxWrapperTask}`]: {
      //           borderColor: 'transparent',

      //           '& svg': {
      //             transform: 'scale(1.1)',
      //             transition: 'all .4s ease',
      //             transitionDelay: '.1s',
      //           },

      //           '&::before': {
      //             transform: 'scale(1.1)',
      //             opacity: 0,
      //             transition: 'all .3s ease',
      //           },

      //           '&::after': {
      //             transform: 'scale(1.5)',
      //             opacity: 0,
      //             transition: 'all .6s ease',
      //           },
      //         },
      //         '& label': {
      //           color: '$text-color-body-lighter',

      //           '&::after': {
      //             w: '100%',
      //             transition: 'all .4s ease',
      //           },
      //         },
      //       },
      //     },
      //   },
    },
    defaultVariants: {
      variant: 'regular',
      hasError: false,
    },
  }
);

export const svg = cva([
  'absolute',
  'top-[4.2px]',
  'left-[-0.1px]',
  '[&_path]:fill-none',
  '[&_path]:stroke-interactive-color-background-enabled',
  '[&_path]:stroke-2',
  'transition-all',
  'duration-[.6s]',
  'ease',
]);

// '& polyline': {
//   fill: 'none',
//   stroke: '#FFF',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   strokeDasharray: '18px',
//   strokeDashoffset: '18px',
//   transition: 'all, .3s ease',
//   transform: 'scale(.85) translateX(2px) translateY(1px)',
//   ml: '$spacing-1',
// },

export const svgTask = cva([
  'relative',
  'scale-0',
  'fill-none',
  '[&_polyline]:stroke-2',
  '[&_polyline]:stroke-feedback-color-background-success-default',
]);

export const fieldset = cva(
  ['flex', 'flex-col', 'gap-3', 'outline-none', 'border-none', 'p-0'],
  {
    variants: {
      variant: {
        regular: [],
        task: ['w-full'],
      },
      defaultVariants: {
        variant: 'regular',
      },
    },
  }
);

// '&:focus-visible': {
//   '&[aria-activedescendant]': {
//     boxShadow: '0 0 0 3px var(--form-color-background-disabled',)
//     borderRadius: '$radii-md',
//   },
// },
