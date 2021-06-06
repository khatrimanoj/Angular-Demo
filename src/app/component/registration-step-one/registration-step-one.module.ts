import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationStepOneRoutingModule } from './registration-step-one-routing.module';
import { RegistrationStepOneComponent } from './registration-step-one.component';


@NgModule({
  declarations: [RegistrationStepOneComponent],
  imports: [
    CommonModule,
    RegistrationStepOneRoutingModule
  ]
})
export class RegistrationStepOneModule { }
