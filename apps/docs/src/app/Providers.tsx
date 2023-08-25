'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { SideBarNavigationProvider } from '@compasso/scala';
import { CodeModeProvider } from '../hooks/useCodeDisplay';

import './globals.css';
import '@compasso/scala/dist/index.css';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false}>
      <CodeModeProvider>
        <SideBarNavigationProvider>{children}</SideBarNavigationProvider>
      </CodeModeProvider>
    </ThemeProvider>
  );
}
