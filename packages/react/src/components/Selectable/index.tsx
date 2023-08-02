import {
  useComboboxStore,
  Combobox,
  ComboboxPopover,
  ComboboxItem,
} from '@ariakit/react';

import { CSS } from '../../styles';
import { Icon, iconPath } from '../Icon';
import { Text } from '../Text';

import * as S from './styles';

export type SelectableProps = {
  css?: CSS;
  children?: React.ReactNode;
  icon?: keyof typeof iconPath;
  label?: string;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Selectable = ({
  css,
  children,
  icon,
  label,
  isActive,
  ...props
}: SelectableProps): JSX.Element => (
  <S.Container css={css} {...props} isActive={isActive}>
    {!!icon && <Icon name={icon} size="sm" label="icon" color="current" />}
    {!!label && (
      <Text size="sm" color="current">
        {label}
      </Text>
    )}
    {children && children}
  </S.Container>
);

Selectable.displayName = 'Selectable';
