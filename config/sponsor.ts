export type Sponsor = {
  name: string;
  url: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};

export const sponsors: Sponsor[] = [
  {
    name: 'GironaHub',
    url: 'https://girona-hub.com/',
    image: {
      url: '/assets/sponsors/girona-hub-logo.svg',
      width: 249,
      height: 196,
    },
  },
  {
    name: 'Katoid',
    url: 'https://katoid.com/',
    image: {
      url: '/assets/sponsors/katoid-logo.png',
      width: 700,
      height: 211,
    },
  },
  {
    name: 'Kave Home',
    url: 'https://kavehome.com/',
    image: {
      url: '/assets/sponsors/kavehome-logo.png',
      width: 1957,
      height: 275,
    },
  },
];
