import { useMemo, useState } from 'react';

import { Stack } from '../Stack';
import { Popover } from '../Popover';
import { Selectable } from '../Selectable';
import { IconButton } from '../IconButton';
import { Calendar } from '../Calendar';
import { Spinner } from '../Spinner';
import { formatDateToLocaleInShort } from '../../utils/formatDateToLocale';
import { deleteButton } from '../Selectable/styles';

export type DatePickerProps = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  disabledPastDays?: boolean;
  isClearable?: boolean;
  locale?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
};

export const DatePicker = ({
  className,
  placeholder = 'Pick a date',
  loading = false,
  disabled = false,
  isClearable = false,
  disabledPastDays = false,
  locale = 'en',
  errors,
}: DatePickerProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openCalendar, onCalendarStateChange] = useState(false);

  const formattedSelectedDate = useMemo(() => {
    return selectedDate && formatDateToLocaleInShort(selectedDate, locale);
  }, [locale, selectedDate]);

  const areErrorsEmpty = useMemo(
    () => Boolean(errors) && Object.keys(errors).length === 0,
    [errors]
  );

  return (
    <Stack gap="0" fullWidth className={className}>
      <Popover.Root
        open={!disabled && openCalendar}
        onOpenChange={onCalendarStateChange}
        trigger={
          <Selectable.Button
            icon="calendar"
            disabled={disabled}
            loading={loading}
            aria-expanded={openCalendar}
            hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          >
            <span>{!selectedDate ? placeholder : formattedSelectedDate}</span>

            {loading && <Spinner size="sm" className="ml-2" />}

            {isClearable && Boolean(selectedDate) && (
              <>
                <span className="h-4 border-l border-action-color-border-transparent-enabled" />
                <IconButton
                  type="button"
                  icon="close"
                  label="remove selection"
                  size="xs"
                  className={deleteButton()}
                  onClick={() => setSelectedDate(null)}
                />
              </>
            )}
          </Selectable.Button>
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
    </Stack>
  );
};

DatePicker.displayName = 'DatePicker';
