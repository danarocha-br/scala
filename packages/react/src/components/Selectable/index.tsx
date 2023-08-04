//@ts-nocheck
import { ElementRef, forwardRef } from 'react';
import {
  components,
  GroupBase,
  NoticeProps,
  OptionsOrGroups,
  LoadingIndicatorProps,
  OptionProps,
  MultiValueProps,
  SingleValueProps,
} from 'react-select';

import { CSS } from '../../styles';
import { Icon, iconPath } from '../Icon';
import { Text } from '../Text';
import { Box } from '../Box';

import * as S from './styles';
import { Stack } from '../Stack';

export type SelectableButtonProps = {
  css?: CSS;
  children?: React.ReactNode;
  icon?: keyof typeof iconPath;
  label?: string;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SelectableButton = ({
  css,
  children,
  icon,
  label,
  isActive,
  ...props
}: SelectableButtonProps): JSX.Element => (
  <S.ButtonContainer css={css} {...props} isActive={isActive} role="combobox">
    {!!icon && <Icon name={icon} size="sm" label="icon" color="current" />}
    {!!label && (
      <Text size="sm" color="current">
        {label}
      </Text>
    )}
    {children && children}
  </S.ButtonContainer>
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
  css?: CSS;
};

export const SelectableMenu = forwardRef<
  ElementRef<typeof S.CustomSelect>,
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
      css,
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
                css={{ ml: '$spacing-2' }}
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
          <Text
            as="p"
            color="body-lighter"
            align="center"
            css={{ py: '$spacing-2' }}
          >
            {noOptionMessage}
          </Text>
        </components.NoOptionsMessage>
      );
    };

    const LoadingIndicator = (props: LoadingIndicatorProps) => {
      return <div {...props} />;
    };

    return (
      <Box css={{ w: '100%', css }}>
        <S.Container isDisabled={disabled}>
          <S.CustomSelect
            id={name}
            ref={ref}
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
        </S.Container>
      </Box>
    );
  }
);

export const Selectable = {
  Button: SelectableButton,
  Menu: SelectableMenu,
};
