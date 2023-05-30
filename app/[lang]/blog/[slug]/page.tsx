import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next/types';
import { getBlogFilePaths, getBlogPath } from '@/lib/blog';
import markdownToHtml from '@/lib/markdown';
import { BlogPostItem, BlogPostItemData } from '@/types/blog';
import { getMetadata } from '@/lib/seo';
import { decodeMdxFilePathData, removeFilePathExtension } from '@/lib/utils';
import { Blog } from '@/components/blog/blog';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({
  params,
}: {
  params: { slug?: string; lang: Locale };
}): Promise<Metadata> {
  const filePath = `${params?.slug}.mdx`;
  const postFilePath = path.join(getBlogPath(params.lang), filePath);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const contentHtml = await markdownToHtml(content || '');

  const blogPostItem: BlogPostItem = {
    id: decodeMdxFilePathData(filePath, params.lang).id,
    content: contentHtml,
    data: data as BlogPostItemData,
    filePath: `${params?.slug}.mdx`,
    urlPath: `/blog/${params?.slug}`,
  };

  const metaTags = getMetadata(
    blogPostItem.data.seo.metatitle || blogPostItem.data.title,
    blogPostItem.data.seo.metadescription || blogPostItem.data.title,
    blogPostItem.urlPath,
    blogPostItem.data.image || blogPostItem.data.seo.image
  );

  const title = blogPostItem.data.title;
  return {
    title: title,
    ...metaTags,
  };
}

export async function generateStaticParams({
  params,
}: {
  params: { slug?: string; lang: Locale };
}) {
  return getBlogFilePaths(params.lang).map((filePath) => {
    return {
      slug: removeFilePathExtension(filePath),
    };
  });
}

export default async function Page({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const filePath = `${params?.slug}.mdx`;
  const postFilePath = path.join(getBlogPath(params.lang), filePath);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const contentHtml = await markdownToHtml(content || '');

  const blogPostItem: BlogPostItem = {
    id: decodeMdxFilePathData(filePath, params.lang).id,
    content: contentHtml,
    data: data as BlogPostItemData,
    filePath: `${params.slug}.mdx`,
    urlPath: `${params.lang}/blog/${params.slug}`,
  };

  const dictionary = await getDictionary(params.lang);

  return (
    <div className="relative">
      <Blog blogPostItem={blogPostItem} dictionary={dictionary}></Blog>
    </div>
  );
}
