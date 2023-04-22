import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

export default async function markdownToHtml(markdown: string) {
  const result = await serialize(markdown, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [],
      useDynamicImport: true,
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug,
        rehypeStringify,
      ],
    },
  });

  return result;
}
