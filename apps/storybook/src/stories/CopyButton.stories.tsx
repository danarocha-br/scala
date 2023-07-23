import { StoryObj, Meta } from '@storybook/react';
import { CopyButton, CopyButtonProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    content: 'Copy text sample',
    copiedLabel: '',
  },
  argTypes: {
    content: {
      table: {
        category: 'Text',
      },
      control: {
        type: 'text',
      },
    },
    copiedLabel: {
      table: {
        category: 'Modifier',
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta<CopyButtonProps>;

export const Default: StoryObj<CopyButtonProps> = {};
export const CustomLabel: StoryObj<CopyButtonProps> = {
  args: {
    copiedLabel: 'Copied!',
  },
};
