import Script from 'next/script';

import { Header } from '@/components/header';

import { i18n, Locale } from '@/i18n-config';
import '@/styles/globals.scss';
import '@/styles/prism-themes/prism-material-oceanic.css';
import { jetbrainsFont, latoFont, sourceSerifProFont } from './fonts';
import localePrettyUrlsCache, {
  LocalePrettyUrlsData,
} from '@/lib/locale-pretty-urls-cache';

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
  const localePrettyUrlsCacheData: LocalePrettyUrlsData =
    localePrettyUrlsCache.getCacheForClientComponents();

  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${jetbrainsFont.variable} ${latoFont.className} ${latoFont.variable} ${sourceSerifProFont.variable}`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-start-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <div className="flex min-h-screen flex-col">
          <Header
            lang={params.lang}
            localePrettyUrlsCacheData={localePrettyUrlsCacheData}
            data-superjson
          ></Header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
