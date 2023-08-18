import { Box } from '../Box';
import { IconButton } from '../IconButton';
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
  className?: string;
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
  className = '',
  ...props
}: NavbarProps) => (
  //TODO - make navbar mobile friendly
  <Box className={S.nav({ className })} {...props}>
    {Boolean(pageTitle) && (
      <Text size="lg" color="body-lighter" className="whitespace-nowrap">
        {pageTitle}
      </Text>
    )}

    {slot && (
      <Stack
        align="center"
        gap="4"
        justify="end"
        className={`flex-2 ${!pageTitle ? '' : 'px-12'}`}
      >
        {slot}
      </Stack>
    )}

    <Stack align="center" gap="2">
      <Tooltip
        content={themeButtonLabel || 'Change theme'}
        slot={<Shortcut shortcut="⌘ T" />}
      >
        <ThemeToggle isDark={isDark} onThemeChange={onThemeChange} />
      </Tooltip>

      {Boolean(optionsButtonOnClick) && (
        <IconButton
          type="button"
          size="sm"
          label={optionsButtonLabel || 'options'}
          icon="menu"
          onClick={optionsButtonOnClick}
        />
      )}
    </Stack>
  </Box>
);
Navbar.displayName = 'Navbar';
