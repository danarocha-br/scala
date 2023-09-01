'use client';

import React, { useState } from 'react';
import { Chip, Stack, Text, Avatar, Icon, RadioGroup } from '@compasso/scala';
import { Code } from '@/components/Code';

const ChipDocs = () => {
  const [color, setColor] = useState('neutral');
  const scope = { Chip, Stack, Avatar, Icon };

  const slotColors = (
    <Stack direction="column" gap="1" fullWidth className="">
      <Text size="sm" weight="semibold" color="caption">
        Colors:
      </Text>
      <RadioGroup
        name="colors"
        value={color}
        className="scale-90"
        options={[
          {
            label: 'neutral',
            value: 'neutral',
          },
          {
            label: 'highlight',
            value: 'highlight',
          },
        ]}
        //@ts-ignore
        onChange={(e) => setColor(e)}
      />
    </Stack>
  );

  const codeVariants = `
  <Stack gap="4">
    <Chip label="Standard" color="${color}" />
    <Chip label="Removable" color="${color}" removable />
  </Stack>
`;

  const codeMaxWidth = `
  <Stack gap="4">
    <Chip label="Very long label goes here" color="${color}" hasMaxWidth />
    <Chip label="Very long label goes here" color="${color}" removable hasMaxWidth />
  </Stack>
`;

  const codeSlots = `
  <Stack gap="4">
    <Chip label="With avatar">
      <Avatar username="John Smith" />
    </Chip>
    <Chip label="With icon">
      <Icon name="user" label="icon" />
    </Chip>
  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Chip
      </Text>
      <Text as="p" size="lg">
        context
      </Text>

      <Text as="h2" className="pt-4">
        Properties & Attributes
      </Text>

      <Text as="h3">Variants</Text>
      <ul>
        <Text as="li">.</Text>
      </ul>

      <Code
        code={codeVariants}
        scope={scope}
        slot={slotColors}
        header={`import { Chip } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h3">With Slots (children)</Text>
      <Code
        code={codeSlots}
        scope={scope}
        slot={slotColors}
        header={`import { Chip } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h3">Has max-width</Text>
      <Code
        code={codeMaxWidth}
        scope={scope}
        slot={slotColors}
        header={`import { Chip } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default ChipDocs;
