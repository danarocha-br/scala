import { Button } from '@ariakit/react';
import * as S from './styles';

export type ThemeToggleProps = {
  isDark: boolean;
  onThemeChange?: () => void;
  className?: string;
};

export const ThemeToggle = ({
  className = '',
  isDark,
  onThemeChange,
}: ThemeToggleProps): JSX.Element => {
  return (
    <Button className={S.button({ className })} onClick={onThemeChange}>
      <svg
        className={S.svg({ isDark })}
        width="32px"
        height="30px"
        viewBox="0 0 32 30"
      >
        <path d="M11.8037382,22 C10.7546727,20.5 9.59626432,18.5830845 9.1810745,17 C8.13200903,13 11.8037382,9 16,9 C20.1962618,9 23.867991,13 22.8189255,17 C22.147873,19.5586678 20.6802136,21.077366 20.1962618,22" />
        <path d="M13,25 L19,25 L19,26 C19,27.6568542 17.6568542,29 16,29 L16,29 C14.3431458,29 13,27.6568542 13,26 L13,25 Z" />
        <path className={S.light({ isDark })} d="M4,15 L1,15" />
        <path className={S.light({ isDark })} d="M8,7.5 L5.5,5" />
        <path className={S.light({ isDark })} d="M16,4 L16,1" />
        <path className={S.light({ isDark })} d="M24,7.5 L26.5,5" />
        <path className={S.light({ isDark })} d="M28,15 L31,15" />
      </svg>
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
