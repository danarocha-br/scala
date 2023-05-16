import { StoryObj, Meta } from '@storybook/react';
import { ScrollView, ScrollViewProps, Stack, Text } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `Lorem ipsum ${a.length - i}`
);

export default {
  title: 'Components/ScrollView',
  component: ScrollView,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: TAGS.map((tag) => (
      <Text css={{ mr: '$spacing-6' }} key={tag}>
        {tag}
      </Text>
    )),
  },
  argTypes: {
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', p: 100 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<ScrollViewProps> = {};
