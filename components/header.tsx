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

type Props = {
  lang: Locale;
  localeUrlsData: LocalePrettyUrlsData;
};

const Header = ({ lang, localeUrlsData }: Props) => {
  const getLocalePrettyUrls = (
    pathName: string
  ): LocalePrettyUrls | undefined => {
    //Blogpost
    const blogpostId = pathName.match(/\/.*\/blog\/(\d*)/)?.[1] || null;
    if (blogpostId) {
      return localeUrlsData[blogpostId];
    }
    return undefined;
  };

  const pathName = usePathname();
  const localePrettyUrls = getLocalePrettyUrls(pathName);

  return (
    <header className="top-0 z-50 h-14 absolute right-0 left-0">
      <div className="container flex h-14 items-center justify-between px-4 py-4 relative">
        <div className="flex gap-6 md:gap-10 w-full justify-start">
          <Link href="/" className="items-center space-x-2 flex">
            <span className="font-bold text-xl hover:text-red-500">
              {siteConfig.name}
            </span>
          </Link>
          <Link href="/blog" className="items-center space-x-2 flex">
            <span className="font-bold text-lg hover:text-red-500">Blog</span>
          </Link>
          <Link href="/map" className="items-center space-x-2 flex">
            <span className="font-bold text-lg hover:text-red-500">Map</span>
          </Link>
        </div>
        <LocaleSwitcher locale={lang} localeUrls={localePrettyUrls} />
      </div>
    </header>
  );
};

export { Header };
