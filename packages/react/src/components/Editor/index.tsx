import { useEditor, Content } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { lowlight } from 'lowlight/lib/core';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';

import js from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/tokyo-night-dark.css';

import { CSS } from '../../styles';
import * as S from './styles';
import { ToolbarOptions } from './ToolbarOptions';

export type EditorProps = {
  css?: CSS;
  content?: Content;
  placeholder?: string;
  variant?: 'ghost' | 'form';
  onUpdate?: (editor: any) => void;
  editable?: boolean;
};

lowlight.registerLanguage('js', js);

export const Editor = ({
  css,
  content,
  placeholder,
  variant = 'ghost',
  onUpdate,
  editable = true,
  ...props
}: EditorProps): JSX.Element => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
    editable: editable,
    content: content,
    editorProps: {
      attributes: {
        class: 'c-editor',
      },
    },
    onUpdate: onUpdate,
  });

  return (
    <>
      <S.EditorContainer
        editor={editor}
        variant={variant}
        css={css}
        {...props}
      />
      {/*
      {editor && (
        <S.EditorFloatingMenu
          editor={editor}
          // shouldShow={({ state }) => {
          //   const { $from } = state.selection;
          //   const currentLineText = $from.nodeBefore?.textContent;
          //   return currentLineText === '/';
          // }}
          tippyOptions={{ duration: 100, inlinePositioning: false }}
        >
          {/* <S.CustomButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            data-active={editor.isActive('bold')}
            isActive={editor.isActive('heading', { level: 1 }) ? true : false}
          >
            <Icon name="text-h1" label="Heading 1" />
          </S.CustomButton>
          <S.CustomButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive('heading', { level: 2 }) ? true : false}
          >
            <Icon name="text-h2" label="Heading 2" />
          </S.CustomButton>
          <S.CustomButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <Icon name="text-h3" label="Heading 3" />
          </S.CustomButton>
          <button>+</button>
        </S.EditorFloatingMenu>
      )} */}

      {editor && <ToolbarOptions editor={editor} />}
    </>
  );
};

Editor.displayName = 'Editor';
