import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSectionRoutingModule } from './left-section-routing.module';
import { LeftSectionComponent} from './left-section-component';


@NgModule({
  declarations: [LeftSectionComponent],
  imports: [
    CommonModule,
    LeftSectionRoutingModule
  ]
})
export class LeftSectionModule { }
