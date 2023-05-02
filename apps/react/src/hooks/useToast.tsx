import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Toast, ToastMessagesProps } from '../components/Toast';

interface ToastContextData {
  addToast: ({ variant, title, description }: ToastMessagesProps) => void;
  removeToast: (id: string) => void;
}

interface ToastProvider {
  children: React.ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

const ToastProvider = ({ children }: ToastProvider) => {
  const [messages, setMessages] = useState<ToastMessagesProps[]>([]);

  const addToast = useCallback(
    ({ variant, title, description }: ToastMessagesProps) => {
      const id = uuid();

      const toast = { id, variant, title, description };

      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast.Root messages={messages} />
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
