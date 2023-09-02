import { StoryObj, Meta } from '@storybook/react';
import { DatePicker, DatePickerProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    placeholder: 'Pick a date',
    isClearable: true,
    disabled: false,
    loading: false,
    locale: 'en',
    disabledPastDays: false,
  },
} as Meta<DatePickerProps>;

export const Default: StoryObj<DatePickerProps> = {};
export const HasError: StoryObj<DatePickerProps> = {};
HasError.args = {
  errors: {
    message: 'Please pick a date',
  },
};
