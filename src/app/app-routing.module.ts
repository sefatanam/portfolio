import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Sefat Anam - Home Page'
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./info/info.component').then((m) => m.InfoComponent),
    title: 'Sefat Anam - Portfolio Page'
  },
  {
    path: 'art',
    loadComponent: () =>
      import('./art/art.component').then((m) => m.ArtComponent),
    title: 'Sefat Anam -  Art Page'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Sefat Anam -  Project Page'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
