'use client';

import React, { useState } from 'react';
import { Calendar as ScalaCalendar, Stack, Text, Tabs } from '@compasso/scala';
import { Code } from '@/components/Code';
import { PropsTable } from '@/components/PropsTable';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <Stack gap="4" className="w-[380px] px-4">
      <ScalaCalendar
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale="pt-BR"
        disabledPastDays
      />
    </Stack>
  );
};

const componentProps = {
  'className?': {
    type: 'string',
    description: 'to add additional classes when needed.',
  },
  'locale?': {
    type: 'string',
    description: 'change the locale for the calendar.',
  },
  'defaultSelected?': {
    type: 'Date',
    description: 'the default selected date in the calendar.',
  },
  selected: {
    type: 'Date | null',
    description: 'the currently selected date in the calendar.',
  },
  'minDate?': {
    type: 'Date',
    description: 'the minDate to render the calendar options.',
  },
  'maxDate?': {
    type: 'Date',
    description: 'the maxDate to render the calendar options.',
  },
  onSelect: {
    type: '(date: Date) => void',
    description: 'the callback function when a date is selected.',
  },
  'disabledDays?': {
    type: 'Date[]',
    description: 'an array of disabled dates in the calendar.',
  },
  'disabledPastDays?': {
    type: 'boolean',
    description: 'whether to disable past days in the calendar.',
  },
  'hideHelpers?': {
    type: 'boolean',
    description: 'to hide the calendar helpers.',
  },
};

const CalendarDocs = () => {
  const scope = { Calendar, Stack };

  const code = `
    <Calendar
      select="{selectedDate}"
      onSelect="{setSelectedDate}"
      locale="pt-BR"
      disabledPastDays
    />
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Calendar
      </Text>

      <Tabs.Root defaultValue="usage">
        <Tabs.List>
          <Tabs.Item label="Usage" value="usage" layoutId="docs" />
          <Tabs.Item label="Code" value="code" layoutId="docs" />
        </Tabs.List>
        <Tabs.Content value="usage">
          <Code
            code={code}
            scope={scope}
            header={`import { Calendar } from "@compasso/scala";`}
            className="pt-4"
          />
        </Tabs.Content>

        <Tabs.Content value="code">
          <PropsTable componentProps={componentProps} title="TabsRootProps" />
        </Tabs.Content>
      </Tabs.Root>
    </Stack>
  );
};

export default CalendarDocs;
