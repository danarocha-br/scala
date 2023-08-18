import { Box } from '../Box';
import { Icon } from '../Icon';

import * as S from './styles';

export type SelectMenuProps = {
  label: string;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
};

const SelectGroup = S.SelectGroup;
SelectGroup.displayName = 'Group';

const SelectItem = S.SelectItem;
SelectItem.displayName = 'Item';

const SelectItemText = S.SelectItemText;
SelectItemText.displayName = 'ItemText';

const SelectItemIndicator = S.SelectItemIndicator;
SelectItemIndicator.displayName = 'ItemIndicator';

const SelectMenuBase = ({
  label,
  defaultValue,
  children,
  className,
  ...props
}: SelectMenuProps): JSX.Element => (
  <Box className={className} {...props}>
    <S.SelectRoot defaultValue={defaultValue}>
      <S.SelectBox aria-label={label}>
        <S.SelectValue defaultValue={defaultValue || label} />
        <S.SelectIcon>
          <Icon
            label="open menu"
            name="chevronDown"
            size="sm"
            className='relative right-0'
          />
        </S.SelectIcon>
      </S.SelectBox>

      <S.SelectPortal>
        <S.SelectContent>
          <S.SelectScrollUpButton>
            <Icon label="open menu" name="chevronUp" />
          </S.SelectScrollUpButton>

          <S.SelectViewport>{children}</S.SelectViewport>

          <S.SelectScrollDownButton>
            <Icon label="open menu" name="chevronDown" />
          </S.SelectScrollDownButton>
        </S.SelectContent>
      </S.SelectPortal>
    </S.SelectRoot>
  </Box>
);

SelectMenuBase.displayName = 'Root';

export const SelectMenu = {
  Root: SelectMenuBase,
  Item: SelectItem,
  ItemText: SelectItemText,
  Group: SelectGroup,
  Indicator: SelectItemIndicator,
};
