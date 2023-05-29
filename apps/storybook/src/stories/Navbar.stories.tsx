import { StoryObj, Meta } from '@storybook/react';
import { Navbar, NavbarProps, Stack, Text } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    pageTitle: 'Invoices',
    isDark: false,
    slot: <Text>This is a slot for anything to be placed.</Text>,
  },
  argTypes: {
    pageTitle: {
      table: {
        category: 'Text',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    slot: {
      table: {
        category: 'Modifiers',
      },
    },
    isDark: {
      table: {
        category: 'Modifiers',
      },
    },
    onThemeChange: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          align="center"
          justify="center"
          fullWidth
          css={{ h: '100vh', px: '$spacing-4' }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<NavbarProps> = {};
export const NoTitle: StoryObj<NavbarProps> = {};
NoTitle.args = {
  pageTitle: '',
  slot: (
    <Text css={{ w: '100%' }}>This is a slot for anything to be placed.</Text>
  ),
};
