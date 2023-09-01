'use client';

import React from 'react';
import { Tabs, Stack, Text } from '@compasso/scala';
import { Code } from '@/components/Code';
import { PropsTable } from '@/components/PropsTable';

const TabsDocs = () => {
  const scope = { Tabs, Stack };
  const componentRootProps = {
    defaultValue: {
      type: 'string',
      description: 'indicate what should be the current opened tab.',
    },
    'className?': {
      type: 'string',
      description: 'to add aditional classes when needed.',
    },
  };

  const componentItemProps = {
    label: {
      type: 'string',
      description: 'the title for the tab.',
    },
    'layoutId?': {
      type: 'string',
      description:
        'use only when you have multiple tabs in one page and need to remove the animation between them.',
    },
    'className?': {
      type: 'string',
      description: 'to add aditional classes when needed.',
    },
  };

  const code = `
  <Stack gap="4" className="px-4 w-full">
    <Tabs.Root defaultValue={1}>
      <Tabs.List>
        <Tabs.Item label="Item 1" value={1} />
        <Tabs.Item label="Item 2" value={2} />
      </Tabs.List>

      <Tabs.Content value={1}>Content 1</Tabs.Content>
      <Tabs.Content value={2}>Content 2</Tabs.Content>
    </Tabs.Root>

  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Tabs
      </Text>

      <Tabs.Root defaultValue="usage">
        <Tabs.List>
          <Tabs.Item label="Usage" value="usage" layoutId="docs" />
          <Tabs.Item label="Code" value="code" layoutId="docs" />
        </Tabs.List>
        <Tabs.Content value="usage">
          <Text as="h3">Components</Text>
          {/* <Text as="p">
            The Tabs component is composed of several sub-components: - Root:
            The root component of the tabs. It wraps all other components. -
            List: The component that contains all tab items. - Item: Represents
            a single tab item. - Content: The component that renders the content
            of the tabs.
          </Text> */}

          <Code
            code={code}
            scope={scope}
            header={`import { Tabs } from "@compasso/scala";`}
            className="pt-4"
          />
        </Tabs.Content>

        <Tabs.Content value="code">
          <PropsTable
            componentProps={componentRootProps}
            title="TabsRootProps"
          />
          <PropsTable
            componentProps={componentItemProps}
            title="TabsItemProps"
          />
        </Tabs.Content>
      </Tabs.Root>
    </Stack>
  );
};

export default TabsDocs;
