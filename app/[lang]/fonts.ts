import { JetBrains_Mono, Inter, Source_Serif_Pro } from 'next/font/google';

export const jetbrainsFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const interFont = Inter({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const sourceSerifProFont = Source_Serif_Pro({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
});
