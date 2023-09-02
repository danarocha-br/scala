export function formatDateToLocaleInShort(date: Date, locale: string): string {
  return Intl.DateTimeFormat(locale, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatDateToLocaleAsNumeric(
  date: Date,
  locale: string
): string {
  return Intl.DateTimeFormat(locale, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}
