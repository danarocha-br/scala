import { StoryObj, Meta } from '@storybook/react';
import { ThemeToggle, ThemeToggleProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    isDark: false,
    onThemeChange: () => console.log('change theme'),
  },
  argTypes: {
    isDark: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
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
          css={{
            h: '100vh',
            px: 200,
          }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<ThemeToggleProps> = {};
