import React from 'react';
import { Box } from '../../Box';
import { Button } from '../../Button';

import * as S from '../styles';
import { Editor } from '@tiptap/react';
import { IconButton } from '../../IconButton';

type ToolbarOptionsProps = {
  editor: Editor;
};

export const ToolbarOptions = ({ editor }: ToolbarOptionsProps) => {
  return (
    <S.EditorMenu editor={editor}>
      <IconButton
        label="heading 1"
        icon="text-h1"
        size="xs"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        data-active={editor.isActive('heading', { level: 1 })}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('heading', { level: 1 })
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('heading', { level: 1 })
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />
      <IconButton
        label="heading 2"
        icon="text-h2"
        size="xs"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('heading', { level: 2 })
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('heading', { level: 2 })
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />
      <IconButton
        label="heading 3"
        icon="text-h3"
        size="xs"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('heading', { level: 3 })
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('heading', { level: 3 })
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />

      <Box
        css={{
          background: '$action-color-border-transparent-enabled',
          width: '1px',
          height: '$spacing-4',
        }}
      />

      <IconButton
        label="bold"
        icon="text-bold"
        size="xs"
        onClick={() => editor.chain().focus().toggleBold().run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('bold')
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('bold')
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />
      <IconButton
        label="italic"
        icon="text-italic"
        size="xs"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('italic')
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('italic')
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />

      <IconButton
        label="strikethrough"
        icon="text-strikethrough"
        size="xs"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('strike')
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('strike')
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />

      <IconButton
        label="bullet-list"
        icon="text-bullet-list"
        size="xs"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('bulletList')
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('bulletList')
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />

      <IconButton
        label="ordered-list"
        icon="text-ordered-list"
        size="xs"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        css={{
          transition: '$base',
          backgroundColor: editor.isActive('orderedList')
            ? '$action-color-background-primary-enabled !important'
            : 'transparent',

          '& svg': {
            fill: editor.isActive('orderedList')
              ? '$text-color-on-dark'
              : '$text-color-body',
          },
        }}
      />
    </S.EditorMenu>
  );
};
