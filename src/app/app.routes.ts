import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { MeetupsPageComponent } from './features/meetups/pages/meetups.component';
import { MealsPageComponent } from './features/meals/pages/meals.component';

import { ProfileComponent } from './features/profile/pages/profile.component';

export const routes: Routes = [

    // {
    //     path:'',
    // loadChildren: () =>
    // import('./features/auth/auth.routes').then(m => m.routes)
    // },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
    {
        path:'meetups',
        component:MeetupsPageComponent,
        title: 'Meetups'
    },
    {
        path:'meals',
        component:MealsPageComponent,
        title: 'Meals'
    },

    {
        path:'profile',
        component:ProfileComponent,
        title: 'Profile'
    },
    {
        path:'**',
        redirectTo:''
    },
];
