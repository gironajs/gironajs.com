'use client';

import { BlogPostItem } from '@/types/blog';
import BlogListItem from './blog-list-item';
import { cn } from '@/lib/utils';

export default function BlogList({
  posts,
  className,
}: {
  posts: BlogPostItem[];
  className?: string;
}) {
  posts = [...posts]
    .filter((post) => post.data.published)
    .sort((a, b) => (a.data.publishedDate > b.data.publishedDate ? -1 : 1));

  return (
    <div
      className={cn(
        'relative grid h-full w-full grid-cols-1 gap-12 py-4 md:grid-cols-3',
        className
      )}
    >
      {posts.map((post) => (
        <BlogListItem key={post.filePath} post={post}></BlogListItem>
      ))}
    </div>
  );
}
