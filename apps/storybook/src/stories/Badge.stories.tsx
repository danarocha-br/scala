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
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A160318&mode=design&t=6xBLjdHeoRhcrzFa-1',
    },
  },
  args: {
    label: 'Badge',
    type: 'filled',
    variant: 'boxed',
    color: 'neutral',
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    className: {
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
      options: ['boxed', 'pill'],
      control: {
        type: 'inline-radio',
      },
    },
    type: {
      table: {
        category: 'Modifiers',
      },
      options: ['filled', 'inverted', 'outlined'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['neutral', 'info', 'danger', 'warning', 'on-dark'],
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
          className="h-screen px-[200px] bg-surface-color-background-default"
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<BadgeProps>;

export const Boxed: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="neutral" />
    <Badge {...args} color="info" />
    <Badge {...args} color="warning" />
    <Badge {...args} color="danger" />
    <Badge {...args} color="success" />
    <Badge {...args} color="on-dark" />
  </>
);

export const Pill: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="neutral" variant="pill" />
    <Badge {...args} color="info" variant="pill" />
    <Badge {...args} color="warning" variant="pill" />
    <Badge {...args} color="danger" variant="pill" />
    <Badge {...args} color="success" variant="pill" />
    <Badge {...args} color="on-dark" variant="pill" />
  </>
);

export const Outlined: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="neutral" type="outlined" />
    <Badge {...args} color="info" type="outlined" />
    <Badge {...args} color="warning" type="outlined" />
    <Badge {...args} color="danger" type="outlined" />
    <Badge {...args} color="success" type="outlined" />
    <Badge {...args} color="on-dark" type="outlined" />
  </>
);
