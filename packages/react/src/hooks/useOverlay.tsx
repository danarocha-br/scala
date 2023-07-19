import React, { createContext, useContext, useState } from 'react';

type OverlaType = 'dialog' | 'panel' | 'modal';

interface OverlayContextData {
  overlayType: OverlaType;
  setOverlayType: React.Dispatch<React.SetStateAction<OverlaType>>;
}

interface OverlayProvider {
  children: React.ReactNode;
}

const OverlayContext = createContext({} as OverlayContextData);

const OverlayProvider = ({ children }: OverlayProvider) => {
  const [overlayType, setOverlayType] = useState<OverlaType>('panel');

  return (
    <OverlayContext.Provider
      value={{
        overlayType,
        setOverlayType,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

function useOverlay() {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useOverlay must be used within a OverlayProvider.');
  }

  return context;
}

export { OverlayProvider, useOverlay };
