import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';

export const GerenteRoutes: Routes = [
  {
    path: 'gerente',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'GERENTE',
    },
  },
  {
    path: 'gerente/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'GERENTE',
    },
  },
];
