import { Content, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';

// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
// import { lowlight } from 'lowlight/lib/core';

// import css from 'highlight.js/lib/languages/css';
// import js from 'highlight.js/lib/languages/javascript';
// import ts from 'highlight.js/lib/languages/typescript';
// import html from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/tokyo-night-dark.css';

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

// lowlight.registerLanguage('html', html);
// lowlight.registerLanguage('css', css);
// lowlight.registerLanguage('js', js);
// lowlight.registerLanguage('ts', ts);

export const Editor = ({
  className,
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
      // CodeBlockLowlight.extend({
      //   addNodeView() {
      //     return ReactNodeViewRenderer(CodeBlock);
      //   },
      // }).configure({ lowlight }),
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
      <S.EditorContainer
        editor={editor}
        variant={variant}
        className={className}
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
