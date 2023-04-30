export type Member = {
  name: string;
  github: string;
  linkedin?: string;
  website?: string;
  role?: string;
  company?: string;
};

// TODO! Empty list
const members: Member[] = [
  {
    name: 'Sergio Gómez',
    github: 'sergiogc9',
    role: 'Software Engineer',
    company: 'Typeform',
    linkedin: 'sergiogc9',
  },
  {
    name: 'Llorenç Pujol',
    github: 'llorenspujol',
    website: 'http://gironafc.com',
  },
  {
    name: 'Sergio Gómez',
    github: 'sergiogc9',
    role: 'Software Engineer',
    company: 'Typeform',
    website: 'http://gironafc.com',
  },
  {
    name: 'Llorenç Pujol',
    github: 'llorenspujol',
    role: 'Software Engineer',
    company: 'Typeform',
    website: 'http://gironafc.com',
  },
  {
    name: 'Llorenç Pujol',
    github: 'llorenspujol',
    role: 'Software Engineer',
    company: 'Typeform',
    website: 'http://gironafc.com',
  },
  {
    name: 'Sergio Gómez',
    github: 'sergiogc9',
    role: 'Software Engineer',
    website: 'http://gironafc.com',
  },
];

export { members };
