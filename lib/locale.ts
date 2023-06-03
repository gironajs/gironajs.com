import { usePathname } from 'next/navigation';

import { Locale } from '@/i18n-config';

const useGetLocale = (): Locale => {
  // Change to useParams after upgrading to Next v13.3
  const pathName = usePathname();

  const pathMatch = pathName?.match(/\/([^\/]*)\/.*$/);
  return pathMatch ? (pathMatch[1] as Locale) : 'en';
};
export { useGetLocale };
