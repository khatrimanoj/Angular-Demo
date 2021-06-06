import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStepTwoComponent } from './registration-step-two.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationStepTwoComponent,
  data: {
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationStepTwoRoutingModule { }
