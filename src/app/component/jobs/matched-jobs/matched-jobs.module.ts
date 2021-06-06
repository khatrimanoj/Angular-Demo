import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchedJobsRoutingModule } from './matched-jobs-routing.module';
import { MatchedJobsComponent } from './matched-jobs.component';


@NgModule({
  declarations: [MatchedJobsComponent],
  imports: [
    CommonModule,
    MatchedJobsRoutingModule
  ]
})
export class MatchedJobsModule { }
