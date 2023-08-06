import { CustomButton, EditorMenu } from '../styles';
import { Box } from '../../Box';
import { Editor } from '@tiptap/react';
import { Icon } from '../../Icon';
import { LinkPopover } from './LinkPopover';

type ToolbarOptionsProps = {
  editor: Editor;
};

/**
 * Renders the toolbar options for the editor.
 *
 * @param {ToolbarOptionsProps} props - The props containing the editor instance.
 * @returns {React.ReactNode} - The rendered toolbar options.
 */
export const ToolbarOptions = ({ editor }: ToolbarOptionsProps) => {
  return (
    <EditorMenu editor={editor}>
      {renderButton(
        'H1',
        () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        editor.isActive('heading', { level: 1 })
      )}
      {renderButton(
        'H2',
        () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        editor.isActive('heading', { level: 2 })
      )}
      {renderButton(
        'H3',
        () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        editor.isActive('heading', { level: 3 })
      )}

      <Box className="h-4 w-[1px] bg-action-color-border-transparent-enabled" />

      {renderButton(
        <Icon name="text-bold" label="Bold" size="xs" />,
        () => editor.chain().focus().toggleBold().run(),
        editor.isActive('bold')
      )}
      {renderButton(
        <Icon name="text-italic" label="italic" size="xs" />,
        () => editor.chain().focus().toggleItalic().run(),
        editor.isActive('italic')
      )}
      {renderButton(
        <Icon name="text-strikethrough" label="strike" size="xs" />,
        () => editor.chain().focus().toggleStrike().run(),
        editor.isActive('strike')
      )}
      {renderButton(
        <Icon name="text-bullet-list" label="bullet-list" size="xs" />,
        () => editor.chain().focus().toggleBulletList().run(),
        editor.isActive('bulletList')
      )}
      {renderButton(
        <Icon name="text-ordered-list" label="ordered-list" size="xs" />,
        () => editor.chain().focus().toggleOrderedList().run(),
        editor.isActive('orderedList')
      )}

      <LinkPopover editor={editor} />
    </EditorMenu>
  );
};

// Helper function to render the custom button
const renderButton = (
  label: React.ReactNode,
  onClick: () => void,
  isActive: boolean
) => {
  return (
    <CustomButton onClick={onClick} isActive={isActive}>
      {label}
    </CustomButton>
  );
};
