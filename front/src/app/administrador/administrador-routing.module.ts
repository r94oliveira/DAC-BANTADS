import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminDashComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ADMIN',
    },
  }
]
