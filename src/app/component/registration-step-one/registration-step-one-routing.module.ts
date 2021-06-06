import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStepOneComponent } from './registration-step-one.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationStepOneComponent,
  data: {
    title: 'home',
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationStepOneRoutingModule { }
