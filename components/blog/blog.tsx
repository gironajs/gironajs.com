'use client';

import { LangDictionary } from '@/get-dictionary';
import { BlogPostItem } from '@/types/blog';
import { MDXRemote } from 'next-mdx-remote';
import SocialShareButtons from '../social-share-buttons/social-share-buttons';
import * as mdxComponents from '@/components/mdx';
import { BlogMembersList } from '@/components/members/members-list';

import { Hero } from './sections/hero';
import Comments from '../comments';

import './blog.scss'; // TODO: This styles will be global even only imported here. We should

type Props = {
  blogPostItem: BlogPostItem;
  dictionary: LangDictionary;
  lang: string;
};

export function Blog({ blogPostItem, dictionary, lang }: Props) {
  const host = `https://gironajs.com`; // TODO: Put host value on environment variables
  const getFullHref = (post: BlogPostItem) => `${host}/${post.urlPath}`;

  return (
    <div>
      <Hero {...blogPostItem.data} />
      <div className="gjs-blog-container pt-4 relative">
        <div className="gjs-blog-content">
          <MDXRemote
            {...blogPostItem.content}
            components={{ ...mdxComponents, BlogMembersList }}
          />
        </div>

        <hr></hr>
        <div className="flex items-center justify-between my-4">
          <span>{dictionary.blog.sharePost}</span>
          <SocialShareButtons
            url={getFullHref(blogPostItem)}
            title={blogPostItem.data.title}
          />
        </div>
        <Comments lang={lang} />
      </div>
    </div>
  );
}
