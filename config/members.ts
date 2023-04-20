import { Dictionary } from '@/types';

interface Member {
  username: string; // Unique username
  name: string;
  img: string;
  twitter?: string;
  github?: string;
}

export const members: Dictionary<Member> = {
  llorenspujol: {
    username: 'llorenspujol',
    name: 'Llorenç Pujol',
    img: '/assets/images/members/llpujol.jpg',
    twitter: 'https://twitter.com/llorenspujol',
    github: 'https://github.com/llorenspujol',
  },
  eudago: {
    username: 'eudago',
    name: 'Eudald Dachs',
    img: '/assets/images/members/eudago.jpg',
    github: 'https://github.com/eudago',
  },
};
