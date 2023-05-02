import { CSS } from '../../styles';
import { Button } from '../Button';
import { Shortcut } from '../Shortcut';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ThemeToggle } from '../ThemeToggle';
import { Tooltip } from '../Tooltip';

import * as S from './styles';

export type NavbarProps = {
  pageTitle?: string;
  isDark: boolean;
  slot?: React.ReactNode;
  onThemeChange: () => void;
  css?: CSS;
};

export const Navbar = ({
  pageTitle,
  isDark,
  onThemeChange,
  slot,
  css,
  ...props
}: NavbarProps) => (
  //TODO - make navbar mobile friendly
  <S.Container css={css} {...props}>
    <Text size="lg" color="body-lighter" css={{ whiteSpace: 'nowrap' }}>
      {pageTitle}
    </Text>

    {slot && (
      <Stack
        align="center"
        gap={4}
        justify="end"
        css={{ flex: 2, px: '$spacing-12' }}
      >
        {slot}
      </Stack>
    )}

    <Stack align="center" gap={2}>
      <Tooltip content="Mude o tema" slot={<Shortcut shortcut="⌘ T" />}>
        <ThemeToggle isDark={isDark} onThemeChange={onThemeChange} />
      </Tooltip>

      <Button
        type="button"
        size="sm"
        variant="icon"
        label="View more"
        icon="menu"
      />
    </Stack>
  </S.Container>
);
Navbar.displayName = 'Navbar';
