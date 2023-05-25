'use client';

import React from 'react';
import { LangDictionary } from '@/get-dictionary';
import BlogList from '@/components/blog-list/blog-list';
import { BlogPostItem } from '@/types/blog';

type Props = {
  dictionary: LangDictionary;
  posts: BlogPostItem[];
};

export function BlogSection({ dictionary, posts }: Props) {
  return (
    <div className="py-4 relative overflow-hidden">
      <div className="container px-6 py-14 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          {dictionary?.home.blog.title_1}{' '}
          <span className="text-red-500 font-extrabold">
            {dictionary?.home.blog.title_2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 font-semibold">
          {dictionary?.home.blog.subtitle}
        </p>
        <BlogList posts={posts}></BlogList>
      </div>
    </div>
  );
}
