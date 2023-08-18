//@ts-noCheck
import { ElementRef, forwardRef } from 'react';
import PrimitiveSelect, {
  components,
  GroupBase,
  NoticeProps,
  OptionsOrGroups,
  LoadingIndicatorProps,
  OptionProps,
  MultiValueProps,
  SingleValueProps,
} from 'react-select';
import { Button } from '@ariakit/react';

import { Icon, iconPath } from '../Icon';
import { Text } from '../Text';
import { Box } from '../Box';
import { Stack } from '../Stack';
import * as S from './styles';

export type SelectableButtonProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: keyof typeof iconPath;
  label?: string;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SelectableButton = ({
  className,
  children,
  icon,
  label,
  isActive,
  ...props
}: SelectableButtonProps): JSX.Element => (
  <Button
    className={S.buttonContainer({ isActive })}
    role="combobox"
    {...props}
  >
    {!!icon && <Icon name={icon} size="sm" label="icon" color="current" />}
    {!!label && (
      <Text size="sm" color="current">
        {label}
      </Text>
    )}
    {children && children}
  </Button>
);

SelectableButton.displayName = 'Button';

type Option = {
  readonly label: string;
  readonly value: string;
  icon?: keyof typeof iconPath;
  slot?: React.ReactNode;
};

export type SelectableMenuProps = {
  name?: string;
  value?: Option | null | undefined;
  noOptionMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  setValue?: () => void;
  isMulti: boolean;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  className?: string;
};

export const SelectableMenu = forwardRef<
  ElementRef<typeof PrimitiveSelect>,
  SelectableMenuProps
>(
  (
    {
      name,
      disabled = false,
      loading = false,
      isSearchable = false,
      isClearable = false,
      placeholder = 'Selecione',
      options,
      isMulti,
      noOptionMessage = 'No options found.',
      className,
      value,
      ...props
    }: SelectableMenuProps,
    ref
  ) => {
    const Option = (props: OptionProps<Option>) => {
      return (
        <components.Option {...props}>
          <Stack gap="2" align="center">
            {Boolean(props.data.slot) && props.data.slot}

            {Boolean(props.data.icon) && (
              <Icon name={props.data.icon || 'plus'} label="icon" size="sm" />
            )}

            {props.children}
          </Stack>
          {Boolean(props.isSelected) && (
            <Stack align="center" justify="center">
              <Icon
                name="check"
                label="checked"
                size="sm"
                color="caption"
                className="ml-2"
              />
            </Stack>
          )}
        </components.Option>
      );
    };

    const SingleValue = ({ children, ...props }: SingleValueProps<Option>) => (
      <components.SingleValue {...props}>
        <Stack gap="2" align="center">
          {props.data.icon && (
            <Icon name={props.data.icon} label="icon" size="sm" />
          )}
          {children}
        </Stack>
      </components.SingleValue>
    );

    const MultiValueLabel = (props: MultiValueProps<Option>) => {
      return (
        <components.MultiValueLabel {...props}>
          {props.data.slot ? props.data.slot : props.children}
        </components.MultiValueLabel>
      );
    };

    const NoOptionsMessage = (props: NoticeProps) => {
      return (
        <components.NoOptionsMessage {...props}>
          <Text as="p" color="body-lighter" align="center" className="py-2">
            {noOptionMessage}
          </Text>
        </components.NoOptionsMessage>
      );
    };

    const LoadingIndicator = (props: LoadingIndicatorProps) => {
      return <div {...props} />;
    };

    return (
      <Box className={`w-full ${className}`}>
        <Box className={S.container({ isDisabled: disabled })}>
          <PrimitiveSelect
            id={name}
            ref={ref}
            className={S.select()}
            classNamePrefix="c-selectable"
            options={options}
            isLoading={loading}
            isDisabled={disabled || loading}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            placeholder={placeholder}
            value={value}
            components={{
              Option,
              SingleValue,
              MultiValueLabel,
              NoOptionsMessage,
              LoadingIndicator,
            }}
            {...props}
          />
        </Box>
      </Box>
    );
  }
);

export const Selectable = {
  Button: SelectableButton,
  Menu: SelectableMenu,
};
