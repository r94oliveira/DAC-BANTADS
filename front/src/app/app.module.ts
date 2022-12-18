import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './cliente/cliente.module';
import { GerenteModule } from './gerente/gerente.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';

import { SharedModule } from './shared';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
import { CurrencyMaskConfig, CurrencyMaskModule } from "ng2-currency-mask";
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  //allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClienteModule,
    GerenteModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [
    /*{ provide: LOCALE_ID,
      useValue: 'pt-BR' } */
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
