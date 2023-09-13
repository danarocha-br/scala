import { ElementRef, forwardRef, useCallback, useState } from 'react';

import { Box } from '../Box';
import * as S from './styles';
import { Icon, iconPath } from '../Icon';
import { VariantProps } from 'class-variance-authority';
import { Stack } from '../Stack';
import { Spinner } from '../Spinner';
import { FormErrorMessage } from '../FormErrorMessage';

export type TextareaProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  icon?: keyof typeof iconPath;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> &
  VariantProps<typeof S.textarea>;

export const Textarea = forwardRef<ElementRef<'textarea'>, TextareaProps>(
  (
    {
      name,
      cols = 1,
      rows = 4,
      icon,
      label,
      value,
      placeholder,
      disabled = false,
      loading = false,
      readOnly = false,
      className = '',
      errors,
      ...props
    }: TextareaProps,
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
            isFocused,
            hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
            isDisabled: disabled || loading,
            isReadOnly: readOnly,
            hasIcon: Boolean(icon),
            isLoading: loading,
          })}
        >
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
              <Box as="span" className="input__icon--loading absolute right-2">
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

          <textarea
            id={name}
            ref={ref}
            className={S.textarea({
              isFocused,
              isDisabled: disabled || loading,
              isReadOnly: readOnly,
            })}
            cols={cols}
            rows={rows}
            {...props}
            aria-invalid={Boolean(errors) && !areErrorsEmpty ? true : false}
            aria-label={label}
            placeholder={placeholder}
            disabled={disabled || loading}
            readOnly={readOnly}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </Box>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

Textarea.displayName = 'Textarea';
