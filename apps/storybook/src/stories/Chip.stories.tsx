import { StoryObj, Meta } from '@storybook/react';
import { Chip, ChipProps, Icon } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Standard',
    removable: false,
    children: null,
    onRemove: () => '',
  },
} as Meta<ChipProps>;

export const Default: StoryObj<ChipProps> = {};
export const Removable: StoryObj<ChipProps> = {};
Removable.args = {
  removable: true,
};
export const WithSlot: StoryObj<ChipProps> = {};
WithSlot.args = {
  children: <Icon name="user" label="user" />,
};
