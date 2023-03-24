import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { LocaleSwitcher } from '@/components/locale-switcher';

import { Intro } from './components/intro';
import { Members } from './components/members';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <LocaleSwitcher locale={lang} />
      <Intro dictionary={dictionary} />
      <Members dictionary={dictionary} />
    </>
  );
}
