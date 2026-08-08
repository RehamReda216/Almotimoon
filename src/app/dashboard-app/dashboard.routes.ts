import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/organizer-profile/organizer-profile.component').then(
        (m) => m.OrganizerProfileComponent
      ),
    title: 'Organizer Profile'
  },
  {
    path: 'create-meetup',
    loadComponent: () =>
      import('./pages/create-meetup/create-meetup.component').then(
        (m) => m.CreateMeetupComponent
      ),
    title: 'New Meetup'
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
    title: 'Settings'
  }
];