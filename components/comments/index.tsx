'use client';

import Giscus, { Repo } from '@giscus/react';

export interface CommentsProps {
  repo?: Repo;
  repoId?: string;
  category?: string;
  categoryId?: string;
}

const Comments = ({ repo, repoId, category, categoryId }: CommentsProps) => {
  if (!repo || !repoId) return null;

  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;
