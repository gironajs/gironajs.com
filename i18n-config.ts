export const i18n = {
  defaultLocale: 'ca',
  locales: ['ca', 'en'],
} as const;

export type Locale = typeof i18n['locales'][number];
