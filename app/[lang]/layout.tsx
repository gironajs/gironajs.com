import { NavBar } from '@/components/nav-bar';
import { getDictionary, LangDictionary } from '../../get-dictionary';
import { i18n, Locale } from '../../i18n-config';
import '../../styles/globals.scss';
import { NavItem } from '../../types';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const getNavItems = (dictionary: LangDictionary['nav-bar']): NavItem[] => [
  {
    title: dictionary.home ?? 'Home',
    href: '/',
  },
  {
    title: dictionary.blog ?? 'Blog',
    href: '/blog',
    disabled: true,
  },
  {
    title: dictionary.about ?? 'About',
    href: '/about',
    disabled: true,
  },
];

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const navItems = getNavItems(dictionary['nav-bar']);

  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 bg-slate-50 border-b border-b-slate-200">
            <div className="container flex h-16 items-center justify-between py-4">
              <NavBar items={navItems} />
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
