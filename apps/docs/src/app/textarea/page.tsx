'use client';

import React, { useState } from 'react';
import { Tabs, Stack, Text, Textarea } from '@compasso/scala';
import { Code } from '@/components/Code';
import { PropsTable } from '@/components/PropsTable';

const TextareaDocs = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setInputValue(e.target.value);
  };

  const scope = { Textarea, Stack };
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

  const code = `
  <Stack gap="4" className="px-4 w-full">
    <Textarea
      label="Description"
      name="description"
      placeholder="Be descriptive..."
      cols={1}
      rows={5}
      disabled={false}
      readOnly={false}
      loading={false}
    />
  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Textarea
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
            header={`import { Textarea } from "@compasso/scala";`}
            className="pt-4"
          />
        </Tabs.Content>

        <Tabs.Content value="code">
          <PropsTable componentProps={componentRootProps} title="Props" />
        </Tabs.Content>
      </Tabs.Root>
    </Stack>
  );
};

export default TextareaDocs;
