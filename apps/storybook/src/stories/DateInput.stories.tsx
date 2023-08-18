import { Story, Meta } from '@storybook/react';
import { DateInput, DateInputProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Start date',
    name: 'start_date',
    variant: 'default',
    locale: 'pt-BR',
    dateFormat: 'dd/MM/yyyy',
    disabled: false,
    readOnly: false,
    loading: false,
    errors: undefined,
    isClearable: true,
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[350]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<DateInputProps>;

export const OverviewDefaultVariant: Story<DateInputProps> = (args) => {
  const [inputValue, setInputValue] = useState(new Date());

  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <DateInput
        {...args}
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        icon="calendar"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};
