import { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps, Stack } from '@e-scala/react';
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
        <Stack align="center" justify="center" css={{ h: '100vh', px: 200 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Medium: StoryObj<SpinnerProps> = {};
export const Small: StoryObj<SpinnerProps> = { args: { size: 'sm' } };
