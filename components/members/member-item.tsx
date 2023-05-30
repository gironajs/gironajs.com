'use client';

import React from 'react';
import Image from 'next/image';
import { Member } from '@/config/member';

type Props = {
  member: Member;
};

type MemberResource = 'github' | 'linkedin' | 'twitter' | 'web';

type MemberIcon = {
  svgContent: JSX.Element;
  viewBox: string;
  getUrl: (member: Member) => string;
  shouldRender: (member: Member) => boolean;
};

const icons: Record<MemberResource, MemberIcon> = {
  github: {
    svgContent: (
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    ),
    getUrl: (member) => `https://github.com/${member.github}`,
    viewBox: '0 0 496 512',
    shouldRender: (member) => !!member.github,
  },
  linkedin: {
    svgContent: (
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    ),
    getUrl: (member) => `https://www.linkedin.com/in/${member.linkedin}`,
    viewBox: '0 0 448 512',
    shouldRender: (member) => !!member.linkedin,
  },
  twitter: {
    svgContent: (
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    ),
    getUrl: (member) => `https://www.twitter.com/${member.twitter}`,
    viewBox: '0 0 512 512',
    shouldRender: (member) => !!member.twitter,
  },
  web: {
    svgContent: (
      <path d="M197.1 455.5c-54.6-16.1-99.8-54-125.6-103.5h70.7c13.4 43.5 34.5 77.9 54.9 103.5zm33.2-35.5c-13.6-18-27.3-40.6-37.5-68.1H319.2c-10.2 27.4-23.8 50-37.5 68.1c-8.9 11.8-17.8 21.6-25.7 29.4c-7.9-7.8-16.8-17.6-25.7-29.4zM176 256c0-17.1 1.4-33 4-48H332c2.5 15 4 30.9 4 48s-1.4 33-4 48H180c-2.5-15-4-30.9-4-48zm-44.6-48c-2.2 15.1-3.4 31.1-3.4 48s1.2 32.9 3.4 48H53.6c-3.6-15.4-5.6-31.5-5.6-48s1.9-32.6 5.6-48h77.8zm61.4-48c10.2-27.4 23.8-50 37.5-68.1c8.9-11.8 17.8-21.6 25.7-29.4c7.9 7.8 16.8 17.6 25.7 29.4c13.6 18 27.3 40.6 37.5 68.1H192.8zm187.8 48h77.8c3.6 15.4 5.6 31.5 5.6 48s-1.9 32.6-5.6 48H380.6c2.2-15.1 3.4-31.1 3.4-48s-1.2-32.9-3.4-48zm60-48H369.8c-13.4-43.5-34.5-77.9-54.9-103.5c54.6 16.1 99.8 54 125.6 103.5zm-298.4 0H71.4c25.8-49.6 71.1-87.4 125.6-103.5c-20.4 25.6-41.5 60-54.9 103.5zM314.9 455.5c20.4-25.6 41.5-60 54.9-103.5h70.7c-25.8 49.6-71.1 87.4-125.6 103.5zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    ),
    getUrl: (member) => member.website ?? '',
    viewBox: '0 0 512 512',
    shouldRender: (member) => !!member.website,
  },
};

export function MemberItem({ member }: Props) {
  return (
    <div className="flex flex-col items-center px-4 py-6 transition-colors duration-300 transform bg-white/50 border border-slate-400 rounded-xl hover:border-transparent group hover:bg-red-500">
      <div className="overflow-hidden rounded-full ring-4 ring-red-500">
        <Image
          className="object-cover transition-transform duration-300 hover:scale-125"
          src={`https://github.com/${member.github}.png`}
          alt="Member image"
          height={86}
          width={86}
        />
      </div>

      <p className="mt-4 text-lg text-center font-semibold text-gray-700 capitalize group-hover:text-white">
        {member.name}
      </p>

      <p className="mt-2 text-sm text-center text-gray-500 capitalize group-hover:text-gray-300 text-center">
        {member.role}{' '}
      </p>
      {member.company && (
        <span className="font-bold text-center text-red-500 group-hover:text-slate-200">
          {member.company}
        </span>
      )}

      <div className="flex mt-3 -mx-2">
        {Object.values(icons).map((icon, i) => {
          if (!icon.shouldRender(member)) return null;

          return (
            <a
              key={i}
              href={icon.getUrl(member)}
              className="member-item mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white transition duration-300 transform hover:-translate-y-1"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.viewBox}
                className="w-6 h-6 fill-current"
                fill="none"
              >
                {icon.svgContent}
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
}
