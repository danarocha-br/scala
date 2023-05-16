import { Story, Meta } from '@storybook/react';
import { NumberInput, NumberInputProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Total cost',
    name: 'cost',
    type: 'text',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
    errors: undefined,
    allowNegative: false,
    decimalSeparator: ',',
    decimalScale: 2,
    prefix: '$',
    thousandSeparator: '.',
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
    actionLabel: {
      table: {
        category: 'Text',
      },
    },
    allowNegative: {
      table: {
        category: 'Text',
      },
    },
    prefix: {
      table: {
        category: 'Text',
      },
    },
    thousandSeparator: {
      table: {
        category: 'Text',
      },
    },
    decimalScale: {
      table: {
        category: 'Text',
      },
    },
    type: {
      table: {
        category: 'Modifiers',
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
    hasAction: {
      table: {
        category: 'Modifiers',
      },
    },
    actionIcon: {
      table: {
        category: 'Modifiers',
      },
    },
    onAction: {
      table: {
        category: 'Function',
      },
    },
    errors: {
      table: {
        category: 'Modifiers',
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
    readOnly: {
      table: {
        category: 'State',
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
} as Meta<NumberInputProps>;

export const OverviewDefaultVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="invoice"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('Cost settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const Loading = States.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = States.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = States.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const HasErrors = OverviewDefaultVariant.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const Default: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <NumberInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
