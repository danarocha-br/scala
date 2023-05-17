import { StoryObj, Meta } from '@storybook/react';
import { Page, PageProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url:
        '',
    },
  },
  args: {
  },
} as Meta<PageProps>;

export const Default: StoryObj<PageProps> = {};

