import { StoryObj, Meta } from '@storybook/react';
import { Stack, Stepper, StepperProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    backHref: '/',
    backLabel: 'Back',
    items: [
      {
        href: '/',
        title: 'Step 1',
        isActive: true,
      },
      {
        href: '/',
        title: 'Step 2',
      },
      {
        href: '/',
        title: 'Step 3',
      },
    ],
  },
  argTypes: {
    backHref: {
      table: {
        category: 'Text',
      },
    },
    backLabel: {
      table: {
        category: 'Text',
      },
    },
    items: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<StepperProps>;

export const Default: StoryObj<StepperProps> = {};
