import { Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home.component';
import { MeetupsPageComponent } from '../meetups/pages/meetups.component';
import { MealsPageComponent } from '../meals/pages/meals.component';
import { ProfileComponent } from '../profile/pages/profile.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { BlogsComponent } from '../blogs/blogs/blogs.component';

export const routes: Routes = [
  // Auth routes - should come first

  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },
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
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
