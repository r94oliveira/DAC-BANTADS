import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { GerenteService } from './services/gerente.service';

import { HomeComponent } from './home/home.component';
import { ModalRejeitarComponent } from './modal-rejeitar/modal-rejeitar.component';
import { ListarTodosComponent } from './listar-todos/listar-todos.component';
import { ModalVerClienteComponent } from './modal-ver-cliente/modal-ver-cliente.component';

@NgModule({
  declarations: [HomeComponent, ModalRejeitarComponent, ListarTodosComponent, ModalVerClienteComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  providers: [GerenteService],
})
export class GerenteModule {}
