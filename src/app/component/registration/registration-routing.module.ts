import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [ {
  path: '',
  component: RegistrationComponent,
  data: {
    title: 'Registration',
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
