'use client';

import { LangDictionary } from '@/get-dictionary';

type Props = {
  dictionary: LangDictionary;
};

const Members = ({ dictionary }: Props) => {
  return null;

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl">
        {dictionary.home.members}:
      </h2>
      {'TODO: Afegir llista de membres'}
    </div>
  );
};

export { Members };
