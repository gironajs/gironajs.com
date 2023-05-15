export type Member = {
  name: string;
  github: string;
  linkedin?: string;
  website?: string;
  role?: string;
  company?: string;
};

const members: Member[] = [];

export { members };
