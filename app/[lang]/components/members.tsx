'use client';

import React from 'react';
import { LangDictionary } from '@/get-dictionary';
import { MembersList } from '@/components/members/members-list';

type Props = {
  dictionary: LangDictionary;
};

const Members = ({ dictionary }: Props) => {
  return (
    <div id="members" className="relative">
      <div className="container px-6 py-14 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          {dictionary.home.members.title_1}{' '}
          <span className="text-red-500 font-extrabold">
            {dictionary.home.members.title_2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 font-semibold">
          {dictionary.home.members.subtitle}
        </p>

        <MembersList classNames="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-4"></MembersList>
      </div>
    </div>
  );
};

export { Members };
