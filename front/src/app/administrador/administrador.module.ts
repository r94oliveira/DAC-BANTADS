import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ClienteDashComponent } from './cliente-dash/cliente-dash.component';


@NgModule({
  declarations: [
    AdminDashComponent,
    ClienteDashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
