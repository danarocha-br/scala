import React, { useCallback, useMemo, useState } from 'react';
import { Button as PrimitiveButton } from '@ariakit/react';
import dayjs from 'dayjs';
// import InputMask from 'react-input-mask';

import { Box } from '../Box';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { Shortcut } from '../Shortcut';

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
  defaultMonth?: Date;
  defaultSelected?: Date;
  selected?: Date | null;
  onSelect: (date: Date) => void;
  disabledDays?: Date[];
  disabledPastDays?: boolean;
};

export const Calendar = ({
  className,
  locale = 'en',
  selected = null,
  onSelect,
  disabledPastDays = false,
  ...props
}: CalendarProps): JSX.Element => {
  dayjs.locale(locale);
  const [inputValue, setInputValue] = useState('');

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1);
  });

  const isToday = dayjs(new Date());
  const dayInOneWeek = isToday.add(7, 'day');
  const dayInTwoWeeks = isToday.add(7 * 2, 'day');
  const dayInOneMonth = isToday.add(30, 'day');

  const currentMonth = currentDate.format('MMMM');
  const currentYear = currentDate.format('YYYY');
  const selectedDate = useMemo(() => {
    return dayjs(selected).toDate().toDateString();
  }, [selected]);

  const calendarWeeks = useMemo(() => {
    const monthDaysArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return dayjs(currentDate)
        .locale(locale)
        .set('date', i + 1);
    });

    const firstWeekDay = currentDate.get('day');
    const fillPreviousMonthDaysArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return dayjs(currentDate)
          .locale(locale)
          .subtract(i + 1, 'day');
      })
      .reverse();

    const lastDayInCurrentMonth = dayjs(currentDate)
      .locale(locale)
      .set('date', currentDate.daysInMonth());

    const lastWeekDay = lastDayInCurrentMonth.get('day');

    const fillNextMonthDaysArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return dayjs(lastDayInCurrentMonth)
        .locale(locale)
        .add(i + 1, 'day');
    });

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

  const shortWeekDays = getWeekDays({ short: true, locale });

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month');
    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, 'month');
    setCurrentDate(previousMonthDate);
  }

  function handleDateSelection(selectedDate: dayjs.Dayjs) {
    const date = selectedDate.toDate();
    setInputValue(
      Intl.DateTimeFormat(locale, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }).format(date)
    );
    onSelect(date);
  }

  const handleSetDateToToday = useCallback(() => {
    const date = isToday.toDate();
    onSelect(date);
  }, [isToday, onSelect]);

  const handleSetDateInOneWeek = useCallback(() => {
    const date = dayInOneWeek.toDate();
    onSelect(date);
  }, [dayInOneWeek, onSelect]);

  const handleSetDateInTwoWeeks = useCallback(() => {
    const date = dayInTwoWeeks.toDate();
    onSelect(date);
  }, [dayInTwoWeeks, onSelect]);

  const handleSetDateInOneMonth = useCallback(() => {
    const date = dayInOneMonth.toDate();
    onSelect(date);
  }, [dayInOneMonth, onSelect]);

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
  //TODO: implement the input for calendar

  return (
    <Box className={S.container({ className })} {...props}>
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
      <Stack align="center" gap="1" fullWidth className={S.inputContainer()}>
        {/* <InputMask
          mask="99/99/9999"
          className={S.input()}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={
            isToday && !selected
              ? new Intl.DateTimeFormat(locale, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date())
              : ''
          }
        /> */}
      </Stack>
      <Box className={S.header()}>
        <Text className={S.title()}>
          {currentMonth}
          <Text as="span" color="caption">
            {currentYear}
          </Text>
        </Text>
        <Box className={S.actions()}>
          <IconButton
            size="sm"
            icon="chevronLeft"
            label="Preview month"
            onClick={handlePreviousMonth}
          />
          <IconButton
            size="sm"
            icon="chevronRight"
            label="Next month"
            onClick={handleNextMonth}
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

          <Box as="tbody">
            {calendarWeeks.map(({ week, days }) => (
              <tr key={week}>
                {days.map(({ date, disabled }) => (
                  <td key={date.toString()} className={S.dayContainer()}>
                    <PrimitiveButton
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
