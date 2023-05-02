import React, { createContext, useCallback, useContext, useRef } from 'react';

import { DialogHandlesProps } from '../components/Dialog';

interface DialogContextData {
  dialogRef: React.RefObject<DialogHandlesProps>;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
}

interface DialogProviderProps {
  children: React.ReactNode;
}

const DialogContext = createContext<DialogContextData>({} as DialogContextData);

const DialogProvider = ({ children }: DialogProviderProps) => {
  const dialogRef = useRef<DialogHandlesProps>(null);

  const handleOpenDialog = useCallback(() => {
    dialogRef.current?.openDialog();
  }, []);

  const handleCloseDialog = useCallback(() => {
    dialogRef.current?.closeDialog();
  }, [dialogRef]);

  return (
    <DialogContext.Provider
      value={{ handleOpenDialog, handleCloseDialog, dialogRef }}
    >
      {children}
    </DialogContext.Provider>
  );
};

function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider.');
  }

  return context;
}

export { DialogProvider, useDialog };
