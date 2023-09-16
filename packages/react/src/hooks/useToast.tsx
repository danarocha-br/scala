import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  Toast,
  ToastMessageTypeProps,
  ToastMessagesProps,
} from '../components/Toast';

type DirectionX = 'left' | 'right';
type DirectionY = 'top' | 'bottom';

type ToastProps = {
  title: string;
  description?: string;
  variant?: ToastMessageTypeProps;
  allowRemoveToast?: boolean;
  directionY?: DirectionY;
  directionX?: DirectionX;
};
interface ToastContextData {
  addToast: ({
    variant,
    title,
    description,
    allowRemoveToast,
    directionX,
    directionY,
  }: ToastProps) => void;
  removeToast: (id: string) => void;
}

interface ToastProvider {
  children: React.ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

const ToastProvider = ({ children }: ToastProvider) => {
  const [messages, setMessages] = useState<ToastMessagesProps[]>([]);
  const [directionX, setDirectionX] = useState<DirectionX | undefined>('right');
  const [directionY, setDirectionY] = useState<DirectionY | undefined>(
    'bottom'
  );
  const [allowRemoveToast, setAllowRemoveToast] = useState<boolean | undefined>(
    false
  );

  const addToast = useCallback(
    ({
      variant,
      title,
      description,
      directionX,
      directionY,
      allowRemoveToast,
    }: ToastProps) => {
      const id = uuid();

      const message = {
        id,
        variant,
        title,
        description,
      } as ToastMessagesProps;

      setMessages((state) => [...state, message]);
      setDirectionX(directionX);
      setDirectionY(directionY);
      setAllowRemoveToast(allowRemoveToast);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast.Root
        messages={messages}
        directionX={directionX}
        directionY={directionY}
        allowRemoveToast={allowRemoveToast}
      />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider.');
  }

  return context;
}

export { ToastProvider, useToast };
