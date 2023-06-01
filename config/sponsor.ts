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
];
