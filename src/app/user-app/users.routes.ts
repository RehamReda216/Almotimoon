import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { MeetupsPageComponent } from './features/meetups/pages/meetups.component';
import { MealsPageComponent } from './features/meals/pages/meals.component';
import { ProfileComponent } from './features/profile/pages/profile.component';
import { BlogsComponent } from './features/blogs/blogs/blogs.component';

export const USER_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'meetups', component: MeetupsPageComponent, title: 'Meetups' },
  { path: 'meals', component: MealsPageComponent, title: 'Meals' },
  { path: 'blogs', component: BlogsComponent, title: 'Blogs' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' }
];