import { Lato, JetBrains_Mono, Source_Serif_Pro } from 'next/font/google';

export const jetbrainsFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const latoFont = Lato({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const sourceSerifProFont = Source_Serif_Pro({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
});
