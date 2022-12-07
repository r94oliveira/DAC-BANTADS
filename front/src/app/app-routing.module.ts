import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlterarComponent } from './cliente';
import { DepositarComponent } from './cliente';
import { ExtratoComponent } from './cliente';
import { HomeComponent } from './cliente';
import { SaqueComponent } from './cliente';
import { TransferenciaComponent } from './cliente';

const routes: Routes = [
  // rotas cliente
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' 
  },
  {
    path: 'cliente',
    component: HomeComponent
  },
  {
    path: 'cliente/home',
    component: HomeComponent
  },
  {
    path: 'cliente/alterar',
    component: AlterarComponent
  },
  {
    path: 'cliente/depositar',
    component: DepositarComponent
  },
  {
    path: 'cliente/extrato',
    component: ExtratoComponent
  },
  {
    path: 'cliente/saque',
    component: SaqueComponent
  },
  {
    path: 'cliente/transferencia',
    component: TransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
