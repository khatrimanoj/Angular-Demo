import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: AllJobsComponent,
    data: {
      title: 'All Jobs',
      status: false
    }                                         
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllJobsRoutingModule { }
