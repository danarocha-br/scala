import { useState } from 'react';
import { motion } from 'framer-motion';

import { CSS } from '../../styles';
import { IconButton } from '../IconButton';
import { Box } from '../Box';
import { Stack } from '../Stack';

export type CopyButtonProps = {
  css?: CSS;
  content: string;
  copiedLabel?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Generates a copy button component.
 *
 * @param {string} content - The content to be copied when the button is clicked.
 * @param {string} copiedLabel='👍' - The label to be displayed when the content is copied.
 * @param {string} css - The CSS styles for the CopyButton component.
 * @returns {JSX.Element} The CopyButton component.
 */
export const CopyButton = ({
  css,
  content,
  copiedLabel = '👍',
}: CopyButtonProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.toString());
    setIsCopied(true);
    setIsShown(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const motionVariants = {
    shown: {
      y: -12,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: -4,
      opacity: 0,
      display: 'none',
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const MotionComponent = motion(Box);

  return (
    <Stack direction={'column'} align={'center'} css={{ position: 'relative' }}>
      <IconButton
        label="copy"
        icon="copy"
        size="sm"
        onClick={handleCopy}
        css={{ position: 'relative', css }}
      />

      {isCopied && (
        <MotionComponent
          variants={motionVariants}
          animate={isShown ? 'shown' : 'hidden'}
          css={{
            color: '$action-color-text-primary-enabled',
            background: '$action-color-background-primary-enabled',

            fontFamily: '$font-family-sans',
            borderRadius: '$radii-sm',
            p: '$spacing-1',
            minWidth: '$spacing-5',
            minHeight: '$spacing-5',
            d: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            position: 'absolute',
            top: -30,
          }}
        >
          {copiedLabel}
        </MotionComponent>
      )}
    </Stack>
  );
};

CopyButton.displayName = 'CopyButton';
