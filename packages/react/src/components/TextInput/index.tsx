import React, { forwardRef, useCallback, useState, ElementRef } from 'react';

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
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
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
      className,
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
      <Box className={`w-full relative ${className}`}>
        <S.Container
          isFocused={isFocused}
          hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          isDisabled={disabled || loading}
          isReadOnly={readOnly}
          hasIcon={Boolean(icon)}
          isLoading={loading}
          variant={variant}
        >
          {hasAction && (
            <S.SettingsButton
              aria-label={actionLabel}
              onClick={onAction}
              type="button"
              className="input__action"
              disabled={disabled || readOnly || loading}
            >
              {actionLabel}{' '}
              <Icon
                label="action"
                name={actionIcon}
                size="xs"
                color="current"
              />
            </S.SettingsButton>
          )}

          {variant !== 'table' && (
            <S.Label htmlFor={name} isReadOnly={readOnly}>
              <Stack gap="1">
                {Boolean(icon) && (
                  <Icon
                    label="input icon"
                    name={icon || 'user'}
                    size="xs"
                    className="input__icon"
                  />
                )}

                {label}
              </Stack>

              {loading && (
                <Box
                  as="span"
                  className="input__icon--loading abssolute right-2"
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
            </S.Label>
          )}

          {Boolean(addon) && (
            <S.Addon
              isFocused={isFocused}
              isTable={variant === 'table'}
              isReadOnly={readOnly}
              isDisabled={disabled}
            >
              {addon}
            </S.Addon>
          )}

          <S.Input
            id={name}
            ref={ref}
            {...props}
            aria-invalid={Boolean(errors) && !areErrorsEmpty ? true : false}
            aria-label={label}
            placeholder={placeholder}
            type={type}
            disabled={disabled || loading}
            readOnly={readOnly}
            hasAddon={Boolean(addon)}
            variant={variant}
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // tabIndex={readOnly && -1}
          />
        </S.Container>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

TextInput.displayName = 'TextInput';
