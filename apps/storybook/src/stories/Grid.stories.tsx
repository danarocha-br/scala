import { StoryObj, Meta } from '@storybook/react';
import { Grid, GridProps, Text } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const CHILDREN = Array.from({ length: 5 }).map((_, i) => (
  <Text key={i} css={{ bg: '$froly200', py: '$2', px: '$6' }}>
    I am a row {1 + i}
  </Text>
));

export default {
  title: 'Primitives/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    cols: '4',
    gap: '4',
    rows: '2',
    flow: 'row',
    align: 'start',
    justify: 'start',
    children: (
      <>
        {CHILDREN.map((tag, index) => (
          <Text key={index}>{tag}</Text>
        ))}
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    gap: {
      table: {
        category: 'Modifiers',
      },
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      control: {
        type: 'select',
      },
    },
    cols: {
      table: {
        category: 'Modifiers',
      },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
      ],
      control: {
        type: 'select',
      },
    },
    rows: {
      table: {
        category: 'Modifiers',
      },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'none',
      ],
      control: {
        type: 'select',
      },
    },
    flow: {
      table: {
        category: 'Modifiers',
      },
      options: ['row', 'column', 'row-dense', 'row-column'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      table: {
        category: 'Modifiers',
      },
      options: ['start', 'end', 'stretch', 'baseline', 'center'],
      control: {
        type: 'inline-radio',
      },
    },
    justify: {
      table: {
        category: 'Modifiers',
      },
      options: ['start', 'end', 'center', 'between'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<GridProps>;

export const Default: StoryObj<GridProps> = {};
