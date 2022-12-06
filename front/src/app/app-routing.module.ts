import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarComponent } from './cliente/alterar/alterar.component';
import { DepositarComponent } from './cliente/depositar/depositar.component';
import { ExtratoComponent } from './cliente/extrato/extrato.component';
import { HomeComponent } from './cliente/home/home.component';
import { SaqueComponent } from './cliente/saque/saque.component';
import { TransferenciaComponent } from './cliente/transferencia/transferencia.component';

const routes: Routes = [
  // rotas cliente
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cliente/',
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
