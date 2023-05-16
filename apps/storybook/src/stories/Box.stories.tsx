import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Stack, Text } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Box',
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
    css: {
      color: '$color-text-body',
      background: '$surface-color-background-pressed',
      p: '$spacing-10',
    },
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
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
        <Stack
          align="center"
          justify="center"
          css={{
            h: '100vh',
            px: 200,
          }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<BoxProps> = {};
