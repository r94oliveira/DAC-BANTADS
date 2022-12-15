import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListarTodosComponent } from './listar-todos/listar-todos.component';

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
  {
    path: 'gerente/listar-todos',
    component: ListarTodosComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'GERENTE',
    },
  },
];
