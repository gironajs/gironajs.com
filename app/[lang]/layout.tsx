import { Header } from '@/components/header';

import { i18n, Locale } from '../../i18n-config';
import '@/styles/globals.scss';
import '@/styles/prism-themes/prism-material-oceanic.css';
import { jetbrainsFont, interFont, sourceSerifProFont } from './fonts';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Girona JS</title>
      </head>

      <body
        className={`${interFont.className} ${interFont.variable} ${jetbrainsFont.variable} ${sourceSerifProFont.variable}`}
      >
        <div className="flex min-h-screen flex-col">
          <Header lang={params.lang}></Header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
