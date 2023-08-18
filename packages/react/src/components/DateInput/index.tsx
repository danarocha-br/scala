import { ElementRef, forwardRef, useCallback, useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { Box } from '../Box';
import { Icon, iconPath } from '../Icon';
import { FormErrorMessage } from '../FormErrorMessage';
import * as StyledInput from '../TextInput/styles';
import { Stack } from '../Stack';
import { Spinner } from '../Spinner';
import * as S from './styles';

export type DateInputProps = {
  name?: string;
  label?: string;
  value?: Date | null | undefined;
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
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> &
  ReactDatePickerProps;

export const DateInput = forwardRef<
  ElementRef<typeof DatePicker>,
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
      className='',
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
      <Box className='w-full !z-[1]'>
        <Box className={StyledInput.container({
          isFocused,
          hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
          isReadOnly: readOnly,
          hasIcon:Boolean(icon),
          isLoading: loading,
          variant
        })}
        >
          {variant !== 'table' && (
            <Box as='label' htmlFor={name} className={StyledInput.label({
              isReadOnly: readOnly,
            })}>
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

          <DatePicker
            id={name}
            name={name}
            ref={ref}
            aria-invalid={Boolean(errors) && !areErrorsEmpty ? true : false}
            aria-label={label}
            disabled={disabled || loading}
            readOnly={readOnly}
            // variant={variant}
            // isFocused={isFocused}
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
        </Box>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

DateInput.displayName = 'DateInput';
