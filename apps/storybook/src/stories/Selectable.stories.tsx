import { StoryObj, Meta } from '@storybook/react';
import { Selectable, SelectableProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Selectable',
  component: Selectable,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    // children: <Stack>some</Stack>,
    icon: 'user',
    label: 'Add user',
    isActive: false,
    disabled: false,
  },
} as Meta<SelectableProps>;

export const Default: StoryObj<SelectableProps> = {};
