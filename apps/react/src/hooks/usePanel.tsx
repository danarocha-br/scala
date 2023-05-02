import React, { createContext, useCallback, useContext, useRef } from 'react';

import { PanelHandlesProps } from '../components/Panel';

interface PanelContextData {
  panelRef: React.RefObject<PanelHandlesProps>;
  handleOpenPanel: () => void;
  handleClosePanel: () => void;
}

interface PanelProviderProps {
  children: React.ReactNode;
}

const PanelContext = createContext<PanelContextData>({} as PanelContextData);

const PanelProvider = ({ children }: PanelProviderProps) => {
  const panelRef = useRef<PanelHandlesProps>(null);

  const handleOpenPanel = useCallback(() => {
    panelRef.current?.openPanel();
  }, []);

  const handleClosePanel = useCallback(() => {
    panelRef.current?.closePanel();
  }, [panelRef]);

  return (
    <PanelContext.Provider
      value={{ handleOpenPanel, handleClosePanel, panelRef }}
    >
      {children}
    </PanelContext.Provider>
  );
};

function usePanel() {
  const context = useContext(PanelContext);

  if (!context) {
    throw new Error('usePanel must be used within a PanelProvider.');
  }

  return context;
}

export { PanelProvider, usePanel };
