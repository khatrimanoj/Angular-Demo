import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsHeaderComponent } from './jobs-header/jobs-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    JobsHeaderComponent,
   // LeftSectionComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule                          ,
        RouterModule 
  ],
  exports: [
    JobsHeaderComponent,
   // LeftSectionComponent
  ]
})
export class JobsModule { }
