import React, { forwardRef, useCallback, useState, ElementRef } from 'react';
import { Button } from '@ariakit/react';
import { VariantProps } from 'class-variance-authority';

import { Icon, iconPath } from '../Icon';
import { Box } from '../Box';
import { Spinner } from '../Spinner';
import { Stack } from '../Stack';
import { FormErrorMessage } from '../FormErrorMessage';

import * as S from './styles';

export type TextInputProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  icon?: keyof typeof iconPath;
  addon?: string;
  /** to change label for actions option */
  actionLabel?: string;
  /** to change icon for actions option */
  actionIcon?: keyof typeof iconPath;
  /** to show actions option */
  hasAction?: boolean;
  /** additional actions function */
  onAction?: () => void;
  variant?: 'default' | 'table';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> &
  VariantProps<typeof S.baseInputStyle>;

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  (
    {
      name,
      type,
      icon,
      label,
      value,
      placeholder,
      variant = 'default',
      disabled = false,
      loading = false,
      readOnly = false,
      hasAction = false,
      addon,
      onAction,
      actionLabel = 'Settings',
      actionIcon = 'settings',
      className = '',
      errors,
      ...props
    }: TextInputProps,
    ref
  ): JSX.Element => {
    /**
     * Get UI States
     */
    const [isFocused, setFocus] = useState(Boolean(value));

    const handleInputFocus = useCallback(() => {
      setFocus(true);
    }, [setFocus]);

    const handleInputBlur = useCallback(() => {
      if (!value || value.length > 0) {
        setFocus(false);
      }
    }, [setFocus, value]);

    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Box className={`relative w-full ${className}`}>
        <Box
          className={S.container({
            variant,
            isFocused,
            hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
            isDisabled: disabled || loading,
            isReadOnly: readOnly,
            hasIcon: Boolean(icon),
            isLoading: loading,
          })}
        >
          {hasAction && (
            <Button
              aria-label={actionLabel}
              onClick={onAction}
              type="button"
              className={`input__action ${S.settingsButton()}`}
              disabled={disabled || readOnly || loading}
            >
              {actionLabel}{' '}
              <Icon
                label="action"
                name={actionIcon}
                size="xs"
                color="current"
              />
            </Button>
          )}

          {variant !== 'table' && (
            <Box
              as="label"
              className={S.label({
                isReadOnly: readOnly,
                isDisabled: disabled || loading,
              })}
              htmlFor={name}
            >
              <Stack gap="2" align="center">
                {Boolean(icon) && (
                  <Icon
                    label="input icon"
                    name={icon || 'user'}
                    size="xs"
                    className={S.icon({ isFocused })}
                  />
                )}

                {label}
              </Stack>

              {loading && (
                <Box
                  as="span"
                  className="input__icon--loading absolute right-2"
                >
                  <Spinner size="xs" />
                </Box>
              )}

              {Boolean(errors) && !areErrorsEmpty ? (
                <Icon
                  className="input__icon--error mr-[-8px]"
                  label="error"
                  name="alert"
                  size="xs"
                  color="danger"
                />
              ) : null}
            </Box>
          )}

          {Boolean(addon) && (
            <Box
              as="span"
              className={`input__addon ${S.addon({
                isFocused,
                isTable: variant === 'table',
                isReadOnly: readOnly,
                isDisabled: disabled || loading,
              })}`}
            >
              {addon}
            </Box>
          )}

          <input
            id={name}
            ref={ref}
            className={S.baseInputStyle({
              variant,
              isFocused,
              isDisabled: disabled || loading,
              isReadOnly: readOnly,
              hasAddon: Boolean(addon),
            })}
            aria-invalid={Boolean(errors) && !areErrorsEmpty ? true : false}
            aria-label={label}
            placeholder={placeholder}
            type={type}
            disabled={disabled || loading}
            readOnly={readOnly}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={value}
            onChange={props.onChange}
            {...props}
            // tabIndex={readOnly && -1}
          />
        </Box>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

TextInput.displayName = 'TextInput';
