import React, { forwardRef, useMemo, useState } from 'react';
// TODO: refactor this whole component
import { Box } from '../Box';
import { TextInput } from '../TextInput';
import { IconButton } from '../IconButton';
import { deleteButton } from '../Selectable/styles';
import { Popover } from '../Popover';
import { Calendar } from '../Calendar';
import { formatDateToLocaleInShort } from '../../utils/formatDateToLocale';

export type DateInputProps = {
  name?: string;
  label?: string;
  selected: Date | null | undefined;
  locale?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  isClearable?: boolean;
  addon?: string;
  variant?: 'default' | 'table';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
  defaultValue?: Date;
  disabledPastDays?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>;

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      name,
      label,
      placeholder,
      disabled = false,
      loading = false,
      isClearable = true,
      disabledPastDays = false,
      defaultValue,
      errors,
      className = '',
      locale = 'en',
      ...props
    }: DateInputProps,
    ref
  ): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      defaultValue || null
    );
    const [openCalendar, onCalendarStateChange] = useState(false);

    const formattedSelectedDate = useMemo(() => {
      return selectedDate && formatDateToLocaleInShort(selectedDate, locale);
    }, [locale, selectedDate]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [inputValue, setInputValue] = useState('some');
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   return setSelectedDate(e.target.value);
    // };

    console.log(formattedSelectedDate);

    return (
      <Box className={`!z-[1] w-full ${className}`}>
        <Popover.Root
          open={!disabled && openCalendar}
          onOpenChange={onCalendarStateChange}
          trigger={
            <Box className="relative">
              <TextInput
                ref={ref}
                id={name}
                name={name}
                label={label}
                placeholder={placeholder}
                icon="calendar"
                loading={loading}
                disabled={disabled}
                value={inputValue}
                errors={errors}
                // onChange={(e) => handleChange(e)}
                {...props}
              />

              {isClearable && Boolean(selectedDate) && (
                <span className="absolute right-2 top-[34px] z-10 h-4">
                  <IconButton
                    type="button"
                    icon="close"
                    label="remove selection"
                    size="xs"
                    className={deleteButton()}
                    onClick={() => setSelectedDate(null)}
                  />
                </span>
              )}
            </Box>
          }
        >
          <Popover.Content align="start" unstyled className="w-[300px] py-1">
            <Calendar
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabledPastDays={disabledPastDays}
              locale={locale}
            />
          </Popover.Content>
        </Popover.Root>
      </Box>
    );
  }
);

DateInput.displayName = 'DateInput';
