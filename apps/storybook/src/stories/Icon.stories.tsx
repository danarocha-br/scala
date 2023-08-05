import { Story, Meta } from '@storybook/react';
import { Grid, Icon, IconProps, iconPath, Text, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const icons = Object.keys(iconPath);

export default {
  title: 'Primitives/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786',
    },
  },
  args: {
    name: 'plus',
    color: 'body-lighter',
    label: 'add',
    size: 'md',
  },
  argTypes: {
    name: {
      table: {
        category: 'Modifiers',
      },
      options: [...icons],
      control: {
        type: 'select',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'body',
        'body-lighter',
        'caption',
        'success',
        'danger',
        'warning',
        'on-dark',
        'on-light',
        'current',
      ],
      control: {
        type: 'select',
      },
    },
    label: {
      table: {
        category: 'Text',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IconProps>;

export const IconSet: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="10"
    align="stretch"
    justify="between"
    gap="3"
    className="w-full p-4"
  >
    {icons.map((icon) => (
      <Stack
        key={icon}
        direction="column"
        align="center"
        gap="2"
        className="bg-surface-color-background-subdued p-1 rounded-sm"
      >
        <Icon {...args} name={icon} />
        <Text
          as="p"
          size="xs"
          color="caption"
          className="bg-surface-color-background-default w-full text-center"
        >
          {icon}
        </Text>
      </Stack>
    ))}
  </Grid>
);

export const SingleIcon: Story<IconProps> = (args) => <Icon {...args} />;
SingleIcon.parameters = {
  layout: 'centered',
};
