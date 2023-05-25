import BlogList from '@/components/blog-list/blog-list';
import DiscordIcon from '@/components/icons/discord-icon';
import GitHubIcon from '@/components/icons/github-icon';
import { siteConfig } from '@/config/site';
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
      <section className="pt-24 pb-12 bg-slate-100 border-b-2 border-red-600 font-jetbrains">
        <div className="gjs-blog-container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Blog posts
          </h1>
          <p className="text-xl text-slate-900">
            Here you can find all the blog posts published by GironaJS.
          </p>
          <br />
          <p className="text-xl text-slate-900">
            Any contribution is welcome, so if you want to write a post, please
            contact us.
          </p>

          <div className="flex flex-wrap mt-5">
            <div
              id="discord-button"
              className="shadow border border-red-500 rounded-md"
            >
              <a
                href={siteConfig.links.discord}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-500 border border-transparent leading-6 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                <span className="mr-2">Discord</span>
                <DiscordIcon />
              </a>
            </div>
            <div className="shadow border border-neutral-200 rounded-md sm:ml-3 mt-2 sm:mt-0">
              <a
                href={siteConfig.links.github}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-white border border-transparent leading-6 rounded-md hover:bg-slate-50 hover:text-black focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                <span className="mr-2">GitHub</span>
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="gjs-gradient-background absolute w-full h-full" />
        <BlogList posts={posts}></BlogList>
      </div>
    </div>
  );
}

// HEAD metadata
export const metadata: Metadata = {
  ...getMetadata('Blog posts | GironaJS', `TODO`, `/blog`),
};
