export type SiteConfig = {
  name: string;
  links: {
    twitter: string;
    github: string;
    discord: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export interface Dictionary<T> {
  [key: string]: T;
}
