import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ClienteService } from "./services";

import { AlterarComponent } from "./alterar/alterar.component";
import { DepositarComponent } from "./depositar/depositar.component";
import { ExtratoComponent } from "./extrato/extrato.component";
import { HomeComponent } from "./home/home.component";
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';


@NgModule({
  declarations: [
    AlterarComponent,
    DepositarComponent,
    ExtratoComponent,
    HomeComponent,
    SaqueComponent,
    TransferenciaComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
  })
  export class ClienteModule { }