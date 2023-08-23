"use client";

import React, { useState } from "react";
import { Button, Stack, Text, RadioGroup } from "@compasso/scala";
import { Code } from "@/components/Code";

const ButtonDocs = () => {
  const [variant, setVariant] = useState("contained");
  const [variantForIcons, setVariantForIcons] = useState("contained");

  const scope = { Button, Stack };

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
            label: "contained",
            value: "contained",
          },
          {
            label: "transparent",
            value: "transparent",
          },
        ]}
        onChange={(e) => setVariant(e)}
      />
    </Stack>
  );

  const slotVariantsWithIcons = (
    <Stack direction="column" gap="1" fullWidth className="">
      <Text size="sm" weight="semibold" color="caption">
        Variants:
      </Text>
      <RadioGroup
        name="variants"
        value={variantForIcons}
        className="scale-90"
        options={[
          {
            label: "contained",
            value: "contained",
          },
          {
            label: "transparent",
            value: "transparent",
          },
        ]}
        onChange={(e) => setVariantForIcons(e)}
      />
    </Stack>
  );

  const codeVariants = `
  <Stack gap="4">
    <Button label="Primary" variant="${variant}" color="primary" />
    <Button label="Secondary" variant="${variant}" color="secondary" />
    <Button label="Danger" variant="${variant}" color="danger" />
  </Stack>
`;
  const codeSizes = `
  <Stack gap="4" align="center">
    <Button label="Primary" size="xs" />
    <Button label="Primary"  size="sm"/>
    <Button label="Primary"  size="md"/>
    <Button label="Primary"  size="lg"/>
  </Stack>
`;
  const codeIcons = `
  <Stack gap="4" align="center">
    <Button label="Add new" size="xs"  icon="plus" variant="${variantForIcons}" />
    <Button label="Add new" size="sm" icon="plus" variant="${variantForIcons}" />
    <Button label="Add new" size="md" icon="plus" variant="${variantForIcons}" />
    <Button label="Add new" size="lg" icon="plus" variant="${variantForIcons}" />
  </Stack>
`;
  const codeAnimation = `
    <Stack gap="4">
      <Button label="Primary" variant="${variant}" color="primary" animateOnHover />
      <Button label="Secondary" variant="${variant}" color="secondary" animateOnHover />
      <Button label="Danger" variant="${variant}" color="danger" animateOnHover />
    </Stack>
`;
  const codeStates = `
    <Stack gap="4">
      <Button label="Disabled" disabled />
      <Button label="Loading" loading />
    </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="leading-tight page-title">
        Button
      </Text>
      <Text size="lg">
        Buttons are used primarily for actions, such as “Add”, “Close”,
        “Cancel”, or “Save”. Plain buttons, which look similar to links, are
        used for less important or less commonly used actions, such as “view
        shipping settings”.
      </Text>

      <Text as="h2" className="pt-4">
        Variants
      </Text>

      <Text as="h3">Contained</Text>

      <Text>
        Contained buttons are used for highlighting important actions within a
        page or workflow. Use Primary sparingly, as overuse can cause confusion
        to a user.
      </Text>

      <Text as="h3">Transparent</Text>

      <Text>
        Use this style for things that either don’t need emphasis (e.g. “Cancel”
        action in modals).
      </Text>

      <Code
        code={codeVariants}
        scope={scope}
        header={`import { Button } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        Sizes
      </Text>

      <Code
        code={codeSizes}
        scope={scope}
        header={`import { Button } from "@compasso/scala";`}
      />

      <Text as="h2" className="pt-4">
        Icons
      </Text>

      <Code
        code={codeIcons}
        scope={scope}
        header={`import { Button } from "@compasso/scala";`}
        slot={slotVariantsWithIcons}
      />

      <Text as="h2" className="pt-4">
        Animation on hover
      </Text>

      <Code
        code={codeAnimation}
        scope={scope}
        header={`import { Button } from "@compasso/scala";`}
        slot={slotVariants}
        className="pt-4"
      />

      <Text as="h2" className="pt-4">
        States
      </Text>

      <Code
        code={codeStates}
        scope={scope}
        header={`import { Button } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default ButtonDocs;
