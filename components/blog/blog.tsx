'use client';

import { members } from '@/config/members';
import { LangDictionary } from '@/get-dictionary';
import { formatDatePretty } from '@/lib/date';
import { BlogPostItem } from '@/types/blog';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import SocialShareButtons from '../social-share-buttons/social-share-buttons';
import * as mdxComponents from '@/components/mdx';
import { CH } from '@code-hike/mdx/components';

import './blog.scss'; // TODO: This styles will be global even only imported here. We should

const components = { ...mdxComponents, CH };

type Props = {
  blogPostItem: BlogPostItem;
  dictionary: LangDictionary;
};

export function Blog({ blogPostItem, dictionary }: Props) {
  const host = `https://gironajs.com`; // TODO: Put host value on environment variables
  const getFullHref = (post: BlogPostItem) => `${host}/${post.urlPath}`;

  // TODO: We may want to resolve the author on a server component to not ship all the list of members to the client.
  const author = members[blogPostItem.data.author];

  return (
    <div>
      <div>
        <h1 className="text-5xl py-4">{blogPostItem.data.title}</h1>
      </div>
      <hr></hr>
      <div className="flex my-3 justify-between">
        <div className="flex">
          <a
            className="w-[48px] h-[48px] mr-2 shrink-0"
            href={author.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="w-[48px] h-[48px] rounded-full"
              alt="twitter-profile"
              src={author.img}
              width={48}
              height={48}
            />
          </a>
          <div>
            <a
              href={author.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              <div>{author.name}</div>
            </a>
            <span className="text-xs">
              {formatDatePretty(blogPostItem.data.publishedDate)}
            </span>
          </div>
        </div>
        <SocialShareButtons
          url={getFullHref(blogPostItem)}
          title={blogPostItem.data.title}
        ></SocialShareButtons>
      </div>
      <div className="gjs-blog-content">
        <MDXRemote {...blogPostItem.content} components={components} />
      </div>

      <hr></hr>
      <div className="flex items-center justify-between my-4">
        <span>{dictionary.blog.sharePost}</span>
        <SocialShareButtons
          url={getFullHref(blogPostItem)}
          title={blogPostItem.data.title}
        ></SocialShareButtons>
      </div>
    </div>
  );
}
