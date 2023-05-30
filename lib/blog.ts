import { BlogPostItem } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { decodeMdxFilePathData } from './utils';
import { Locale } from '@/i18n-config';

// Return the blog path by language
export const getBlogPath = (lang: Locale) =>
  path.join(process.cwd(), `blog/${lang}`);

// blogFilePaths is the list of all mdx files inside the blog path directory
export const getBlogFilePaths = (lang: Locale) =>
  fs
    .readdirSync(getBlogPath(lang))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

// Pre: Should run only on the server.
export function getBlogPostItems(lang: Locale): BlogPostItem[] {
  return getBlogFilePaths(lang).map((filePath) => {
    const source = fs.readFileSync(path.join(getBlogPath(lang), filePath));
    const { content, data } = matter(source);

    const { id, urlPath } = decodeMdxFilePathData(filePath, lang);

    return {
      id,
      content,
      data,
      filePath,
      urlPath,
    } as BlogPostItem;
  });
}
