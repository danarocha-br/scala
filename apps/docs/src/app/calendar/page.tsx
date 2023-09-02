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

const CalendarDocs = () => {
  const scope = { Calendar, Stack };
  const componentProps = {
    'className?': {
      type: 'string',
      description: 'to add aditional classes when needed.',
    },
  };

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
