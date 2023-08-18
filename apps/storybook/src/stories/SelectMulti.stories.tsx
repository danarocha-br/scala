//@ts-noCheck
import { Story, Meta } from '@storybook/react';
import { Form, SelectMulti, SelectMultiProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/SelectMulti',
  component: SelectMulti,
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
    emptyMessage: 'No options found',
    onCreateOptionLabel: 'Create new',
    onCreateOption: () => '',
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
    emptyMessage: {
      table: {
        category: 'Modifiers',
      },
    },
    onCreateOptionLabel: {
      table: {
        category: 'Text',
      },
    },
    onCreateOption: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[350px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SelectMultiProps>;

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
  createOption('Four'),
];

export const Default: Story<SelectMultiProps> = (args) => {
  const [options] = useState([
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ]);

  return (
    <Form>
      <SelectMulti {...args} />
      <SelectMulti {...args} icon="business" options={options} />
    </Form>
  );
};

export const WithDefaultOptions = Default.bind({});
WithDefaultOptions.args = {
  defaultOptions: [
    {
      label: 'Option 2',
      value: 'Option 2',
    },
  ],
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

export const CreateOption: Story<SelectMultiProps> = (args) => {
  const [isLoading] = useState(false);
  const [options] = useState(defaultOptions);

  // const handleCreate = (inputValue: string) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     const newOption = createOption(inputValue);
  //     setIsLoading(false);
  //     setOptions((prev) => [...prev, newOption]);
  //     setValue(newOption);
  //   }, 1000);
  // };

  return (
    <Form>
      <SelectMulti
        {...args}
        // onChange={(newValue: Option) => setValue(newValue)}
        // onCreateOption={handleCreate}
        // value={value}
        options={options}
        loading={isLoading}
      />
      <SelectMulti
        {...args}
        icon="business"
        // onChange={(newValue: Option) => setValue(newValue)}
        // onCreateOption={handleCreate}
        // value={value}
        options={options}
        loading={isLoading}
      />
    </Form>
  );
};
