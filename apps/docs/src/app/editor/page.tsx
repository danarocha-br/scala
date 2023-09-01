'use client';

import React from 'react';
import { Editor, Stack, Text } from '@compasso/scala';
import { Code } from '@/components/Code';

const EditorDocs = () => {
  const scope = { Editor, Stack };

  const codeGhost = `
  <Stack gap="4" className="px-4 w-full">
    <Editor
      content={"Sample Article: The Importance of Regular Exercise"}
      onUpdate={(editor) => {
        const json = editor.editor.getJSON();
        console.log(json);
      }}
    />

  </Stack>
`;
  const codeForm = `
  <Stack gap="4" className="px-4 w-full">
    <Editor
      variant="form"
      placeholder="Type something ..."
      onUpdate={(editor) => {
        const json = editor.editor.getJSON();
        console.log(json);
      }}
    />

  </Stack>
`;

  return (
    <Stack direction="column" gap="4" fullWidth>
      <Text as="h1" className="page-title leading-tight">
        Editor
      </Text>
      <Text size="lg">.</Text>

      <Code
        code={codeGhost}
        scope={scope}
        header={`import { Editor } from "@compasso/scala";`}
        className="pt-4"
      />
      <Code
        code={codeForm}
        scope={scope}
        header={`import { Editor } from "@compasso/scala";`}
        className="pt-4"
      />
    </Stack>
  );
};

export default EditorDocs;
