import { useState } from 'react';
import { motion } from 'framer-motion';

import * as S from './styles';

export type CopyButtonProps = {
  className?: string;
  content: string;
  copiedLabel?: string;
  theme?: 'dark' | 'light' | 'none';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Generates a copy button component.
 *
 * @param {string} content - The content to be copied when the button is clicked.
 * @param {string} copiedLabel='👍' - The label to be displayed when the content is copied.
 * @param {string} className - The className styles for the CopyButton component.
 * @returns {JSX.Element} The CopyButton component.
 */
export const CopyButton = ({
  className = '',
  content,
  theme = 'none',
}: CopyButtonProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const [, setIsShown] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.toString());
    setIsCopied(true);
    setIsShown(false);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const motionVariants = {
    shown: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: -12,
      opacity: 0,
      display: 'none',
      transition: {
        delay: 0.2,
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.button
      variants={motionVariants}
      onClick={handleCopy}
      whileTap={{ scale: 0.9 }}
      className={S.button({ className, theme })}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        className="scale-[0.8]"
        animate={isCopied ? 'visible' : 'hidden'}
      >
        <motion.path
          className={S.iconCheck()}
          d="M10.8917 17C10.6472 17 10.4028 16.9109 10.2098 16.7199L8.27984 14.8099C7.90672 14.4407 7.90672 13.8295 8.27984 13.4602C8.65297 13.091 9.27055 13.091 9.64367 13.4602L10.8917 14.6953L15.3563 10.2769C15.7294 9.90769 16.347 9.90769 16.7202 10.2769C17.0933 10.6462 17.0933 11.2574 16.7202 11.6266L11.5736 16.7199C11.3935 16.9109 11.1362 17 10.8917 17Z"
          variants={draw}
          custom={1}
        />
        <motion.path
          className={S.iconClipboard({ theme })}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 6.75H14C16.0633 6.75 16.5785 5.74237 16.7072 4.83366C19.0541 5.11458 20.25 6.16757 20.25 10.0001V16.0001C20.25 19.7001 19.52 21.2501 15 21.2501H9C4.48 21.2501 3.75 19.7001 3.75 16.0001V10.0001C3.75 6.15562 4.95339 5.10804 7.31482 4.83106C7.64404 6.75 9.14851 6.75 10 6.75ZM7.29019 3.33296C7.56014 1.25 9.12491 1.25 10 1.25H14C14.8739 1.25 16.4356 1.25 16.7087 3.32445C20.2821 3.71998 21.75 5.69851 21.75 9.99005V15.9901C21.75 20.1701 20.62 22.7501 15 22.7501H9C3.38 22.7501 2.25 20.1701 2.25 16.0001V10.0001C2.25 5.69953 3.71756 3.72043 7.29019 3.33296ZM8.75001 3.99018C8.75137 2.75 9.0126 2.75 10 2.75H14C14.9848 2.75 15.2473 2.75 15.25 3.98049C15.2488 4.00477 15.2488 4.02887 15.25 4.05274C15.2496 4.99927 15.2275 5.25 14 5.25H10C9.02604 5.25 8.75862 5.25 8.75021 4.05978C8.75117 4.03686 8.75112 4.01364 8.75001 3.99018Z"
        />
      </motion.svg>
    </motion.button>
  );
};

CopyButton.displayName = 'CopyButton';
