import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStepFiveComponent } from './registration-step-five.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationStepFiveComponent,
  data: {
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationStepFiveRoutingModule { }
