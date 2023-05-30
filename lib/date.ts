const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function formatDatePretty(date: string | Date): string {
  const d = date instanceof Date ? date : new Date(date);
  const month = d.getMonth();
  const day = '' + d.getDate();
  const year = d.getFullYear();

  return `${MONTHS[month]} ${day}, ${year}`;
}
