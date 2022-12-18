import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ClienteDashComponent } from './cliente-dash/cliente-dash.component';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminDashComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'ADMIN',
    },
  },
  {
    path: 'admin/clientes',
    component: ClienteDashComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    data: {
      expectedRole: 'ADMIN',
    },
  }
]
