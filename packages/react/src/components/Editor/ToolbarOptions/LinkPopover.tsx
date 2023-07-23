import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tiptap/react';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';

import { Icon } from '../../Icon';
import { Stack } from '../../Stack';
import { IconButton } from '../../IconButton';
import { Box } from '../../Box';
import {
  CustomButton,
  CustomPopoverContent,
  CustomInput,
  CustomPopoverArrow,
} from '../styles';
import { CopyButton } from '../../CopyButton';

interface CustomLinkPromptProps {
  editor: Editor;
}

/**
 * Renders a popover component for adding and removing links in the editor.
 *
 * @param {CustomLinkPromptProps} props - The component props.
 * @param {Editor} props.editor - The editor instance.
 * @return {React.FC<CustomLinkPromptProps>} The rendered popover component.
 */
export const LinkPopover: React.FC<CustomLinkPromptProps> = ({ editor }) => {
  const [url, setUrl] = useState<string>(
    editor.getAttributes('link').href || ''
  );
  const hasLink: boolean = editor.isActive('link');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const applyLink = () => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
      closeLinkPrompt();
    }
  };

  const closeLinkPrompt = () => {
    setUrl('');
    editor.commands.focus();
    setPopoverOpen(false); // Close the popover when link is applied or cancelled
  };

  const selectionHasLink = () => {
    const { from, to } = editor.state.selection;
    const linkMarkType = editor.schema.marks.link;

    return linkMarkType
      ? editor.state.doc.rangeHasMark(from, to, linkMarkType)
      : false;
  };

  // Update the URL state whenever the editor prop changes
  useEffect(() => {
    setUrl(editor.getAttributes('link').href || '');
  }, [editor]);

  useEffect(() => {
    if (popoverOpen) {
      setUrl(editor.getAttributes('link').href || '');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [popoverOpen, editor]);

  return (
    <>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <CustomButton isActive={hasLink}>
            <Icon name="link" label="link" size="xs" />
          </CustomButton>
        </PopoverTrigger>
        <CustomPopoverContent sideOffset={5} side="top">
          <Stack align="center">
            <Icon name="link" label="link" size="xs" />
            <CustomInput
              ref={inputRef}
              id="linkInput"
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder="URL"
              onKeyPress={(e) => e.key === 'Enter' && applyLink()}
            />

            {selectionHasLink() && (
              <>
                <Box
                  css={{
                    background: '$action-color-border-transparent-enabled',
                    width: '1px',
                    height: '$spacing-4',
                    mr: '$spacing-2',
                  }}
                />
                <CopyButton content={url} />
                <IconButton
                  label="Remove link"
                  size="sm"
                  icon="trash"
                  onClick={() => editor.chain().focus().unsetLink().run()}
                />
              </>
            )}
          </Stack>

          <CustomPopoverArrow />
        </CustomPopoverContent>
      </Popover>
    </>
  );
};
