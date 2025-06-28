import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { MeetupsPageComponent } from './features/meetups/pages/meetups.component';
import { MealsPageComponent } from './features/meals/pages/meals.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegistrationComponent } from './core/auth/pages/registration/registration.component';
import { ProfileComponent } from './features/profile/pages/profile.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        title: 'Home'
    },
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
        path:'login',
        component:LoginComponent,
        title: 'Login'
    },
    {
        path:'registration',
        component:RegistrationComponent,
        title: 'Registration'
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
