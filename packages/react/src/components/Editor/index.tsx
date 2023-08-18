import { Content, useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';

import * as S from './styles';
import { ToolbarOptions } from './ToolbarOptions';

export type EditorProps = {
  className?: string;
  content?: Content;
  placeholder?: string;
  variant?: 'ghost' | 'form';
  onUpdate?: (editor: any) => void;
  editable?: boolean;
};

/**
 * Render the Editor component.
 *
 * @param {string} content - The content of the editor.
 * @param {string} placeholder - The placeholder text for the editor.
 * @param {string} variant - The variant of the editor.
 * @param {boolean} onUpdate - A function to handle updates to the editor content.
 * @param {boolean} editable - Whether the editor is editable or not.
 * @return {JSX.Element} - The rendered Editor component.
 */
export const Editor = ({
  className = '',
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

      Placeholder.configure({
        placeholder: placeholder,
      }),

      Link.configure({
        openOnClick: false,
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
      <EditorContent
        className={S.editorContainer({ variant, className })}
        editor={editor}
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
