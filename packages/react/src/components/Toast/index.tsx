import { useCallback, useEffect } from 'react';
import { useCycle, motion } from 'framer-motion';

import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { IconButton } from '../IconButton';
import { Box } from '../Box';
import * as S from './styles';

import { useToast } from '../../hooks/useToast';

export type ToastMessageTypeProps =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type ToastMessagesProps = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastMessageTypeProps;
  allowRemoveToast?: boolean;
};

export type ToastProps = {
  messages: ToastMessagesProps[];
  directionY?: 'top' | 'bottom';
  directionX?: 'left' | 'right';
  allowRemoveToast?: boolean;
};

type ToastItemProps = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastMessageTypeProps;
  allowRemoveToast?: boolean;
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
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

/**
 * Renders a toast item component.
 *
 * @param {ToastItemProps} props - The props object containing the following properties:
 *   - id: The ID of the toast item.
 *   - title: The title of the toast item.
 *   - description: The description of the toast item.
 *   - variant (optional): The variant of the toast item. Defaults to 'info'.
 *   - allowRemoveToast (optional): Whether to allow removing the toast item. Defaults to true.
 * @return {JSX.Element} The rendered toast item component.
 */
const ToastItem = ({
  id,
  title,
  description,
  variant = 'info',
  allowRemoveToast = true,
}: ToastItemProps) => {
  const { removeToast } = useToast();
  const [isShown, toogleShow] = useCycle(true, false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (allowRemoveToast) {
        return removeToast(id || 'id');
      }
      return undefined;
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast, allowRemoveToast]);

  const handleRemoveToast = useCallback(
    (removeId: string) => {
      removeToast(removeId);
      toogleShow();
    },
    [removeToast, toogleShow]
  );

  const handleIconDisplay = (variant: ToastItemProps['variant']) => {
    switch (variant) {
      case 'info':
        return 'info';

      case 'success':
        return 'success';

      case 'danger':
      case 'warning':
        return 'alert';

      default:
        return 'info';
    }
  };

  return (
    <motion.div
      className={S.toast()}
      id={id}
      aria-label={title}
      variants={motionVariants}
      animate={isShown ? 'shown' : 'hidden'}
    >
      <Box className={S.marker({ variant })} />
      <Box className={S.title()}>
        <Stack align="center" gap="2">
          <Icon
            label={title}
            name={handleIconDisplay(variant)}
            color="current"
            className={S.icon({ variant })}
          />
          {title}
        </Stack>

        <IconButton
          icon="close"
          size="sm"
          label="close notification"
          onClick={() => handleRemoveToast(id || 'id')}
        />
      </Box>

      {Boolean(description) && <Box className={S.message()}>{description}</Box>}
    </motion.div>
  );
};
ToastItem.displayName = 'Item';

/**
 * Renders the root component for displaying toast messages.
 *
 * @param {ToastProps} messages - An array of toast messages to be displayed.
 * @param {string} directionX - The horizontal direction of the toast messages. Defaults to 'right'.
 * @param {string} directionY - The vertical direction of the toast messages. Defaults to 'bottom'.
 * @param {boolean} allowRemoveToast - Determines if toast messages can be removed. Defaults to true.
 * @return {JSX.Element} The root component for displaying toast messages.
 */
const ToastRoot = ({
  messages,
  directionX = 'right',
  directionY = 'bottom',
  allowRemoveToast = true,
}: ToastProps) => {
  const renderToastItems = () => {
    if (!messages) {
      return null;
    }
    return messages.map((message) => (
      <ToastItem
        key={message.id}
        id={message.id}
        title={message.title}
        description={message.description}
        variant={message.variant}
        allowRemoveToast={allowRemoveToast}
      />
    ));
  };

  return (
    <motion.div
      className={S.container({ directionX, directionY })}
      aria-live="assertive"
      variants={motionVariants}
      initial={false}
    >
      {renderToastItems()}
    </motion.div>
  );
};
ToastRoot.displayName = 'Root';

export const Toast = {
  Root: ToastRoot,
  Item: ToastItem,
};
