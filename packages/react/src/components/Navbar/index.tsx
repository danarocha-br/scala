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
  optionsButtonLabel?: string;
  themeButtonLabel?: string;
  optionsButtonOnClick?: () => void;
};

export const Navbar = ({
  pageTitle,
  isDark,
  onThemeChange,
  slot,
  optionsButtonLabel,
  optionsButtonOnClick,
  themeButtonLabel,
  css,
  ...props
}: NavbarProps) => (
  //TODO - make navbar mobile friendly
  <S.Container css={css} {...props}>
    {Boolean(pageTitle) && (
      <Text size="lg" color="body-lighter" css={{ whiteSpace: 'nowrap' }}>
        {pageTitle}
      </Text>
    )}

    {slot && (
      <Stack
        align="center"
        gap={4}
        justify="end"
        css={{ flex: 2, px: !pageTitle ? '' : '$spacing-12' }}
      >
        {slot}
      </Stack>
    )}

    <Stack align="center" gap={2}>
      <Tooltip
        content={themeButtonLabel || 'Change theme'}
        slot={<Shortcut shortcut="⌘ T" />}
      >
        <ThemeToggle isDark={isDark} onThemeChange={onThemeChange} />
      </Tooltip>

      {Boolean(optionsButtonOnClick) && (
        <Button
          type="button"
          size="sm"
          variant="icon"
          label={optionsButtonLabel || 'options'}
          icon="menu"
          onClick={optionsButtonOnClick}
        />
      )}
    </Stack>
  </S.Container>
);
Navbar.displayName = 'Navbar';
