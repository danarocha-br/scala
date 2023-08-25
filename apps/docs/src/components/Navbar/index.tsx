'use client';

import React from 'react';

import * as S from './styles';
import { useCodeMode } from '@/hooks/useCodeDisplay';

export const Navbar: React.FC = () => {
  const { toggleShowCode } = useCodeMode();
  return (
    <header className={S.navbar()}>
      <button onClick={toggleShowCode}>Show code</button>
    </header>
  );
};
