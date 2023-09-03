import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { Button as PrimitiveButton } from '@ariakit/react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-BR';

import { Box } from '../Box';
import { IconButton } from '../IconButton';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { Shortcut } from '../Shortcut';
import { CalendarInput } from './CalendarInput';
import { CalendarSelect } from './CalendarSelect';

import * as S from './styles';
import { getWeekDays } from '../../utils/getWeekDays';
import { formatDateToLocaleInShort } from '../../utils/formatDateToLocale';

interface CalendarWeek {
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}

type CalendarWeeks = CalendarWeek[];

export type CalendarProps = {
  className?: string;
  locale?: string;
  defaultSelected?: Date;
  selected?: Date | null;
  onSelect: (date: Date) => void;
  disabledDays?: Date[];
  disabledPastDays?: boolean;
  minDate?: Date;
  maxDate?: Date;
  hideHelpers?: boolean;
};

const useDayjsLocale = (locale: string) => {
  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);
};

export const Calendar = ({
  className,
  locale = 'en',
  selected = null,
  onSelect,
  disabledPastDays = false,
  minDate = new Date('01/01/2021'),
  maxDate = new Date('12/31/2031'),
  hideHelpers = false,
  ...props
}: CalendarProps): JSX.Element => {
  useDayjsLocale(locale);

  const calendarButtonDay = useRef(null);

  const [inputValue, setInputValue] = useState('');
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1);
  });
  const [selectedMonth, setSelectedMonth] = useState(currentDate.get('month'));
  const [selectedYear, setSelectedYear] = useState(currentDate.get('year'));

  const isToday = useMemo(() => dayjs(new Date()), []);
  const dayInOneWeek = useMemo(() => isToday.add(7, 'day'), [isToday]);
  const dayInTwoWeeks = useMemo(() => isToday.add(7 * 2, 'day'), [isToday]);
  const dayInOneMonth = useMemo(() => isToday.add(30, 'day'), [isToday]);
  const isMonthInThePast = useMemo(
    () => currentDate.isBefore(dayjs(), 'month'),
    [currentDate]
  );
  const isMonthLongerThanMaxDate = useMemo(
    () => currentDate.isAfter(maxDate, 'month'),
    [currentDate, maxDate]
  );

  const selectedDate = useMemo(() => {
    // Convert the selected date to a string in the format "mm/dd/yyyy"
    return dayjs(selected).toDate().toDateString();
  }, [selected]);

  /**
   * Generates an array of calendar weeks based on the current date and locale.
   * Each week contains an array of day objects representing each day in the week.
   * Days from the previous month and the next month that appear in the current month's first and last week are also included.
   *
   * @param {Dayjs} currentDate - The current date.
   * @param {string} locale - The locale to use for date formatting.
   * @param {boolean} disabledPastDays - Whether to disable past days.
   *
   * @returns {Array<CalendarWeek>} - An array of calendar weeks.
   */
  const calendarWeeks = useMemo(() => {
    // Generate an array of dayjs objects representing each day in the current month
    const monthDaysArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return dayjs(currentDate)
        .locale(locale)
        .set('date', i + 1);
    });

    // Get the day of the week for the first day of the current month
    const firstWeekDay = currentDate.get('day');

    // Generate an array of dayjs objects representing the days of the previous month that appear in the first week of the current month
    const fillPreviousMonthDaysArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return dayjs(currentDate)
          .locale(locale)
          .subtract(i + 1, 'day');
      })
      .reverse();

    // Get the last day of the current month
    const lastDayInCurrentMonth = dayjs(currentDate)
      .locale(locale)
      .set('date', currentDate.daysInMonth());

    // Get the day of the week for the last day of the current month
    const lastWeekDay = lastDayInCurrentMonth.get('day');

    // Generate an array of dayjs objects representing the days of the next month that appear in the last week of the current month
    const fillNextMonthDaysArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return dayjs(lastDayInCurrentMonth)
        .locale(locale)
        .add(i + 1, 'day');
    });

    // Combine all the day arrays to form the calendar days array
    const calendarDays = [
      ...fillPreviousMonthDaysArray.map((date) => {
        return { date, disabled: true };
      }),
      ...monthDaysArray.map((date) => {
        const daysInThePast = date.endOf('day').isBefore(new Date());

        return {
          date,
          disabled: disabledPastDays ? daysInThePast : false,
        };
      }),
      ...fillNextMonthDaysArray.map((date) => {
        return { date, disabled: true };
      }),
    ];

    // Reduce the calendar days array into an array of calendar weeks
    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, originalArray) => {
        const isNewWeek = i % 7 === 0;

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: originalArray.slice(i, i + 7),
          });
        }

        return weeks;
      },
      []
    );

    return calendarWeeks;
  }, [currentDate, locale, disabledPastDays]);
  const shortWeekDays = useMemo(
    () => getWeekDays({ short: true, locale }),
    [locale]
  );

  const handlePreviousMonth = useCallback(() => {
    const previousMonthDate = currentDate.subtract(1, 'month');
    setCurrentDate(previousMonthDate);
    setSelectedMonth(previousMonthDate.get('month'));
  }, [currentDate]);

  const handleNextMonth = useCallback(() => {
    const nextMonthDate = currentDate.add(1, 'month');
    setCurrentDate(nextMonthDate);
    setSelectedMonth(nextMonthDate.get('month'));
  }, [currentDate]);

  const handleDateSelection = useCallback(
    (selectedDate: dayjs.Dayjs) => {
      const date = selectedDate.toDate();

      setInputValue(selectedDate.format('MM/DD/YYYY'));

      onSelect(date);
      setSelectedMonth(selectedDate.get('month'));
      setSelectedYear(selectedDate.get('year'));
    },
    [onSelect]
  );

  const handleSetDateToToday = useCallback(() => {
    const date = isToday.toDate();
    setCurrentDate(dayjs(date).set('date', 1));
    onSelect(date);

    setSelectedMonth(isToday.get('month'));
    setSelectedYear(isToday.get('year'));
  }, [isToday, onSelect]);

  const handleSetDateInOneWeek = useCallback(() => {
    const date = dayInOneWeek.toDate();
    setCurrentDate(dayjs(date).set('date', 1));
    onSelect(date);

    setSelectedMonth(dayInOneWeek.get('month'));
    setSelectedYear(dayInOneWeek.get('year'));
  }, [dayInOneWeek, onSelect]);

  const handleSetDateInTwoWeeks = useCallback(() => {
    const date = dayInTwoWeeks.toDate();
    setCurrentDate(dayjs(date).set('date', 1));
    onSelect(date);

    setSelectedMonth(dayInTwoWeeks.get('month'));
    setSelectedYear(dayInTwoWeeks.get('year'));
  }, [dayInTwoWeeks, onSelect]);

  const handleSetDateInOneMonth = useCallback(() => {
    const date = dayInOneMonth.toDate();
    setCurrentDate(dayjs(date).set('date', 1));
    onSelect(date);

    setSelectedMonth(dayInOneMonth.get('month'));
    setSelectedYear(dayInOneMonth.get('year'));
  }, [dayInOneMonth, onSelect]);

  const handleSetMonth = useCallback(
    (selectedMonth: string) => {
      const updatedDate = currentDate.set('month', parseInt(selectedMonth));
      setCurrentDate(updatedDate);
      setSelectedMonth(parseInt(selectedMonth));
    },
    [currentDate]
  );

  const monthOptions = useMemo(() => {
    const options = [];
    for (let i = 0; i < 12; i++) {
      const month = dayjs().locale(locale).set('month', i);
      const isPastMonth = month.isBefore(dayjs(), 'month');

      options.push({
        label: month.format('MMMM'),
        value: i,
        disabled: isPastMonth,
      });
    }
    return options;
  }, [locale]);

  const handleSetYear = useCallback(
    (selectedYear: string) => {
      const updatedDate = currentDate.set('year', parseInt(selectedYear));
      setCurrentDate(updatedDate);
      setSelectedYear(parseInt(selectedYear));
    },
    [currentDate]
  );

  const yearOptions = useMemo(() => {
    const minYear = minDate ? dayjs(minDate).get('year') : dayjs().get('year');
    const maxYear = maxDate ? dayjs(maxDate).get('year') : dayjs().get('year');
    const options = [];
    for (let year = minYear; year <= maxYear; year++) {
      const isPastYear = dayjs().isAfter(dayjs().year(year), 'year');

      options.push({
        label: year.toString(),
        value: year,
        disabled: isPastYear,
      });
    }
    return options;
  }, [minDate, maxDate]);

  const formatInputValue = (dateString: string, locale: string) => {
    const parsedDate = dayjs(dateString, 'DD/MM/YYYY').locale(locale);
    return parsedDate.format('DD/MM/YYYY');
  };

  //TODO: Fix the formatting to accept locale
  //TODO: Handle focus for the buttons, check the todo.md file
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWarningMessage(null);

    const formattedValue = formatInputValue(inputValue, locale);
    const parsedDate = dayjs(formattedValue, 'DD/MM/YYYY');

    setInputValue(inputValue);

    if (parsedDate.isValid() && inputValue.trim() !== '') {
      const date = parsedDate.set('date', 1).toDate();
      if (minDate && date < minDate) {
        setCurrentDate(dayjs(minDate).set('date', 1));
        setSelectedMonth(dayjs(minDate).get('month'));
        setInputValue(dayjs(minDate).format('dd/mm/yyyy')); // Update input value to min date
        setWarningMessage(
          'The entered date was less than the minimum allowed date. It has been set to the minimum date.'
        );
      } else if (maxDate && date > maxDate) {
        setCurrentDate(dayjs(maxDate).set('date', 1));
        setSelectedMonth(dayjs(maxDate).get('month'));
        setInputValue(dayjs(maxDate).format('dd/mm/yyyy')); // Update input value to max date
        setWarningMessage(
          'The entered date was greater than the maximum allowed date. It has been set to the maximum date.'
        );
      } else {
        setCurrentDate(parsedDate.set('date', 1));
        setSelectedMonth(parsedDate.get('month'));
      }
    } else if (inputValue.length > 10) {
      // If the entered date is least than the expected format, update the calendar to the min allowed date
      setCurrentDate(dayjs(minDate).set('date', 1));
      setSelectedMonth(dayjs(minDate).get('month'));
      setInputValue(dayjs(minDate).format('dd/mm/yyyy')); // Update input value to min date
      setWarningMessage(
        'The entered date was less than the minimum allowed date. It has been set to the minimum date.'
      );

      // If the entered date is longer than the expected format, update the calendar to the max allowed date
      setCurrentDate(dayjs(maxDate).set('date', 1));
      setSelectedMonth(dayjs(maxDate).get('month'));
      setInputValue(dayjs(maxDate).format('dd/mm/yyyy')); // Update input value to max date
      setWarningMessage(
        'The entered date was greater than the maximum allowed date. It has been set to the maximum date.'
      );
    }
  };

  const handleInputBlur = () => {
    const parsedDate = dayjs(inputValue, 'dd/mm/yyyy');
    if (parsedDate.isValid()) {
      handleDateSelection(parsedDate);
    }
  };

  const DateSetterButton = ({
    label,
    date,
    onClick,
  }: {
    label: string;
    date: dayjs.Dayjs;
    onClick: () => void;
  }): JSX.Element => {
    return (
      <PrimitiveButton className={S.actionButton()} onClick={onClick}>
        <Stack as="span" align="center">
          <Icon name="calendar" size="sm" label="calendar" color="caption" />
          {label}
        </Stack>
        <Shortcut
          className="!bg-surface-color-background-subdued !text-text-color-caption"
          shortcut={formatDateToLocaleInShort(date.toDate(), locale)}
        />
      </PrimitiveButton>
    );
  };

  return (
    <Box className={S.container({ className })} {...props}>
      {!hideHelpers && (
        <Stack
          gap="1"
          direction="column"
          className="-mb-3 border-b border-surface-color-border-default px-2 py-2"
          fullWidth
        >
          <DateSetterButton
            label="Today"
            date={isToday}
            onClick={handleSetDateToToday}
          />
          <DateSetterButton
            label="In one week"
            date={dayInOneWeek}
            onClick={handleSetDateInOneWeek}
          />
          <DateSetterButton
            label="In two weeks"
            date={dayInTwoWeeks}
            onClick={handleSetDateInTwoWeeks}
          />
          <DateSetterButton
            label="In one month"
            date={dayInOneMonth}
            onClick={handleSetDateInOneMonth}
          />
        </Stack>
      )}
      <Stack align="center" gap="1" fullWidth className={S.inputContainer()}>
        <CalendarInput
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={`dd/mm/yyyy`}
          className={S.input({ hideHelpers: hideHelpers ? true : false })}
        />
      </Stack>
      <Box className={S.header()}>
        <Stack align="center" gap="3">
          <CalendarSelect
            value={selectedMonth}
            defaultValue={selectedMonth}
            onChange={(value: string) => {
              handleSetMonth(value);
            }}
            options={monthOptions}
          />

          <CalendarSelect
            value={selectedYear}
            defaultValue={selectedYear}
            onChange={(value: string) => {
              handleSetYear(value);
            }}
            options={yearOptions}
          />
        </Stack>

        <Box className={S.actions()}>
          <IconButton
            size="sm"
            icon="chevronLeft"
            label="Preview month"
            onClick={handlePreviousMonth}
            disabled={isMonthInThePast}
          />
          <IconButton
            size="sm"
            icon="chevronRight"
            label="Next month"
            onClick={handleNextMonth}
            disabled={isMonthLongerThanMaxDate}
          />
        </Box>
      </Box>

      <Box className="px-3 pb-3 pt-0">
        <Box as="table" className={S.content()}>
          <Box as="thead">
            <tr>
              {shortWeekDays.map((weekDay) => (
                <th key={weekDay}>{weekDay}.</th>
              ))}
            </tr>
          </Box>

          <Box as="tbody" role="rowgroup">
            {calendarWeeks.map(({ week, days }) => (
              <tr key={week}>
                {days.map(({ date, disabled }) => (
                  <td
                    key={date.toString()}
                    className={S.dayContainer()}
                    role="presentation"
                  >
                    <PrimitiveButton
                      role="gridcell"
                      ref={calendarButtonDay}
                      className={S.day({
                        isSelected:
                          selectedDate === date.toDate().toDateString()
                            ? true
                            : false,
                        isToday:
                          isToday.toDate().toDateString() ===
                          date.toDate().toDateString(),
                      })}
                      onClick={() => handleDateSelection(date)}
                      disabled={disabled}
                    >
                      {date.get('date')}
                    </PrimitiveButton>
                  </td>
                ))}
              </tr>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Calendar.displayName = 'Calendar';
