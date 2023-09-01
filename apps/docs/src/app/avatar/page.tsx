'use client';

import React, { useState } from 'react';
import { Avatar, Stack, Text, RadioGroup } from '@compasso/scala';
import { Code } from '@/components/Code';

const AvatarDocs = () => {
  const [variant, setVariant] = useState('circle');

  const scope = { Avatar, Stack };

  const slotVariants = (
    <Stack direction="column" gap="1" fullWidth className="">
      <Text size="sm" weight="semibold" color="caption">
        Variants:
      </Text>
      <RadioGroup
        name="variants"
        value={variant}
        className="scale-90"
        options={[
          {
            label: 'circle',
            value: 'circle',
          },
          {
            label: 'square',
            value: 'square',
          },
        ]}
        //@ts-ignore
        onChange={(e) => setVariant(e)}
      />
    </Stack>
  );

  const codeVariants = `
  <Stack gap="4" align="center">
    <Avatar username="John Smith" variant="${variant}" size="lg" />
    <Avatar username="John Smith" variant="${variant}" imageURL="https://source.unsplash.com/ew_Ou6oiQ2c" imageALT="user avatar" size="lg" />
  </Stack>
`;
  const codeVariantsWUsername = `
  <Stack gap="4" align="center">
    <Avatar username="John Smith" variant="${variant}" size="lg" showUsername />
    <Avatar username="John Smith" variant="${variant}" imageURL="https://source.unsplash.com/ew_Ou6oiQ2c" imageALT="user avatar" size="lg" showUsername />
  </Stack>
`;
  const codeSizes = `
  <Stack gap="4" align="center">
    <Avatar username="John Smith" size="sm" showUsername />
    <Avatar username="John Smith" size="md" showUsername />
    <Avatar username="John Smith" size="lg" showUsername />
  </Stack>
`;
  const codeColors = `
  <Stack gap="4" align="center">
    <Avatar username="John Smith" size="lg" bgColor="bg-royal-400"  />
    <Avatar username="John Smith" size="lg" bgColor="bg-macaroni-200" initialsColor="black" />
    <Avatar username="John Smith" size="lg" bgColor="bg-forest-400"  />
  </Stack>
`;
  const codeLoading = `
  <Stack gap="4" align="center">
    <Avatar username="John Smith" size="lg" loading  />
    <Avatar username="John Smith" size="lg" showUsername loading />
  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Avatar
      </Text>
      <Text size="lg">some test</Text>

      <Text as="h2" className="pt-4">
        Variants
      </Text>

      <Text as="h3">Circle</Text>

      <Text>
        Contained buttons are used for highlighting important actions within a
        page or workflow. Use Primary sparingly, as overuse can cause confusion
        to a user.
      </Text>

      <Text as="h3">Square</Text>

      <Text>
        Use this style for things that either don’t need emphasis (e.g. “Cancel”
        action in modals).
      </Text>

      <Code
        code={codeVariants}
        scope={scope}
        header={`import { Avatar } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Code
        code={codeVariantsWUsername}
        scope={scope}
        header={`import { Avatar } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        Sizes
      </Text>
      <Code
        code={codeSizes}
        scope={scope}
        header={`import { Avatar } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        Custom colors
      </Text>
      <Code
        code={codeColors}
        scope={scope}
        header={`import { Avatar } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        Loading state
      </Text>
      <Code
        code={codeLoading}
        scope={scope}
        header={`import { Avatar } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default AvatarDocs;
