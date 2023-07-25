'use client';

import Giscus from '@giscus/react';

export interface CommentsProps {
  lang?: string;
}

const Comments = ({ lang }: CommentsProps) => {
  return (
    <Giscus
      repo="gironajs/gironajs.com"
      repoId="R_kgDOJGXldQ"
      category="Announcements"
      categoryId="DIC_kwDOJGXldc4CYEIX"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang={lang || 'ca'}
      loading="lazy"
    />
  );
};

export default Comments;
