import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationStepFiveRoutingModule } from './registration-step-five-routing.module';
import { RegistrationStepFiveComponent } from './registration-step-five.component';


@NgModule({
  declarations: [RegistrationStepFiveComponent],
  imports: [
    CommonModule,
    RegistrationStepFiveRoutingModule
  ]
})
export class RegistrationStepFiveModule { }
