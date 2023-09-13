import { StoryObj, Meta } from '@storybook/react';
import { Slider, SliderProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-60',
  },
} as Meta<SliderProps>;

export const Default: StoryObj<SliderProps> = {};
