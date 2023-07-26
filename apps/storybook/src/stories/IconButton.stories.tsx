import { Meta, Story } from '@storybook/react';
import { IconButton, IconButtonProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=643%3A172274&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    label: 'add',
    icon: 'plus',
    size: 'md',
    variant: 'primary',
    loading: false,
    disabled: false,
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
        options: ['primary', 'secondary', 'danger'],
        control: {
          type: 'radio-inline',
        },
      },
    },
    size: {
      table: {
        category: 'Modifiers',
        options: ['xs', 'sm', 'md', 'lg'],
        control: {
          type: 'radio-inline',
        },
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" fullWidth css={{ h: '100vh' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<IconButtonProps>;

export const PrimaryVariant: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="secondary" />
    <IconButton {...args} color="danger" />
  </>
);
PrimaryVariant.args = {
  variant: 'primary',
};
export const SecondaryVariant: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="secondary" />
    <IconButton {...args} color="danger" />
  </>
);
SecondaryVariant.args = {
  variant: 'secondary',
};
export const Sizes: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} size="xs" />
    <IconButton {...args} size="sm" />
    <IconButton {...args} size="md" />
  </>
);
Sizes.args = {
  variant: 'secondary',
};
