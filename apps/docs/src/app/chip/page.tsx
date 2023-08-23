'use client';

import React from 'react';
import { Chip, Stack, Text, Avatar, Icon } from '@compasso/scala';
import { Code } from '@/components/Code';

const ChipDocs = () => {
  const scope = { Chip, Stack, Avatar, Icon };

  const codeVariants = `
  <Stack gap="4">
    <Chip label="Standard" />
    <Chip label="Removable" removable />
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
        header={`import { Chip } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h3">With Slots (children)</Text>
      <Code
        code={codeSlots}
        scope={scope}
        header={`import { Chip } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default ChipDocs;
