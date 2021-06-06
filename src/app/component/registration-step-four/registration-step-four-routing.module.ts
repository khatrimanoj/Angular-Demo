import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStepFourComponent } from './registration-step-four.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationStepFourComponent,
  data: {
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationStepFourRoutingModule { }
