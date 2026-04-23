import { Routes } from '@angular/router';

import { HomeComponent } from './user-app/features/home/pages/home.component';
import { MeetupsPageComponent } from './user-app/features/meetups/pages/meetups.component';
import { MealsPageComponent } from './user-app/features/meals/pages/meals.component';
import { ProfileComponent } from './user-app/features/profile/pages/profile.component';
import { BlogsComponent } from './user-app/features/meetups/components/blogs/blogs.component';
import { LoginComponent } from './user-app/features/auth/components/login/login.component';

export const routes: Routes = [
  // {
  //     path:'',
  // loadChildren: () =>
  // import('./features/auth/auth.routes').then(m => m.routes)
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'meetups',
    component: MeetupsPageComponent,
    title: 'Meetups',
  },
  {
    path: 'meals',
    component: MealsPageComponent,
    title: 'Meals',
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    title: 'Blogs',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
