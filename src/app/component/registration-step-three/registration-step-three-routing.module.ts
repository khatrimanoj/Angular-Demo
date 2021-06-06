import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationStepThreeComponent } from './registration-step-three.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationStepThreeComponent,
  data: {
    status: false
  }
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationStepThreeRoutingModule { }
