import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./user-app/features/auth/auth.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./user-app/features/user-layout/user-layout-routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
