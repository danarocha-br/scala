'use client';

import React, { useMemo } from 'react';
import { Stack, Text, Tooltip } from '@compasso/scala';
import Link from 'next/link';

import { SwitchTheme } from '../SwitchTheme';
import { NavigationItem } from '@/constants/sidebar';
import { SIDEBAR_ITEMS } from '@/constants';
import * as S from './styles';

export const Sidebar: React.FC = () => {
  const sidebarItems = useMemo(() => Object.values(SIDEBAR_ITEMS), []);

  const groupedItems = useMemo(() => {
    const groups = sidebarItems.reduce<Record<string, NavigationItem[]>>(
      (acc, item) => {
        const { group } = item;
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(item);
        return acc;
      },
      {}
    );

    // Sort the items within each group
    Object.keys(groups).forEach((group) => {
      groups[group].sort((a, b) => a.label.localeCompare(b.label));
    });

    return groups;
  }, [sidebarItems]);

  const sortedGroups = useMemo(
    () => Object.keys(groupedItems).sort(),
    [groupedItems]
  );

  return (
    <aside className={S.sidebar()}>
      <Stack align="center" justify="between" fullWidth>
        <Text size="lg">Compasso</Text>
        <Tooltip content="Toogle theme" direction="left">
          <SwitchTheme />
        </Tooltip>
      </Stack>

      <Stack as="ul" direction="column" className={S.navigationLinks()}>
        {sortedGroups.map((group, index) => (
          <React.Fragment key={index}>
            {group ? (
              <li className="my-3 font-semibold capitalize">{group}</li>
            ) : null}

            {groupedItems[group].map((item) => (
              <Link key={item.label} href={item.href} className="capitalize">
                {item.label}
              </Link>
            ))}
          </React.Fragment>
        ))}
      </Stack>
    </aside>
  );
};
