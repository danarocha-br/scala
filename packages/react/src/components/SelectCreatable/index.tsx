import React, { forwardRef, ElementRef } from 'react';
import { CSS } from '../../styles';
import {
  components,
  GroupBase,
  MenuProps,
  NoticeProps,
  OptionsOrGroups,
  LoadingIndicatorProps,
  DropdownIndicatorProps,
  ActionMeta,
} from 'react-select';

import { Icon, iconPath } from '../Icon';
import { FormErrorMessage } from '../FormErrorMessage';
import { Text } from '../Text';
import { Box } from '../Box';
import { Spinner } from '../Spinner';
import { Stack } from '../Stack';
import * as StyledSelect from '../Select/styles';

import * as S from './styles';

type Option = {
  readonly label: string;
  readonly value: string;
};

export type SelectCreatableProps = {
  label?: string;
  name: string;
  value: Option | null | undefined;
  noOptionMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  isSearchable?: boolean;
  cacheOptions?: boolean;
  defaultOptions?: boolean;
  isClearable?: boolean;
  onChange?: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void | undefined;
  onCreateOption?: (value: string) => void;
  setValue?: () => void;
  isMulti: boolean;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  loadOptions?:
    | ((
        inputValue: string,
        callback: (
          options: OptionsOrGroups<unknown, GroupBase<unknown>>
        ) => void
      ) => void | Promise<OptionsOrGroups<unknown, GroupBase<unknown>>>)
    | undefined;
  variant?: 'default' | 'table';
  buttonLabel?: string;
  icon?: keyof typeof iconPath;
  /**  action for the extra button on the menu options **/
  onAction?: () => void;
  actionIcon?: keyof typeof iconPath;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  css?: CSS;
};

export const SelectCreatable = forwardRef<
  ElementRef<typeof S.CustomSelect>,
  SelectCreatableProps
>(
  (
    {
      name,
      label,
      disabled = false,
      loading = false,
      isSearchable = false,
      isClearable = false,
      placeholder = 'Selecione',
      options,
      isMulti,
      variant = 'default',
      buttonLabel,
      onAction,
      actionIcon = 'plus',
      noOptionMessage = 'No options found.',
      icon,
      errors,
      css,
      value,
      ...props
    }: SelectCreatableProps,
    ref
  ) => {
    const Menu = (props: MenuProps) => {
      return (
        <components.Menu {...props}>
          <div>
            <div>{props.children}</div>
          </div>
          {Boolean(buttonLabel) && (
            <StyledSelect.ActionMenuButton onClick={onAction} type="button">
              <Icon label="icon" name={actionIcon} color="current" size="sm" />
              {buttonLabel}
            </StyledSelect.ActionMenuButton>
          )}
        </components.Menu>
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

    const DropdownIndicator = (props: DropdownIndicatorProps) => {
      return (
        <components.DropdownIndicator {...props}>
          <Icon
            name="chevronDown"
            size="sm"
            color="current"
            label="dropdown indicator"
          />
        </components.DropdownIndicator>
      );
    };

    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Box css={{ w: '100%', css }}>
        <StyledSelect.Container
          hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          isDisabled={disabled}
          isTable={variant === 'table' ? true : false}
        >
          {variant === 'default' && (
            <StyledSelect.Label htmlFor={name}>
              <Stack gap="1">
                {Boolean(icon) && (
                  <Icon
                    label="select icon"
                    name={icon ?? 'user'}
                    size="xs"
                    className="c-select__icon"
                  />
                )}
                {label}
              </Stack>
              {loading && <Spinner size="xs" css={{ mr: -2 }} />}

              {Boolean(errors) && !areErrorsEmpty && (
                <Icon
                  label="error icon"
                  name="alert"
                  size="xs"
                  color="danger"
                  className="c-select__icon--error"
                />
              )}
            </StyledSelect.Label>
          )}

          <S.CustomSelect
            id={name}
            ref={ref}
            classNamePrefix="c-select"
            options={options}
            isLoading={loading}
            isDisabled={disabled || loading}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            placeholder={placeholder}
            value={value}
            components={{
              Menu,
              NoOptionsMessage,
              LoadingIndicator,
              DropdownIndicator,
            }}
            hasButton={Boolean(buttonLabel)}
            isTable={variant === 'table'}
            {...props}
          />
        </StyledSelect.Container>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

SelectCreatable.displayName = 'SelectCreatable';
