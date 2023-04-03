import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next/types';
import { getBlogFilePaths, getBlogPath } from '@/lib/blog';
import markdownToHtml from '@/lib/markdown';
import { BlogPostItem, BlogPostItemData } from '@/types/blog';
import { getMetadata } from '@/lib/seo';
import { removeFilePathExtension } from '@/lib/utils';
import { Blog } from '@/components/blog/blog';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import ArrowRightIcon from '@/components/icons/arrow-right';

export async function generateMetadata({
  params,
}: {
  params: { slug?: string; lang: Locale };
}): Promise<Metadata> {
  const postFilePath = path.join(
    getBlogPath(params.lang),
    `${params?.slug}.md`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const contentHtml = await markdownToHtml(content || '');

  const blogPostItem: BlogPostItem = {
    content: contentHtml,
    data: data as BlogPostItemData,
    filePath: `${params?.slug}.md`,
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
  const postFilePath = path.join(getBlogPath(params.lang), `${params.slug}.md`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const contentHtml = await markdownToHtml(content || '');

  const blogPostItem: BlogPostItem = {
    content: contentHtml,
    data: data as BlogPostItemData,
    filePath: `${params.slug}.md`,
    urlPath: `${params.lang}/blog/${params.slug}`,
  };

  const dictionary = await getDictionary(params.lang);

  return (
    <div className="relative">
      <div className="gjs-blog-container pt-4 relative">
        <Blog blogPostItem={blogPostItem} dictionary={dictionary}></Blog>
        <div className="flex items-center py-4">
          <ArrowRightIcon transform="rotate(180)"></ArrowRightIcon>
          <a
            href={`/${params.lang}/blog`}
            className="gjs-text-hover-link text-xl"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}
