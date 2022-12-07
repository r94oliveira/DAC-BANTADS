import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AlterarComponent } from "./alterar/alterar.component";
import { DepositarComponent } from "./depositar/depositar.component";
import { ClienteService } from "./services";


@NgModule({
  declarations: [
    AlterarComponent,
    DepositarComponent
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