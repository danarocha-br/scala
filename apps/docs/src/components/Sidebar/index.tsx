'use client';

import React from 'react';
import { Stack, Text, Tooltip } from '@compasso/scala';
import { SwitchTheme } from '../SwitchTheme';

import * as S from './styles';
import { SIDEBAR_ITEMS } from '@/constants';
import Link from 'next/link';

export const Sidebar: React.FC = () => {
  const sidebarItems = Object.values(SIDEBAR_ITEMS);

  return (
    <aside className={S.sidebar()}>
      <Stack align="center" justify="between" fullWidth>
        <Text size="lg">Compasso</Text>
        <Tooltip content="Toogle theme" direction="left">
          <SwitchTheme />
        </Tooltip>
      </Stack>

      <Stack as="ul" direction="column" className={S.navigationLinks()}>
        {React.Children.toArray(
          sidebarItems.map((item) => (
            <li>
              <Link key={item.label} href={item.href} className="capitalize">
                {item.label}
              </Link>
            </li>
          ))
        )}
      </Stack>
    </aside>
  );
};
