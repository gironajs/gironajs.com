'use client';

import React from 'react';
import { LangDictionary } from '@/get-dictionary';
import Image from 'next/image';
import Link from 'next/link';
import { sponsors } from '@/config/sponsor';

type Props = {
  dictionary: LangDictionary;
};

export function SponsorsSection({ dictionary }: Props) {
  return (
    <div className="py-4 relative overflow-hidden">
      <div className="container px-6 py-14 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          {dictionary?.home.sponsors.title}
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 font-semibold">
          {dictionary?.home.sponsors.subtitle}
        </p>

        <div className="my-10 flex justify-center flex-wrap">
          {...sponsors.map((sponsor, index) => (
            <Link
              key={index}
              href={sponsor.url}
              target="_blank"
              className="flex items-center m-10"
            >
              <Image
                className="object-cover w-[249px]"
                src={sponsor.image.url}
                width={sponsor.image.width}
                height={sponsor.image.height}
                alt={`${sponsor.name} sponsor image`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
