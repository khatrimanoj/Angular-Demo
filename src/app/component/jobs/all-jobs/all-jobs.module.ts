import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllJobsRoutingModule } from './all-jobs-routing.module';
import { AllJobsComponent } from './all-jobs.component';


@NgModule({
  declarations: [AllJobsComponent],
  imports: [
    CommonModule,
    AllJobsRoutingModule
  ]
})
export class AllJobsModule { }
