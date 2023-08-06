import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Stack, Text } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Structure & Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: <Text>This is a box.</Text>,
    className: 'p-6 bg-neutral-400',
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
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
        <Stack align="center" justify="center" className="h-screen px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<BoxProps> = {};
