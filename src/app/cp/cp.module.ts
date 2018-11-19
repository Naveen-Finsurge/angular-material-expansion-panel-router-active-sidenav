import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpRoutingModule } from './cp-routing.module';
import { CpComponent } from './cp.component';

@NgModule({
  declarations: [CpComponent],
  imports: [
    CommonModule,
    CpRoutingModule
  ]
})
export class CpModule { }
