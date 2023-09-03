import * as React from 'react';
import * as PrimitiveSelect from '@radix-ui/react-select';
import { Icon } from '../Icon';
import * as S from './styles';

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

type CalendarSelectProps = {
  defaultValue: string | number;
  value: string | number;
  onChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
};

export const CalendarSelect = ({
  defaultValue,
  value,
  onChange,
  options,
}: CalendarSelectProps) => {
  return (
    <PrimitiveSelect.Root
      defaultValue={defaultValue.toString()}
      value={value.toString()}
      onValueChange={onChange}
    >
      <PrimitiveSelect.Trigger
        defaultValue={defaultValue}
        aria-label="Select"
        className={S.selectValue()}
      >
        <PrimitiveSelect.Value defaultValue={defaultValue} />
        <PrimitiveSelect.Icon>
          <Icon name="chevronDown" label="select" size="sm" color="caption" />
        </PrimitiveSelect.Icon>
      </PrimitiveSelect.Trigger>

      <PrimitiveSelect.Portal>
        <PrimitiveSelect.Content className={S.selectContainer()}>
          <PrimitiveSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-surface-color-background-default">
            <Icon name="chevronUp" label="up" size="sm" color="caption" />
          </PrimitiveSelect.ScrollUpButton>

          <PrimitiveSelect.Viewport className="p-[5px]">
            <PrimitiveSelect.Group>
              {options.map((option) => (
                <PrimitiveSelect.Item
                  key={option.value}
                  value={option.value.toString()}
                  className={S.selectItem()}
                  disabled={option.disabled}
                >
                  <PrimitiveSelect.ItemText>
                    {option.label}
                  </PrimitiveSelect.ItemText>
                </PrimitiveSelect.Item>
              ))}
            </PrimitiveSelect.Group>
          </PrimitiveSelect.Viewport>

          <PrimitiveSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-surface-color-background-default">
            <Icon name="chevronDown" label="down" size="sm" color="caption" />
          </PrimitiveSelect.ScrollDownButton>
        </PrimitiveSelect.Content>
      </PrimitiveSelect.Portal>
    </PrimitiveSelect.Root>
  );
};
