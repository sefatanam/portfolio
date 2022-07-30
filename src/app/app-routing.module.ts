import { Routes } from '@angular/router';
import { HomeResolver } from './resolvers/home.resolver';
import { InfoResolver } from './resolvers/info.resolver';
import { ProjectsResolver } from './resolvers/projects.resolver';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Sefat Anam - Home Page',
    resolve: {
      data: HomeResolver
    }
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./info/info.component').then((m) => m.InfoComponent),
    title: 'Sefat Anam - Portfolio Page',
    resolve: {
      data: InfoResolver
    }
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Sefat Anam -  Project Page',
    resolve: {
      data: ProjectsResolver
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
