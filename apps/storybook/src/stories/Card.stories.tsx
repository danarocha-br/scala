import { StoryObj, Meta } from '@storybook/react';
import { Card, CardProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Text } from '@compasso/scala';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: <Text>This is a Callout content.</Text>,
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          align="center"
          justify="center"
          fullWidth
          className="h-screen px-4"
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
