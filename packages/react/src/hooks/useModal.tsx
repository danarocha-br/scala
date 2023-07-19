import React, { createContext, useCallback, useContext, useRef } from 'react';

import { ModalHandlesProps } from '../components/Modal';

interface ModalContextData {
  modalRef: React.RefObject<ModalHandlesProps>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

const DialogContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalRef = useRef<ModalHandlesProps>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const handleCloseModal = useCallback(() => {
    modalRef.current?.closeModal();
  }, [modalRef]);

  return (
    <DialogContext.Provider
      value={{ handleOpenModal, handleCloseModal, modalRef }}
    >
      {children}
    </DialogContext.Provider>
  );
};

function useModal() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider.');
  }

  return context;
}

export { ModalProvider, useModal };
