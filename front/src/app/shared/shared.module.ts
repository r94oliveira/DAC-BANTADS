import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfValidatorDirective, NumericoDirective } from './directives';

@NgModule({
  declarations: [NumericoDirective, CpfValidatorDirective],
  imports: [CommonModule],
  exports: [NumericoDirective, CpfValidatorDirective],
})
export class SharedModule {}
