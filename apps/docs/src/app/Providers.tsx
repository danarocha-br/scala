'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { CodeModeProvider } from '../hooks/useCodeDisplay';

import './globals.css';
import '@compasso/scala/dist/index.css';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <CodeModeProvider>
        {children}
      </CodeModeProvider>
    </ThemeProvider>
  );
}
