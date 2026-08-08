import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./user-app/users.routes').then(
            (m) => m.USER_ROUTES
          )
      },
      {
            path: 'dashboard',
            loadChildren: () =>
              import('./dashboard-app/dashboard.routes').then(
                (m) => m.DASHBOARD_ROUTES
              )
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/user-app/features/auth/auth.routes').then((m) => m.routes),
  },
];
