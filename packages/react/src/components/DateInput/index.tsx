import { ElementRef, forwardRef, useCallback, useState } from 'react';
import { CSS } from '../../styles';
import { ReactDatePickerProps } from 'react-datepicker';

import { Box } from '../Box';
import { Icon, iconPath } from '../Icon';
import { FormErrorMessage } from '../FormErrorMessage';
import * as StyledInput from '../TextInput/styles';

import * as S from './styles';
import { Stack } from '../Stack';
import { Spinner } from '../Spinner';

export type DateInputProps = {
  name: string;
  label?: string;
  value: Date | null | undefined;
  selected: Date | null | undefined;
  locale?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  isClearable?: boolean;
  icon?: keyof typeof iconPath;
  addon?: string;
  variant?: 'default' | 'table';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  css?: CSS;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> &
  ReactDatePickerProps;

export const DateInput = forwardRef<
  ElementRef<typeof S.DateInput>,
  DateInputProps
>(
  (
    {
      name,
      icon,
      label,
      value,
      locale,
      placeholder,
      variant = 'default',
      disabled = false,
      loading = false,
      readOnly = false,
      isClearable = true,
      selected,
      errors,
      css,
      ...props
    }: DateInputProps,
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
      if (!value || value.toString().length > 0) {
        setFocus(false);
      }
    }, [setFocus, value]);

    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Box css={{ w: '100%', zIndex: '$1 !important', css }}>
        <S.DateContainer
          isFocused={isFocused}
          hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          isDisabled={disabled || loading}
          isReadOnly={readOnly}
          hasIcon={Boolean(icon)}
          isLoading={loading}
          variant={variant}
        >
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

          <S.DateInput
            id={name}
            name={name}
            ref={ref}
            aria-invalid={Boolean(errors) && !areErrorsEmpty ? true : false}
            aria-label={label}
            disabled={disabled || loading}
            readOnly={readOnly}
            variant={variant}
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            selected={selected}
            placeholderText={placeholder}
            isClearable={isClearable && Boolean(value) && !disabled}
            popperPlacement="bottom-end"
            locale={locale}
            // showMonthYearDropdown
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={15}
            scrollableYearDropdown
            popperModifiers={[
              {
                name: 'offset',
                options: {
                  offset: [3, 8],
                },
              },
              // {
              //   name: 'preventOverflow',
              //   options: {
              //     rootBoundary: 'viewport',
              //     tether: false,
              //     altAxis: true,
              //   },
              // },
            ]}
            {...props}
          />
        </S.DateContainer>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

DateInput.displayName = 'DateInput';
