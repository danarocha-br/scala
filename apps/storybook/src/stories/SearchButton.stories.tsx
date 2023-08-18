import { StoryObj, Meta } from '@storybook/react';
import { SearchButton, SearchButtonProps, Stack } from '@compasso/scala';
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
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[400px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SearchButtonProps>;

export const Default: StoryObj<SearchButtonProps> = {};
