type GetWeekDaysParams = {
  short?: boolean;
  locale?: string;
};

/**
 * Generates an array of week days.
 *
 * @param {object} params - The parameters for generating the week days.
 * @param {boolean} params.short - Whether to return the week days in short format (e.g. "Mon") or not. Default is false.
 * @return {string[]} - An array of week days.
 */
export function getWeekDays({
  short = false,
  locale = 'en',
}: GetWeekDaysParams = {}) {
  // Create a new instance of Intl.DateTimeFormat to format the date
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'long' });

  // Generate an array of numbers from 0 to 6 using Array.from and map each number to a formatted week day
  const weekDays = Array.from(Array(7).keys()).map((day) =>
    formatter.format(new Date(Date.UTC(2021, 10, day)))
  );

  // Map each week day to its abbreviated form if 'short' is true, or capitalize the first letter otherwise
  return weekDays.map((weekDay) => {
    if (short) {
      return weekDay.substring(0, 3);
    }

    return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  });
}
