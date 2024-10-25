'use client';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { siteConfig } from '@/config/site';
import { Locale } from '@/i18n-config';
import Link from 'next/link';
import {
  LocalePrettyUrls,
  LocalePrettyUrlsData,
} from '@/lib/locale-pretty-urls-cache';
import { usePathname } from 'next/navigation';
import { LangDictionary } from '@/get-dictionary';
import { cn } from '@/lib/utils';

type Props = {
  lang: Locale;
  localePrettyUrlsCacheData: LocalePrettyUrlsData;
  dictionary: LangDictionary;
};

const Header = ({ lang, localePrettyUrlsCacheData, dictionary }: Props) => {
  const getLocalePrettyUrls = (
    pathName: string
  ): LocalePrettyUrls | undefined => {
    //Blogpost
    const blogpostPrettyUrl = pathName.match(/\/.*\/blog\/(.*)/)?.[1] || null;
    if (blogpostPrettyUrl) {
      const blogPostId =
        localePrettyUrlsCacheData.prettyUrlToIdMap[blogpostPrettyUrl];
      const localePrettyUrls: LocalePrettyUrls =
        localePrettyUrlsCacheData.localePrettyUrls[blogPostId];
      return localePrettyUrls;
    }
    return undefined;
  };

  const pathName = usePathname();
  const localePrettyUrls = getLocalePrettyUrls(pathName);

  const eventsTheme = pathName.match(/\/.*\/events/);

  return (
    <header className="top-0 z-50 h-14 absolute right-0 left-0">
      <div className="container flex h-14 items-center justify-between px-4 py-4 relative flex-wrap">
        <div className="flex gap-6 md:gap-10 justify-start">
          <Link href="/" className="items-center space-x-2 flex">
            <span
              className={cn(
                eventsTheme && 'text-slate-50',
                'font-bold text-xl hover:text-red-500'
              )}
            >
              {siteConfig.name}
            </span>
          </Link>
          <Link
            href={`/${lang}/blog`}
            className={cn(
              eventsTheme && 'text-slate-50',
              'items-center space-x-2 flex'
            )}
          >
            <span className="font-bold text-lg hover:text-red-500">Blog</span>
          </Link>
          <Link
            href={`/${lang}/events`}
            className={cn(
              eventsTheme && 'text-red-500',
              'items-center space-x-2 flex'
            )}
          >
            <span className="font-bold text-lg hover:text-red-500">Events</span>
          </Link>
          <Link
            href={`/${lang}/map`}
            className={cn(
              eventsTheme && 'text-slate-50',
              'items-center space-x-2 flex'
            )}
          >
            <span className="font-bold text-lg hover:text-red-500">Map</span>
          </Link>
        </div>
        <div className="mr-[56px]">
          <a
            className="block px-2 py-1 border border-transparent text-center text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-2 md:text-lg md:px-5 w-[max-content]"
            href={'https://www.meetup.com/gironajs/'}
          >
            {dictionary?.header.meetup}
          </a>
        </div>
        <LocaleSwitcher locale={lang} localeUrls={localePrettyUrls} />
      </div>
    </header>
  );
};

export { Header };
