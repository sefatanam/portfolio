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
    routeLink: '/a`rt',
    title: 'Art'
  },
  {
    routeLink: '/portfolio',
    title: 'Portfolio'
  },
  {
    routeLink: '/projects',
    title: 'Projects'
  }
];
