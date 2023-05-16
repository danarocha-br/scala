import { Story, Meta } from '@storybook/react';
import {
  Form,
  SelectCreatable,
  SelectCreatableProps,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/SelectCreatable',
  component: SelectCreatable,
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
    loadOptions: [
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
    loadOptions: {
      table: {
        category: 'Text',
      },
    },
    cacheOptions: {
      table: {
        category: 'Modifiers',
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
} as Meta<SelectCreatableProps>;

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

export const Default: Story<SelectCreatableProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };

  return (
    <Form>
      <SelectCreatable {...args} disabled={isLoading} loading={isLoading} />
      <SelectCreatable
        {...args}
        icon="business"
        disabled={isLoading}
        loading={isLoading}
        onChange={(newValue: Option) => setValue(newValue)}
        onCreateOption={handleCreate}
        value={value}
        cacheOptions
        // defaultOptions
        loadOptions={options}
      />
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
