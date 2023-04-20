'use client';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { siteConfig } from '@/config/site';
import { Locale } from '@/i18n-config';
import Link from 'next/link';

type Props = {
  lang: Locale;
};

const Header = ({ lang }: Props) => {
  return (
    <header className="top-0 z-50 bg-slate-50 border-b border-b-slate-200 h-14">
      <div className="container flex h-14 items-center justify-between px-4 py-4 relative">
        <div className="flex gap-6 md:gap-10 w-full">
          <Link href="/" className="items-center space-x-2 flex">
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
        </div>
        <LocaleSwitcher locale={lang} />
      </div>
    </header>
  );
};

export { Header };