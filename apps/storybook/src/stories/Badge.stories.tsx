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
      options: ['default', 'pill'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'info', 'danger', 'warning', 'on-dark'],
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

export const Default: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" />
    <Badge {...args} color="info" />
    <Badge {...args} color="warning" />
    <Badge {...args} color="danger" />
    <Badge {...args} color="success" />
    <Badge {...args} color="on-dark" />
  </>
);

export const Pill: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" variant="pill" />
    <Badge {...args} color="info" variant="pill" />
    <Badge {...args} color="warning" variant="pill" />
    <Badge {...args} color="danger" variant="pill" />
    <Badge {...args} color="success" variant="pill" />
    <Badge {...args} color="on-dark" variant="pill" />
  </>
);

export const Outlined: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" outlined />
    <Badge {...args} color="info" outlined />
    <Badge {...args} color="warning" outlined />
    <Badge {...args} color="danger" outlined />
    <Badge {...args} color="success" outlined />
    <Badge {...args} color="on-dark" outlined />
  </>
);
