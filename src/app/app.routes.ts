import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { UsersComponent } from './dashboard/components/users/users.component';

export const routes: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  
  },
  {
    path: 'users',loadComponent: () =>
      import('./dashboard/components/users/users.component').then(
        (m) => m.UsersComponent
      ),
  }

];
