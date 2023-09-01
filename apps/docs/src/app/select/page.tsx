'use client';

import React, { useState } from 'react';
import { Select, Stack, Text, Avatar, RadioGroup } from '@compasso/scala';
import { Code } from '@/components/Code';

const SelectDocs = () => {
  const [isDisabled, setIsDisabled] = useState('false');
  const [isLoading, setIsLoading] = useState('false');

  const scope = { Select, Stack, Avatar };

  const codeMenu = `
  <Stack gap="4" className="w-[320px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'custom name',
          label: 'Custom name',
        },
        {
          value: 'bit longer name',
          label: 'Bit longer name',
        },
        {
          value: 'and even longer name',
          label: 'And even longer name',
        },
      ]}
      isSearchable={false}
    />
  </Stack>
`;

  const codeMenuClearable = `
  <Stack gap="4" className="w-[320px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'custom name',
          label: 'Custom name',
        },
        {
          value: 'bit longer name',
          label: 'Bit longer name',
        },
        {
          value: 'and even longer name',
          label: 'And even longer name',
        },
      ]}
      isMulti
      isClearable
      emptyLabel="No options found."
    />
  </Stack>
`;

  const codeMenuModifiers = `
  <Stack gap="4" className="w-[320px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'custom name',
          label: 'Custom name',
        },
        {
          value: 'bit longer name',
          label: 'Bit longer name',
        },
        {
          value: 'and even longer name',
          label: 'And even longer name',
        },
      ]}
      disabled={${isDisabled}}
      loading={${isLoading}}
      emptyLabel="No options found."
    />
  </Stack>
`;

  const codeMenuSlots = `
  <Stack gap="4" className="w-[620px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'John Smith',
          label: 'John Smith',
          slot: <Avatar username="John Smith" bgColor="bg-royal-400" />
        },
        {
          value: 'Mary Johanson',
          label: 'Mary Johanson',
          slot: <Avatar username="Mary Johanson" bgColor="bg-macaroni-800" />
        },
        {
          value: 'William Hermmanson',
          label: 'William Hermmanson',
          slot: <Avatar username="William Hermmanson" bgColor="bg-forest-400" />
        },
      ]}
      emptyLabel="No options found."
      truncationLabel="users selected"
    />

    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'John Smith',
          label: 'John Smith',
          slot: <Avatar username="John Smith" bgColor="bg-royal-400" />
        },
        {
          value: 'Mary Johanson',
          label: 'Mary Johanson',
          slot: <Avatar username="Mary Johanson" bgColor="bg-macaroni-800" />
        },
        {
          value: 'William Hermmanson',
          label: 'William Hermmanson',
          slot: <Avatar username="William Hermmanson" bgColor="bg-forest-400" />
        },
      ]}
      isMulti
      emptyLabel="No options found."
      truncationLabel="users selected"
    />
  </Stack>
`;

  const codeMenuDefaultOptions = `
  <Stack gap="4" className="w-[320px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'John Smith',
          label: 'John Smith',
          slot: <Avatar username="John Smith" bgColor="bg-royal-400" />
        },
        {
          value: 'Mary Johanson',
          label: 'Mary Johanson',
          slot: <Avatar username="Mary Johanson" bgColor="bg-macaroni-800" />
        },
        {
          value: 'William Hermmanson',
          label: 'William Hermmanson',
          slot: <Avatar username="William Hermmanson" bgColor="bg-forest-400" />
        },
      ]}
      defaultOptions={
        [{
          value: 'Mary Johanson',
          label: 'Mary Johanson',
          slot: <Avatar username="Mary Johanson" bgColor="bg-macaroni-800" />
        }]
      }
      isMulti
      emptyLabel="No options found."
      truncationLabel="users selected"
    />
  </Stack>
`;

  const codeMenuExtraAction = `
  <Stack gap="4" className="w-[320px]">
    <Select
      name="project"
      icon="project"
      label="Project"
      placeholder="Select a project"
      options={[
        {
          value: 'John Smith',
          label: 'John Smith',
          slot: <Avatar username="John Smith" bgColor="bg-royal-400" />
        },
        {
          value: 'Mary Johanson',
          label: 'Mary Johanson',
          slot: <Avatar username="Mary Johanson" bgColor="bg-macaroni-800" />
        },
        {
          value: 'William Hermmanson',
          label: 'William Hermmanson',
          slot: <Avatar username="William Hermmanson" bgColor="bg-forest-400" />
        },
      ]}
      isMulti
      emptyLabel="No options found."
      truncationLabel="users selected"
      actionLabel="Edit options"
      actionIcon="edit"
      onAction={() => alert('extra action')}
    />
  </Stack>
`;

  const slotModifiers = (
    <Stack direction="column" gap="1" fullWidth className="">
      <Text size="sm" weight="semibold" color="caption">
        States:
      </Text>
      <RadioGroup
        legend="Disabled"
        name="disabled"
        value={isDisabled}
        className="scale-90"
        options={[
          {
            label: 'false',
            value: 'false',
          },
          {
            label: 'true',
            value: 'true',
          },
        ]}
        //@ts-ignore
        onChange={(e) => setIsDisabled(e)}
      />
      <RadioGroup
        legend="Loading"
        name="Loading"
        value={isLoading}
        className="scale-90"
        options={[
          {
            label: 'false',
            value: 'false',
          },
          {
            label: 'true',
            value: 'true',
          },
        ]}
        //@ts-ignore
        onChange={(e) => setIsLoading(e)}
      />
    </Stack>
  );

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Select
      </Text>
      <Text as="p" size="lg">
        .
      </Text>

      <Text as="h2" className="pt-4">
        Properties & Attributes
      </Text>

      <Text as="h3">Select Menu: Single Option</Text>
      <Code
        code={codeMenu}
        scope={scope}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />
      <Text as="h3">Select Menu: Multiple Option</Text>
      <Code
        code={codeMenuClearable}
        scope={scope}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />
      <Text as="h3">Select Menu: With Slots</Text>
      <Code
        code={codeMenuSlots}
        scope={scope}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />
      <Text as="h3">Select with default options</Text>
      <Code
        code={codeMenuDefaultOptions}
        scope={scope}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />
      <Text as="h3">Select with extra action</Text>
      <Code
        code={codeMenuExtraAction}
        scope={scope}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />

      <Text as="h3">Other modifiers</Text>
      <Code
        code={codeMenuModifiers}
        scope={scope}
        slot={slotModifiers}
        header={`import { Select } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default SelectDocs;
