import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AlterarComponent } from "./alterar/alterar.component";
import { ClienteService } from "./services";


@NgModule({
  declarations: [
    AlterarComponent
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