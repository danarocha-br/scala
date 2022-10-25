import { StoryObj, Meta } from '@storybook/react';
import { Box, StepperHorizontal, StepperHorizontalProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/StepperHorizontal',
  component: StepperHorizontal,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    count: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box css={{ p: '$6' }}>{Story()}</Box>;
    },
  ],
  argTypes: {
    count: {
      table: {
        category: 'Modifiers',
      },
    },
    currentStep: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<StepperHorizontalProps>;

export const Default: StoryObj<StepperHorizontalProps> = {};
export const Completed: StoryObj<StepperHorizontalProps> = {
  args: {
    currentStep: 4,
  },
};
