import { useCallback, useEffect } from 'react';
import { useCycle } from 'framer-motion';

import { Icon } from '../Icon';
import { Stack } from '../Stack';

import { useToast } from '../../hooks/useToast';

import * as S from './styles';
import { IconButton } from '../IconButton';

export type ToastMessageTypeProps =
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral';

export type ToastMessagesProps = {
  id?: string;
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

const ToastItem = ({
  id,
  title,
  description,
  variant = 'info',
  allowRemoveToast = true,
}: ToastMessagesProps) => {
  const { removeToast } = useToast();
  const [isShown, toogleShow] = useCycle(true, false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (allowRemoveToast) {
        return removeToast(id ? id : 'id');
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

  const handleIconDisplay = (variant: ToastMessageTypeProps) => {
    switch (variant) {
      case 'info':
        return 'info';

      case 'success':
        return 'success';

      case 'danger':
        return 'alert';

      case 'warning':
        return 'alert';

      default:
        return 'info';
    }
  };

  return (
    <S.Toast
      id={id}
      aria-label={title}
      variants={motionVariants}
      animate={isShown ? 'shown' : 'hidden'}
    >
      <S.Marker variant={variant} />
      <S.Title variant={variant}>
        <Stack align="center" gap="2">
          <Icon
            label={title}
            name={handleIconDisplay(variant)}
            color="current"
          />
          {title}
        </Stack>

        <IconButton
          icon="close"
          size="sm"
          label="close notification"
          onClick={() => handleRemoveToast(id ? id : 'id')}
        />
      </S.Title>

      {Boolean(description) && <S.Message>{description}</S.Message>}
    </S.Toast>
  );
};
ToastItem.displayName = 'Item';

const ToastRoot = ({
  messages,
  directionX = 'right',
  directionY = 'bottom',
  allowRemoveToast = true,
}: ToastProps) => {
  return (
    <S.Container
      aria-live="assertive"
      variants={motionVariants}
      initial={false}
      directionX={directionX}
      directionY={directionY}
    >
      {Boolean(messages) &&
        messages.map((message) => (
          <ToastItem
            key={message.id}
            id={message.id}
            title={message.title}
            description={message.description}
            variant={message.variant}
            allowRemoveToast={allowRemoveToast}
          />
        ))}
    </S.Container>
  );
};
ToastRoot.displayName = 'Root';

export const Toast = {
  Root: ToastRoot,
  Item: ToastItem,
};
