import { ButtonHTMLAttributes } from 'react';

import { Shortcut } from '../Shortcut';
import { Box } from '../Box';
import * as S from './styles';

export type SearchButtonProps = {
  label: string;
  shortcut?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Renders a search button component.
 *
 * @param {string} label - The label text for the button.
 * @param {string} shortcut - The shortcut key for the button.
 * @param {string} className - Additional CSS classes to apply to the button.
 * @param {object} props - Additional props to pass to the button container.
 */
export const SearchButton = ({
  label,
  shortcut,
  className,
  ...props
}: SearchButtonProps): JSX.Element => (
  <Box as="button" className={S.container({ className })} {...props}>
    {label}

    {Boolean(shortcut) && <Shortcut shortcut={shortcut || 'cmd'} />}
  </Box>
);

SearchButton.displayName = 'SearchButton';
