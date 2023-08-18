import { Meta, Story } from '@storybook/react';
import { Link, LinkProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A195578&mode=design&t=QcKO9NKDxvGimjvK-1',
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
        <Stack align="center" justify="center" className="h-screen px-[200px]">
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
