import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Badge',
    outlined: false,
    variant: 'default',
    color: 'primary',
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
    label: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'pill'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'danger', 'warning', 'on-dark'],
      control: {
        type: 'inline-radio',
      },
    },
    outlined: {
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
} as Meta<BadgeProps>;

export const Default: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" />
    <Badge {...args} color="secondary" />
    <Badge {...args} color="warning" />
    <Badge {...args} color="danger" />
    <Badge {...args} color="on-dark" />
  </>
);

export const Pill: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" variant="pill" />
    <Badge {...args} color="secondary" variant="pill" />
    <Badge {...args} color="warning" variant="pill" />
    <Badge {...args} color="danger" variant="pill" />
    <Badge {...args} color="on-dark" variant="pill" />
  </>
);

export const Outlined: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" outlined />
    <Badge {...args} color="secondary" outlined />
    <Badge {...args} color="warning" outlined />
    <Badge {...args} color="danger" outlined />
    <Badge {...args} color="on-dark" outlined />
  </>
);
