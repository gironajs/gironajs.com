'use client';

import React from 'react';
import { members } from '@/config/member';
import { MemberItem } from './member-item';
import clsx from 'clsx';

type Props = {
  classNames?: string;
};

const BlogMembersList = () => (
  <MembersList classNames="sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3" />
);

const MembersList = ({ classNames }: Props) => {
  const randomMembers = React.useMemo(
    () => members.sort(() => 0.5 - Math.random()),
    []
  );

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-4',
        classNames ?? ''
      )}
    >
      {randomMembers.map((member, i) => (
        <MemberItem member={member} key={i}></MemberItem>
      ))}
    </div>
  );
};

export { BlogMembersList, MembersList };
