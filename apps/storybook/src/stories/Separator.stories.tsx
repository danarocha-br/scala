import { StoryObj, Meta } from '@storybook/react';
import { Separator, SeparatorProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Structure & Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: { orientation: 'horizontal' },
  argTypes: {
    orientation: {
      table: {
        category: 'Modifiers',
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '50vh', w: '50vw' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SeparatorProps>;

export const Default: StoryObj<SeparatorProps> = {};
