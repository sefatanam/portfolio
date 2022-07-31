export interface NavItem {
  routeLink: string;
  title: string;
}

export const NavItems: Readonly<NavItem[]> = [
  {
    routeLink: '/home',
    title: 'Home'
  },
  {
    routeLink: '/portfolio',
    title: 'Portfolio'
  },
  {
    routeLink: '/projects',
    title: 'Projects'
  },
  {
    routeLink: '/feedback',
    title: 'DM'
  }
];
