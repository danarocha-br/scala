import { ElementRef, forwardRef, useCallback, useState } from 'react';
import { CSS } from '../../styles';
import { NumericFormatProps, NumericFormat } from 'react-number-format';

import * as StyledInput from '../TextInput/styles';
import { Icon, iconPath } from '../Icon';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Spinner } from '../Spinner';
import { FormErrorMessage } from '../FormErrorMessage';

import * as S from './styles';

export type NumberInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
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
  decimalScale?: number;
  allowNegative?: boolean;
  type?: 'text' | 'tel' | 'password';
  css?: CSS;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> &
  NumericFormatProps;

export const NumberInput = forwardRef<
  ElementRef<typeof NumericFormat>,
  NumberInputProps
>(
  ({
    name,
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
    decimalScale = 2,
    allowNegative = false,
    decimalSeparator = ',',
    type = 'text',
    css,
    errors,
    ...props
  }: NumberInputProps): JSX.Element => {
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
      <Box css={{ w: '100%', css }}>
        <StyledInput.Container
          isFocused={isFocused}
          hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          isDisabled={disabled || loading}
          isReadOnly={readOnly}
          hasIcon={Boolean(icon)}
          isLoading={loading}
          variant={variant}
        >
          {hasAction && (
            <StyledInput.SettingsButton
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
            </StyledInput.SettingsButton>
          )}

          {variant !== 'table' && (
            <StyledInput.Label htmlFor={name} isReadOnly={readOnly}>
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
                  className="input__icon--loading"
                  css={{ position: 'absolute', right: '$spacing-2' }}
                >
                  <Spinner size="xs" />
                </Box>
              )}

              {Boolean(errors) && !areErrorsEmpty ? (
                <Icon
                  className="input__icon--error"
                  label="error"
                  name="alert"
                  size="xs"
                  color="danger"
                  css={{ mr: -8 }}
                />
              ) : null}
            </StyledInput.Label>
          )}

          {Boolean(addon) && (
            <StyledInput.Addon
              isFocused={isFocused}
              isTable={variant === 'table'}
              isReadOnly={readOnly}
              isDisabled={disabled}
            >
              {addon}
            </StyledInput.Addon>
          )}

          <NumericFormat
            id={name}
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
            customInput={S.Input}
            allowLeadingZeros
            allowNegative={allowNegative}
            decimalSeparator={decimalSeparator}
            decimalScale={decimalScale}
            thousandsGroupStyle="thousand"
            thousandSeparator={props.thousandSeparator}
          />
        </StyledInput.Container>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

NumberInput.displayName = 'NumberInput';
