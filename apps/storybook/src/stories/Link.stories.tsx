import { Meta, Story } from '@storybook/react';
import { Link, LinkProps, Stack } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: 'I am a link label',
    href: '/',
    target: '/',
    color: 'primary',
  },
  argTypes: {
    children: {
      table: {
        category: 'Text',
      },
    },
    href: {
      table: {
        category: 'Text',
      },
    },
    target: {
      table: {
        category: 'Modifiers',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'caption'],
      control: {
        type: 'inline-radio',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', px: 200 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<LinkProps>;

export const Variants: Story<LinkProps> = (args) => (
  <>
    <Link {...args} color="primary" />
    <Link {...args} color="secondary" />
    <Link {...args} color="caption" />
  </>
);
