import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: (
      <>
        <p>This is a box.</p>
      </>
    ),
    css: {
      color: '$text-body',
      bg: '$neutral700',
      p: '$10',
    },
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

export const Default: StoryObj<BoxProps> = {};
