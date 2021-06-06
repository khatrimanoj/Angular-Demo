import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedJobsComponent } from './saved-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: SavedJobsComponent,
    data: {
      title: 'Saved Jobs',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedJobsRoutingModule { }
