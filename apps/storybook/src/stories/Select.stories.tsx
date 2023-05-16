import { Story, Meta } from '@storybook/react';
import { Form, Select, SelectProps, Stack } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'select',
    label: 'Select an item',
    variant: 'default',
    isMulti: false,
    disabled: false,
    loading: false,
    isSearchable: true,
    isClearable: true,
    noOptionMessage: 'No options found',
    placeholder: 'Select one option',
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
    ],
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'table'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    isSearchable: {
      table: {
        category: 'Modifiers',
      },
    },
    isClearable: {
      table: {
        category: 'Modifiers',
      },
    },
    noOptionMessage: {
      table: {
        category: 'Modifiers',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 350 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SelectProps>;

export const Default: Story<SelectProps> = (args) => {
  return (
    <Form>
      <Select {...args} />
      <Select {...args} icon="business" />
    </Form>
  );
};

export const isMulti = Default.bind({});
isMulti.args = {
  isMulti: true,
};

export const TableVariant = Default.bind({});
TableVariant.args = {
  variant: 'table',
};

export const DisabledState = Default.bind({});
DisabledState.args = {
  disabled: true,
};

export const LoadingState = Default.bind({});
LoadingState.args = {
  loading: true,
};

export const HasError = Default.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};
