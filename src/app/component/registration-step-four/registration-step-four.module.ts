import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationStepFourRoutingModule } from './registration-step-four-routing.module';
import { RegistrationStepFourComponent } from './registration-step-four.component';


@NgModule({
  declarations: [RegistrationStepFourComponent],
  imports: [
    CommonModule,
    RegistrationStepFourRoutingModule
  ]
})
export class RegistrationStepFourModule { }
