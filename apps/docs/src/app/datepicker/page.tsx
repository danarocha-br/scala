'use client';

import React from 'react';
import { DatePicker, Stack, Text, Tabs } from '@compasso/scala';
import { Code } from '@/components/Code';
import { PropsTable } from '@/components/PropsTable';

const DatePickerDocs = () => {
  const scope = { DatePicker, Stack };
  const componentProps = {
    'className?': {
      type: 'string',
      description: 'to add aditional classes when needed.',
    },
  };

  const code = `
    <Stack gap="4" className="px-4">
      <DatePicker placeholder="Pick a date"
        disabledPastDays
      />
    </Stack>
`;

  const codeIsClearable = `
    <Stack gap="4" className="px-4">
      <DatePicker placeholder="Pick a date"
        isClearable
      />
    </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        DatePicker
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
            header={`import { DatePicker } from "@compasso/scala";`}
            className="pt-4"
          />
          <Code
            code={codeIsClearable}
            scope={scope}
            header={`import { DatePicker } from "@compasso/scala";`}
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

export default DatePickerDocs;
