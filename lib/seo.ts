import { Metadata } from 'next/types';

export function getMetadata(
  titleSEO: string,
  descriptionTextSEO: string,
  url = '',
  imgPath?: string
): Metadata {
  const host = 'https://gironajs.com'; // process.env.HOST;

  const defaultImagePath = '/assets/todo.png';
  imgPath = imgPath || defaultImagePath;

  return {
    title: titleSEO,
    description: descriptionTextSEO,
    openGraph: {
      title: titleSEO,
      url: `${host}${url}`,
      description: descriptionTextSEO,
      siteName: 'GironaJS',
      images: [`${host}${imgPath}`],
      type: 'website',
      // locale: 'en-US'
    },
    twitter: {
      // TODO
    },
  };
}
