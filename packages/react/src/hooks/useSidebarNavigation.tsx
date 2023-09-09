import React, { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface SideBarNavigationContextData {
  changeSidebarStatus: () => void;
  isSidebarOpen: boolean;
  // setOverlayType: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SideBarNavigationProvider {
  children: ReactNode;
}

const SideBarNavigationContext = createContext(
  {} as SideBarNavigationContextData
);

const SideBarNavigationProvider = ({ children }: SideBarNavigationProvider) => {
  const [isOpen, setOpen] = useState(true);

  const changeSidebarStatus = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <SideBarNavigationContext.Provider
      value={{
        changeSidebarStatus,
        isSidebarOpen: isOpen,
      }}
    >
      {children}
    </SideBarNavigationContext.Provider>
  );
};

function useSideBarNavigation() {
  const context = useContext(SideBarNavigationContext);

  if (!context) {
    throw new Error(
      'useSideBarNavigation must be used within a SideBarNavigationProvider.'
    );
  }

  return context;
}

export { SideBarNavigationProvider, useSideBarNavigation };
