import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { NumericoDirective } from './directives';

// Pipes
import { CpfPipe } from './pipes';
import { PhonePipe } from './pipes/phone.pipe';
import { CepPipe } from './pipes/cep.pipe';

@NgModule({
  declarations: [NumericoDirective, CpfPipe, PhonePipe, CepPipe],
  imports: [CommonModule],
  exports: [NumericoDirective, CpfPipe, PhonePipe, CepPipe],
})
export class SharedModule { }
