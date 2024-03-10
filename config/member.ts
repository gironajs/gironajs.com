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
  {
    github: 'aleix10kst',
    name: 'Aleix Canet',
    role: 'Angular Lead',
    company: 'Zartis',
    twitter: 'aleix10kst',
    linkedin: 'aleix-canet-vidal',
    website: 'https://aleixcanet.dev',
  },
  {
    github: 'Carles-Piqueras',
    name: 'Carles Piqueras',
    role: 'Full-Stack Developer',
    company: 'Nexus Geographics',
    linkedin: 'carles-piqueras-carreras',
  },
  {
    github: 'biels',
    name: 'Biel Simon',
    role: 'Senior Javascipt Engineer',
    company: 'UserTesting',
    twitter: 'biel_simon',
    linkedin: 'biel-simon-16554760',
  },
  {
    github: 'mcmontseny',
    name: 'Marc Casamitjana',
    role: 'Frontend Developer',
    company: 'Kave Home',
    linkedin: 'mcmontseny',
  },
  {
    github: 'PolMuri',
    name: 'Pol Murillas',
    role: 'SysAdmin',
    linkedin: 'pol-murillas-ledesma-29b23b241',
  },
];

const membersDictionary: Dictionary<Member> = members.reduce(
  (acc, cur) => ({ ...acc, [cur.github]: cur }),
  {}
);

export { members, membersDictionary };
