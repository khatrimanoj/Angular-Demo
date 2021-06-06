import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationStepThreeRoutingModule } from './registration-step-three-routing.module';
import { RegistrationStepThreeComponent } from './registration-step-three.component';


@NgModule({
  declarations: [RegistrationStepThreeComponent],
  imports: [
    CommonModule,
    RegistrationStepThreeRoutingModule
  ]
})
export class RegistrationStepThreeModule { }
