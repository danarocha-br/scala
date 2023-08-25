import React, { createContext, useContext, useState } from 'react';

interface CodeModeContextData {
  showCode: boolean;
  toggleShowCode: () => void;
}

interface CodeModeProviderProps {
  children: React.ReactNode;
}

const CodeModeContext = createContext<CodeModeContextData>(
  {} as CodeModeContextData
);

const CodeModeProvider = ({ children }: CodeModeProviderProps) => {
  const [showCode, setShowCode] = useState<boolean>(false);

  const toggleShowCode = () => {
    setShowCode((prev) => !prev);
  };

  return (
    <CodeModeContext.Provider value={{ showCode, toggleShowCode }}>
      {children}
    </CodeModeContext.Provider>
  );
};

function useCodeMode() {
  const context = useContext(CodeModeContext);

  if (!context) {
    throw new Error('useCodeMode must be used within a CodeModeProvider.');
  }

  return context;
}

export { CodeModeProvider, useCodeMode };
