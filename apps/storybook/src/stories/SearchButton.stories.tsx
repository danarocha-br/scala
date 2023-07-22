import { StoryObj, Meta } from '@storybook/react';
import { SearchButton, SearchButtonProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/SearchButton',
  component: SearchButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Search...',
    shortcut: '⌘ K',
    onClick: () => '',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    shortcut: {
      table: {
        category: 'Text',
      },
    },
  },
} as Meta<SearchButtonProps>;

export const Default: StoryObj<SearchButtonProps> = {};
