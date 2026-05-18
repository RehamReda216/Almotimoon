import { Routes } from '@angular/router';

import { HomeComponent } from './user-app/features/home/pages/home.component';
import { MeetupsPageComponent } from './user-app/features/meetups/pages/meetups.component';
import { MealsPageComponent } from './user-app/features/meals/pages/meals.component';
import { ProfileComponent } from './user-app/features/profile/pages/profile.component';
import { BlogsComponent } from './user-app/features/meetups/components/blogs/blogs.component';
import { LoginComponent } from './user-app/features/auth/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/user-app/features/user-layout/user-layout-routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/user-app/features/auth/auth.routes').then((m) => m.routes),
  },
];
