import React from 'react';
import { Stack, Text } from '@compasso/scala';

import * as S from './styles';

interface PropsTableProps<T> {
  componentProps: T;
  title: string;
}

type PropertyInfo = {
  type: 'string' | 'number' | 'boolean' | 'React.ReactNode' | string;
  description: string;
};

export function generatePropsTable<T extends Record<string, PropertyInfo>>(
  props: T
): Array<{ name: string; type: string; description: string }> {
  return Object.entries(props).map(([name, info]) => ({
    name,
    type: info.type,
    description: info.description,
  }));
}

export const PropsTable = <T extends Record<string, PropertyInfo>>({
  componentProps,
  title,
}: PropsTableProps<T>) => {
  const propInfo = generatePropsTable(componentProps);

  const defineColors = (type: PropertyInfo['type']) => {
    switch (type) {
      case 'string':
        return 'text-macaroni-500';
      case 'number':
        return 'text-froly-500';
      case 'boolean':
        return 'text-forest-500';
      case 'React.ReactNode':
        return 'text-[pink]';
      default:
        return 'text-text-color-body';
    }
  };

  return (
    <Stack direction="column" gap="0" className="mb-6">
      <Text className={S.title()}>Inteface {title}</Text>
      <table className={S.table()}>
        <thead className={S.tableHeader()}>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th className="w-1/2">Description</th>
          </tr>
        </thead>
        <tbody>
          {propInfo.map((prop) => (
            <tr key={prop.name}>
              <td className={S.tableCell()}>{prop.name}</td>
              <td className={S.tableCell({ variant: 'type' })}>
                <span className={defineColors(prop.type)}>{prop.type}</span>
              </td>
              <td className={S.tableCell({ variant: 'description' })}>
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
};
