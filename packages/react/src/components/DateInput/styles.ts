import { cva } from 'class-variance-authority';
import 'react-datepicker/dist/react-datepicker.css';

//TODO: refactor to tailwind
// export const DateContainer = styled(Container, {
//   '& .react-datepicker': {
//     fontFamily: '$font-family-sans',
//     background: '$surface-color-background-default',
//     borderColor: '$action-color-background-transparent-pressed',

//     '&__triangle': {
//       '&::before': {
//         borderBottom:
//           '1px solid $action-color-background-transparent-pressed !important',
//       },
//     },

//     '&-popper': {
//       zIndex: '3 !important',
//     },

//     '&__header': {
//       textTransform: 'capitalize',
//       background: '$interactive-color-background-transparent',
//       border: 'none',

//       '&__dropdown': {
//         py: '$spacing-1',
//         d: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '$spacing-4',
//       },
//     },

//     '&__navigation-icon': {
//       '&::before': {
//         borderColor: '$color-neutral-300',
//       },
//     },

//     '&__year-read-view--down-arrow': {
//       display: 'none',
//     },

//     '&__year-dropdown': {
//       bg: '$surface-color-background-subdued',
//       borderColor: '$action-color-background-transparent-pressed',
//       boxShadow: '$elevation-low',

//       '&-container': {
//         bg: 'transparent',
//         px: '$spacing-3',
//         borderRadius: '$radii-sm',
//         border: '2px solid $surface-color-background-subdued',

//         '&:hover': {
//           bg: '$interactive-color-background-disabled',
//         },
//       },
//     },

//     '&__year': {
//       '&-option': {
//         '&--selected_year': {
//           color: '$text-color-on-dark',
//           bg: '$interactive-color-background-enabled',
//         },

//         '&:hover': {
//           bg: '$interactive-color-background-disabled',
//         },
//       },
//     },

//     '&__day': {
//       color: '$text-color-body',
//       fontWeight: '$font-weight-medium',

//       '&:hover': {
//         bg: '$interactive-color-background-transparent',
//       },

//       '&--selected, &--keyboard-selected': {
//         color: '$text-color-on-dark',
//         bg: '$interactive-color-background-enabled',

//         '&:hover': {
//           bg: '$interactive-color-background-hover !important',
//         },
//       },

//       '&--today': {
//         color: '$interactive-color-background-hover',
//         bg: 'transparent',
//         borderRadius: '$radii-sm',
//         border: '2px solid $interactive-color-background-hover',
//         '&:hover': {
//           color: '$text-color-on-dark',
//           bg: '$interactive-color-background-hover',
//         },
//       },
//     },

//     '&__today-button': {
//       color: '$text-color-body',
//       border: 'none',
//       bg: '$surface-color-background-default',
//     },

//     '&__close-icon': {
//       '&::after': {
//         bg: '$interactive-color-background-enabled',
//         position: 'absolute',
//         right: '$spacing-2',
//         bottom: 9,
//         fontSize: '16px',
//       },

//       '&:hover': {
//         '& + input': {
//           color: '$text-color-on-dark !important',
//         },
//       },
//     },
//   },

//   '& .date-picker__custom-icon': {
//     color: '$text-color-body !important',
//   },

//   '&:hover': {
//     '& .date-picker__custom-icon': {
//       color: '$text-color-on-dark !important',
//     },
//   },
// });

// export const DateInput = cva(DatePicker, {
//   // ...BaseInputStyles,
// });
