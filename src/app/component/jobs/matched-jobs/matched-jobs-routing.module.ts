import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchedJobsComponent } from './matched-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: MatchedJobsComponent,
    data: {
      title: 'Matched Jobs',
      status: false
    }                                         
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchedJobsRoutingModule { }
