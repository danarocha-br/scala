import * as PrimitiveSelect from '@radix-ui/react-select';
import { Box } from '../Box';
import { Icon } from '../Icon';

import * as S from './styles';

export type SelectMenuProps = {
  label: string;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
};

const SelectGroup = PrimitiveSelect.Group;
SelectGroup.displayName = 'Group';

const SelectItem = ({ ...props }: PrimitiveSelect.SelectItemProps) => (
  <PrimitiveSelect.Item className={S.selectItem()} {...props} />
);
SelectItem.displayName = 'Item';

const SelectItemText = ({ ...props }: PrimitiveSelect.SelectItemTextProps) => (
  <PrimitiveSelect.ItemText className={S.selectItemText()} {...props} />
);
SelectItemText.displayName = 'ItemText';

const SelectItemIndicator = ({
  ...props
}: PrimitiveSelect.SelectItemIndicatorProps) => (
  <PrimitiveSelect.SelectItemIndicator
    className={S.selectItemIndicator()}
    {...props}
  />
);
SelectItemIndicator.displayName = 'ItemIndicator';

const SelectMenuBase = ({
  label,
  defaultValue,
  children,
  className,
  ...props
}: SelectMenuProps): JSX.Element => (
  <Box className={className} {...props}>
    <PrimitiveSelect.Root defaultValue={defaultValue}>
      <PrimitiveSelect.SelectTrigger
        className={S.selectBox()}
        aria-label={label}
      >
        <PrimitiveSelect.Value defaultValue={defaultValue || label} />
        <PrimitiveSelect.Icon>
          <Icon
            label="open menu"
            name="chevronDown"
            size="sm"
            className="relative right-0"
          />
        </PrimitiveSelect.Icon>
      </PrimitiveSelect.SelectTrigger>

      <PrimitiveSelect.Portal>
        <PrimitiveSelect.Content className={S.selectContent()}>
          <PrimitiveSelect.ScrollUpButton className={S.selectScrollUpButton()}>
            <Icon label="open menu" name="chevronUp" />
          </PrimitiveSelect.ScrollUpButton>

          <PrimitiveSelect.Viewport className={S.selectViewport()}>
            {children}
          </PrimitiveSelect.Viewport>

          <PrimitiveSelect.ScrollUpButton className={S.selectScrollUpButton()}>
            <Icon label="open menu" name="chevronDown" />
          </PrimitiveSelect.ScrollUpButton>
        </PrimitiveSelect.Content>
      </PrimitiveSelect.Portal>
    </PrimitiveSelect.Root>
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
