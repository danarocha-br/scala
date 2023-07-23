import { CSS, styled } from '../../styles';

export type StackProps = {
  as?: React.ElementType;
  css?: CSS;
} & React.ComponentProps<typeof Stack>;

export const Stack = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
      unset: {
        flexDirection: 'unset',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      'no-wrap': {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      0: {
        gap: 0,
      },
      1: {
        gap: '$spacing-1',
      },
      2: {
        gap: '$spacing-2',
      },
      3: {
        gap: '$spacing-3',
      },
      4: {
        gap: '$spacing-4',
      },
      5: {
        gap: '$spacing-5',
      },
      6: {
        gap: '$spacing-6',
      },
      7: {
        gap: '$spacing-7',
      },
      8: {
        gap: '$spacing-8',
      },
      9: {
        gap: '$spacing-9',
      },
      10: {
        gap: '$spacing-10',
      },
      11: {
        gap: '$spacing-11',
      },
      12: {
        gap: '$spacing-12',
      },
      13: {
        gap: '$spacing-13',
      },
    },
    fullWidth: {
      true: {
        w: '100%',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    wrap: 'noWrap',
    gap: 2,
    fullWidth: false,
  },
});

Stack.displayName = 'Stack';
