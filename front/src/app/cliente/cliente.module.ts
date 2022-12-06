import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AlterarComponent } from './alterar/alterar.component';
import { DepositarComponent } from './depositar/depositar.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutModule } from '@angular/flex-layout';
//import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ClienteService } from './services';

@NgModule({
  declarations: [
    HomeComponent,
    AlterarComponent,
    DepositarComponent,
    ExtratoComponent,
    SaqueComponent,
    TransferenciaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  exports: [
    HomeComponent
  ], providers: [
    ClienteService
  ]
})
export class ClienteModule { }
