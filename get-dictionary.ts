import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  ca: () => import('./dictionaries/ca.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export type LangDictionary = Awaited<ReturnType<typeof dictionaries[Locale]>>;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
