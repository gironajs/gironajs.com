import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Intro } from './components/intro';
import { Members } from './components/members';
import { getBlogPostItems } from '@/lib/blog';
import BlogList from '@/components/blog-list';
import { LocaleSwitcher } from '@/components/locale-switcher';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const posts = getBlogPostItems(lang);
  return (
    <>
      <Intro dictionary={dictionary} />
      <Members dictionary={dictionary} />
      <LocaleSwitcher locale={lang} />
      <div className="bg-red-400 py-4">
        <div className="container mx-auto my-4">
          <h2 className=" mx-2 flex-1 text-white text-xl">Blog Posts</h2>
          <BlogList posts={posts}></BlogList>
        </div>
      </div>
    </>
  );
}
