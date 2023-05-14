'use client';

import React from 'react';
import { members } from '@/config/member';
import { MemberItem } from './member-item';
import clsx from 'clsx';

type Props = {
  classNames?: string;
};

export function MembersList({ classNames }: Props) {
  const randomMembers = React.useMemo(
    () => members.sort(() => 0.5 - Math.random()),
    []
  );

  return (
    <div
      className={clsx(
        'grid grid-cols-2 gap-8 mt-8 sm:grid-cols-4',
        classNames ?? ''
      )}
    >
      {randomMembers.map((member, i) => (
        <MemberItem member={member} key={i}></MemberItem>
      ))}
    </div>
  );
}
