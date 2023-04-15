import { remarkCodeHike } from '@code-hike/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { serialize } from 'next-mdx-remote/serialize';
import theme from 'shiki/themes/dracula.json';

export default async function markdownToHtml(markdown: string) {
  const result = await serialize(markdown, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
      useDynamicImport: true,
      rehypePlugins: [rehypeSlug, rehypeStringify],
    },
  });

  return result;
}
