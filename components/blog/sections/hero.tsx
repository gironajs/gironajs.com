import Image from 'next/image';
import Link from 'next/link';

import ArrowRightIcon from '@/components/icons/arrow-right';
import { membersDictionary } from '@/config/member';
import { formatDatePretty } from '@/lib/date';
import { BlogPostItemData } from '@/types/blog';

export function Hero(props: Omit<BlogPostItemData, 'seo'>) {
  const { title, author: username, publishedDate, description, image } = props;

  // TODO: We may want to resolve the author on a server component to not ship all the list of members to the client.
  const author = membersDictionary[username];

  return (
    <>
      <section className="gjs-hero pt-24 pb-12 bg-slate-100 border-b-2 border-red-600">
        <div className="gjs-hero-content gjs-blog-container mx-auto mb-40">
          <div className="gjs-hero-header">
            <div className="flex items-center py-4">
              <Link
                href={`/blog`}
                className="gjs-text-hover-link text-xl flex gap-2 items-center"
              >
                <ArrowRightIcon transform="rotate(180)"></ArrowRightIcon>
                Blog
              </Link>
            </div>
          </div>
          <div className="gjs-hero-title">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight md:leading-tight">
              {title}
            </h1>
          </div>
          <div className="gjs-hero-description py-5">
            <p className="text-lg">{description}</p>
          </div>
          <div className="gjs-hero-footer flex gap-4 items-center">
            <Image
              className="w-[48px] h-[48px] rounded-full"
              alt="twitter-profile"
              src={`https://github.com/${author.github}.png`}
              width={48}
              height={48}
            />
            <span className="text-xs flex-1 font-bold">{author.name}</span>
            <span className="text-xs">{formatDatePretty(publishedDate)}</span>
          </div>
        </div>
      </section>
      <div className="max-w-[90%] mx-auto flex justify-center -mt-40">
        <Image
          className="rounded-lg shadow-lg"
          alt="post-image"
          src={image}
          width={786}
          height={500}
        />
      </div>
    </>
  );
}
