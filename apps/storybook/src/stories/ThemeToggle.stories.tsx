import { Meta, Story } from '@storybook/react';
import { ThemeToggle, ThemeToggleProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

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
        <Stack align="center" justify="center" className="h-screen px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: Story<ThemeToggleProps> = (args) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeToggle
      {...args}
      isDark={isDark}
      onThemeChange={() => setIsDark(!isDark)}
    />
  );
};
