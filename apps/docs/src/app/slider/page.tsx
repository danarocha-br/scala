'use client';

import React from 'react';
import { Tabs, Stack, Text, Slider } from '@compasso/scala';
import { Code } from '@/components/Code';
import { PropsTable } from '@/components/PropsTable';

const SliderDocs = () => {
  const scope = { Slider, Stack };
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
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Slider
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
            header={`import { Slider } from "@compasso/scala";`}
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

export default SliderDocs;
