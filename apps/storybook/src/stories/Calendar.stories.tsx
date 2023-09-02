import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    locale: 'en',
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-96">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CalendarProps>;

export const Default: Story<CalendarProps> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <Calendar {...args} selected={selectedDate} onSelect={setSelectedDate} />
  );
};

export const Locale = Default.bind({});
Locale.args = {
  locale: 'pt-BR',
};

export const DisabledPastDays = Default.bind({});
DisabledPastDays.args = {
  disabledPastDays: true,
};
