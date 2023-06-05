'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { formatDatePretty } from '@/lib/date';
import { useGetLocale } from '@/lib/locale';
import { BlogPostItem } from '@/types/blog';
import { AvatarStack } from '@/components/members/avatar-stack';

export default function BlogListItem({ post }: { post: BlogPostItem }) {
  const locale = useGetLocale();

  const memberIds = React.useMemo(
    () => post.data.authors.split(','),
    [post.data.authors]
  );

  return (
    <div className="overflow-hidden shadow-lg relative bg-white border-b border-background-100 rounded flex flex-col">
      <div className="overflow-hidden border border-background-100 cursor-pointer pb-[63%] h-0">
        <Link href={post.urlPath}>
          <Image
            className="w-full hover:scale-105 transition-transform"
            src={post.data.image}
            alt={post.data.title}
            width={786}
            height={500}
          />
        </Link>
      </div>
      <div className="px-4 py-3 flex flex-col flex-1">
        <Link href={post.urlPath} className="gjs-text-hover-link">
          <div className="font-bold text-xl mb-2">{post.data.title}</div>
        </Link>
        <div className="flex-1 my-4">
          <p
            className="text-sm"
            style={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              display: '-webkit-box',
            }}
          >
            {post.data.description}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-between">
          <AvatarStack memberIds={memberIds} size="sm" />
          <span className="text-sm">
            {formatDatePretty(post.data.publishedDate, locale)}
          </span>
        </div>
      </div>
    </div>
  );
}
