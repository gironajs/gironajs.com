import { Locale } from '@/i18n-config';

export function formatDatePretty(
  date: string | Date,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
): string {
  const d = date instanceof Date ? date : new Date(date);

  const dateLocale = locale === 'ca' ? 'ca-CA' : 'en-US';

  return d.toLocaleDateString(dateLocale, options);
}
