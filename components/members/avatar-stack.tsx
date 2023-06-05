import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { membersDictionary } from '@/config/member';

type Props = {
  memberIds: string[];
  size: 'sm' | 'md';
};

const AvatarStack = ({ memberIds, size }: Props) => {
  const members = React.useMemo(
    () =>
      memberIds
        .map((memberId) => membersDictionary[memberId])
        .sort(() => 0.5 - Math.random()),
    [memberIds]
  );

  return (
    <div
      className={clsx(
        'flex overflow-hidden',
        size === 'md' ? '-space-x-6' : '-space-x-4'
      )}
    >
      {members.map((member) => (
        <a
          className="overflow-hidden p-1"
          href={`https://github.com/${member.github}`}
          key={member.github}
          target="_blank"
          title={member.name}
        >
          <Image
            alt="twitter-profile"
            className={clsx(
              'object-cover rounded-full inline-block rounded-full ring-2 ring-slate-100 transition-transform',
              size === 'md' ? ' w-[48px] h-[48px]' : ' w-[32px] h-[32px]'
            )}
            src={`https://github.com/${member.github}.png`}
            width={48}
            height={48}
          />
        </a>
      ))}
    </div>
  );
};

export { AvatarStack };
