import { Dictionary } from '@/types';

export type Member = {
  name: string;
  github: string;
  linkedin?: string;
  twitter?: string;
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
  {
    name: 'Llorenç Pujol',
    github: 'llorenspujol',
    role: 'Senior Frontend Developer 🎨',
    company: 'Katoid',
    linkedin: 'llorenç-pujol-ferriol-46575bb9',
    twitter: 'llorenspujol',
  },
  {
    github: 'eudago',
    name: 'Eudald Dachs',
    role: 'Senior Software Development Engineer',
    company: 'Kave Home',
    linkedin: 'eudald-dachs',
  },
  {
    github: 'JOGUI22',
    name: 'Jordi Casadevall',
    role: 'Senior Software Engineer',
    company: 'Wikiloc Outdoor Navigation',
    linkedin: 'jordi-casadevall-franco',
    twitter: 'JOGUI22',
    website: 'https://jordi.casa',
  },
];

const membersDictionary: Dictionary<Member> = members.reduce(
  (acc, cur) => ({ ...acc, [cur.github]: cur }),
  {}
);

export { members, membersDictionary };
