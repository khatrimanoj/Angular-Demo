import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedJobsRoutingModule } from './saved-jobs-routing.module';
import { SavedJobsComponent } from './saved-jobs.component';


@NgModule({
  declarations: [SavedJobsComponent],
  imports: [
    CommonModule,
    SavedJobsRoutingModule
  ]
})
export class SavedJobsModule { }
