'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import './locale-switcher.scss';

import { i18n, Locale } from '@/i18n-config';
import ChevronDownIcon from '@/components/icons/chevron-down-icon';
import { LocalePrettyUrls } from '@/lib/locale-pretty-urls-cache';

const languages: Record<Locale, string> = {
  ca: 'Català',
  en: 'English',
};

type Props = {
  locale: Locale;
  localeUrls?: LocalePrettyUrls; //if exists, override the dynamic logic with these urls
};

const LocaleSwitcher = ({ locale, localeUrls }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    if (localeUrls) {
      //manual urls
      return localeUrls[locale];
    } else {
      //dynamic way to generate localeUrls
      const segments = pathName.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  };

  return (
    <div className="locale-switcher absolute right-0 top-0 z-20">
      <div className="flex gap-4 flex flex-col items-end p-4 pt-6">
        <div
          className={clsx(
            'locale-switcher-anchor relative cursor-pointer rounded-full border border-neutral-800 overflow-hidden transition-transform hover:scale-110',
            isOpen && 'opened'
          )}
          onClick={() => setIsOpen((o) => !o)}
          style={{ width: 24, height: 24 }}
        >
          <Image
            priority
            src={`/assets/flags/${locale}.svg`}
            height={24}
            width={24}
            alt={languages[locale]}
            className="rounded-full"
          />
          <div className="locale-switcher-anchor-arrow absolute top-0 w-full h-full flex justify-center items-center">
            <ChevronDownIcon className="mt-[2px]" />
          </div>
        </div>
      </div>

      <ul
        className={clsx(
          'mt-[-8px] pr-4 flex gap-1 flex-col items-end',
          isOpen && 'opened'
        )}
      >
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="relative group/lang-select">
              <div className="overflow-hidden cursor-pointer rounded-full border border-neutral-800 transition-transform hover:scale-110">
                <Link
                  href={redirectedPathName(locale)}
                  className="flex items-center"
                >
                  <Image
                    src={`/assets/flags/${locale}.svg`}
                    height={22}
                    width={22}
                    alt={languages[locale]}
                    title={languages[locale]}
                    className="rounded-full"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { LocaleSwitcher };
