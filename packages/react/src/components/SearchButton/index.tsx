import { ButtonHTMLAttributes } from 'react';
import { CSS } from '../../styles';
import { Shortcut } from '../Shortcut';

import * as S from './styles';

export type SearchButtonProps = {
  label: string;
  shortcut?: string;
  css?: CSS;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Renders a search button component.
 *
 * @param {string} label - The label text for the button.
 * @param {string} shortcut - The shortcut key for the button.
 * @param {string} css - Additional CSS classes to apply to the button.
 * @param {object} props - Additional props to pass to the button container.
 */
export const SearchButton = ({
  label,
  shortcut,
  css,
  ...props
}: SearchButtonProps): JSX.Element => (
  <S.Container css={css} {...props}>
    {label}

    {Boolean(shortcut) && <Shortcut shortcut={shortcut || 'cmd'} />}
  </S.Container>
);

SearchButton.displayName = 'SearchButton';
