/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { Badge, Stack, Text, RadioGroup } from '@compasso/scala';
import { Code } from '@/components/Code';

const BadgeDocs = () => {
  const [variant, setVariant] = useState('boxed');

  const scope = { Badge, Stack };

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
            label: 'boxed',
            value: 'boxed',
          },
          {
            label: 'pill',
            value: 'pill',
          },
        ]}
        //@ts-ignore
        onChange={(e) => setVariant(e)}
      />
    </Stack>
  );

  const codeVariants = `
  <Stack gap="4">
    <Badge label="Neutral" variant="${variant}" type="filled" color="neutral"/>
    <Badge label="Info" variant="${variant}" type="filled" color="info"/>
    <Badge label="Success" variant="${variant}" type="filled" color="success"/>
    <Badge label="Danger" variant="${variant}" type="filled" color="danger"/>
    <Badge label="Warning" variant="${variant}" type="filled" color="warning"/>
    <Badge label="On dark" variant="${variant}" type="filled" color="on-dark"/>
  </Stack>
`;

  const codeVariantsOutlined = `
  <Stack gap="4">
    <Badge label="Neutral" variant="${variant}" type="inverted" color="neutral"/>
    <Badge label="Info" variant="${variant}" type="inverted" color="info"/>
    <Badge label="Success" variant="${variant}" type="inverted" color="success"/>
    <Badge label="Danger" variant="${variant}" type="inverted" color="danger"/>
    <Badge label="Warning" variant="${variant}" type="inverted" color="warning"/>
    <Badge label="On dark" variant="${variant}" color="on-dark"/>
  </Stack>
`;

  const codeVariantsInverted = `
  <Stack gap="4">
    <Badge label="Neutral" variant="${variant}" type="outlined" color="neutral"/>
    <Badge label="Info" variant="${variant}" type="outlined" color="info"/>
    <Badge label="Success" variant="${variant}" type="outlined" color="success" />
    <Badge label="Danger" variant="${variant}" type="outlined" color="danger" />
    <Badge label="Warning" variant="${variant}" type="outlined" color="warning" />
    <Badge label="On dark" variant="${variant}" type="outlined" color="on-dark" />
  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Badge
      </Text>
      <Text as="p" size="lg">
        Badge is a small and distinct UI element that often provides
        complementary information or highlights a certain status. They are
        generally used to draw attention to specific content or to show a count,
        such as the number of unread messages.
      </Text>

      <Text as="h2" className="pt-4">
        Properties & Attributes
      </Text>

      <Text as="h3">Variants</Text>
      <ul>
        <Text as="li">
          <b>Boxed:</b> used for state and text, not for numbers.
        </Text>

        <Text as="li">
          <b>Pill:</b> used only for numbers.
        </Text>
      </ul>
      <Text as="h3">Types</Text>
      <ul>
        <Text as="li">
          <b>Filled:</b> most commonly used as they are more subtle in
          appearance.
        </Text>
        <Text as="li">
          <b>Inverted:</b> used when you need to draw more attention such as
          errors.
        </Text>
        <Text as="li">
          <b>Outlined:</b> used for when you need to remain informative but
          don't need draw much attention.
        </Text>
      </ul>
      <Code
        code={codeVariants}
        scope={scope}
        header={`import { Badge } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Code
        code={codeVariantsOutlined}
        scope={scope}
        header={`import { Badge } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />
      <Code
        code={codeVariantsInverted}
        scope={scope}
        header={`import { Badge } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        Usage
      </Text>
      {/* <Text as="p">
        Clarity: The badge's content should be clear and concise. Avoid long
        strings of text or large numbers. Contrast: Ensure the badge's color
        provides a good contrast against its background so it remains readable.
        Accessibility: Consider users with visual impairments; make sure the
        badge's size and contrast are adequate. Avoid Overuse: Using too many
        badges can overwhelm users. Use them sparingly and only when necessary.
      </Text> */}
    </Stack>
  );
};

export default BadgeDocs;
