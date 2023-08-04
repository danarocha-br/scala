import { StoryObj, Meta, Story } from '@storybook/react';
import {
  Avatar,
  Form,
  Selectable,
  SelectableButtonProps,
  SelectableMenuProps,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Selectable',
  component: Selectable.Button,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    // children: <Stack>some</Stack>,
    icon: 'user',
    label: 'Add user',
    isActive: false,
    disabled: false,
  },
} as Meta<SelectableButtonProps>;

export const Button: StoryObj<SelectableButtonProps> = {};

export const MenuSingleValue: Story<SelectableMenuProps> = (args) => {
  return (
    <Form>
      <Selectable.Menu {...args} />
    </Form>
  );
};
MenuSingleValue.args = {
  name: 'select',
  isMulti: false,
  disabled: false,
  loading: false,
  isSearchable: true,
  isClearable: true,
  noOptionMessage: 'No options found',
  placeholder: 'Select one option',
  options: [
    { label: 'Option 1', value: 'Option 1', icon: 'status' },
    { label: 'Option 2 dhui sauiasd ', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ],
};

export const MenuMultiValue = MenuSingleValue.bind({});
MenuMultiValue.args = {
  name: 'select',
  isMulti: true,
  disabled: false,
  loading: false,
  isSearchable: true,
  isClearable: false,
  noOptionMessage: 'No options found',
  placeholder: 'Select one option',
  options: [
    {
      label: 'Option 1',
      value: 'Option 1',
      slot: <Avatar username="Dana Rocha" size="sm" />,
    },
    { label: 'Option 2 dhui sauiasd ', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ],
};
