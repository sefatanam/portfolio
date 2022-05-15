import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Sefat Anam - Home Page'
    }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
    data: {
      title: 'Sefat Anam - Portfolio Page'
    }
  },
  {
    path: 'art',
    loadChildren: () => import('./art/art.module').then((m) => m.ArtModule),
    data: {
      title: 'Sefat Anam -  Art Page'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
