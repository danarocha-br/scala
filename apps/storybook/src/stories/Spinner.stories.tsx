import { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: { size: 'md' },
  argTypes: {
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['md', 'sm'],
      control: {
        type: 'inline-radio',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Medium: StoryObj<SpinnerProps> = {};
export const Small: StoryObj<SpinnerProps> = { args: { size: 'sm' } };
