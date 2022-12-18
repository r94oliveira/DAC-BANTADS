import { NgModule } from '@angular/core';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ClienteDashComponent } from './cliente-dash/cliente-dash.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbTypeaheadModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './services/admin.service';
import { ContaService } from '../conta/services/conta.service';
import { ClienteService } from '../cliente';


@NgModule({
  declarations: [
    AdminDashComponent,
    ClienteDashComponent
  ],
  providers: [AdminService, ClienteService, ContaService],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, NgbPaginationModule, NgbTypeaheadModule, NgbAccordionModule]
})
export class AdministradorModule { }
