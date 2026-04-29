import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./list-user/list-user.component').then(m => m.ListUserComponent),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./detail-user/detail-user.component').then(m => m.DetailUserComponent),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: "**",
    loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  }
];
