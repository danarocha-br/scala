import { StoryObj, Meta } from '@storybook/react';
import { Stack, StackProps, Text } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const CHILDREN = Array.from({ length: 5 }).map((_, i) => (
  <Text key={i} css={{ bg: '$froly200', py: '$2', px: '$6' }}>
    I am a row {1 + i}
  </Text>
));

export default {
  title: 'Primitives/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
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
    direction: {
      table: {
        category: 'Modifiers',
      },
      options: ['row', 'column', 'row-reverse', 'column-reverse', 'unset'],
      control: {
        type: 'inline-radio',
      },
    },
    wrap: {
      table: {
        category: 'Modifiers',
      },
      options: ['no-wrap', 'wrap', 'wrap-reverse'],
      control: {
        type: 'inline-radio',
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
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<StackProps>;

export const Default: StoryObj<StackProps> = {
  args: {
    direction: 'column',
    gap: '6',
    align: 'center',
    justify: 'center',
    fullWidth: false,
    wrap: 'no-wrap',
  },
};
