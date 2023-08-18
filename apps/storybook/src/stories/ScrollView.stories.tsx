import { StoryObj, Meta } from '@storybook/react';
import { ScrollView, ScrollViewProps, Stack, Text } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `Lorem ipsum ${a.length - i}`
);

export default {
  title: 'Structure & Layout/ScrollView',
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
      <Text className="mr-6" key={tag}>
        {tag}
      </Text>
    )),
  },
  argTypes: {
    className: {
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
        <Stack align="center" justify="center" className="h-screen p-[100px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<ScrollViewProps> = {};
