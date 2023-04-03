import BlogList from '@/components/blog-list';
import { Locale } from '@/i18n-config';
import { getBlogPostItems } from '@/lib/blog';
import { getMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params?: { slug?: string; lang: Locale };
}) {
  const posts = getBlogPostItems(params?.lang ?? 'ca');

  return (
    <div>
      <div className="gjs-gradient-background absolute w-full h-full"></div>{' '}
      {/*Testing some POC of gradient background*/}
      <div className="container mx-auto">
        <div className="my-14">
          <h2 className="my-2 mx-2 flex-1">Blog Posts</h2>
          <BlogList posts={posts}></BlogList>
        </div>
      </div>
    </div>
  );
}

// HEAD metadata
export const metadata: Metadata = {
  ...getMetadata('Blog posts | GironaJS', `TODO`, `/blog`),
};
