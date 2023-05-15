export type Member = {
  name: string;
  github: string;
  linkedin?: string;
  website?: string;
  role?: string;
  company?: string;
};

const members: Member[] = [
  {
    name: 'Sergio Gómez',
    github: 'sergiogc9',
    role: 'Senior Software Engineer',
    company: 'Typeform',
    linkedin: 'sergiogc9',
  },
];

export { members };
