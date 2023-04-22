'use client';

import { BlogPostItem } from '@/types/blog';
import BlogListItem from './blog-list-item';

export default function BlogList({ posts }: { posts: BlogPostItem[] }) {
  posts = [...posts]
    .filter((post) => post.data.published)
    .sort((a, b) => (a.data.publishedDate > b.data.publishedDate ? -1 : 1));

  return (
    <>
      <div className="relative w-full h-full">
        <div className="gjs-blog-container">
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <BlogListItem key={post.filePath} post={post}></BlogListItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
