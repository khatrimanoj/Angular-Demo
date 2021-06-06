import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchedJobsComponent } from './matched-jobs/matched-jobs.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

const routes: Routes = [
 { path: '', redirectTo: 'saved-jobs', pathMatch: 'full' },
 
     
      {
        path: 'jobs/matched-jobs',
         component   : MatchedJobsComponent,
        loadChildren: () => import('./matched-jobs/matched-jobs.module').then(m => m.MatchedJobsModule)
      },
             
      {
        path: 'jobs/saved-jobs',
         component   : SavedJobsComponent,
        loadChildren: () => import('./saved-jobs/saved-jobs.module').then(m => m.SavedJobsModule)
      },
        {
        path: 'jobs/all-jobs',
         component   : SavedJobsComponent,
        loadChildren: () => import('./all-jobs/all-jobs.module').then(m => m.AllJobsModule)
      },
     ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

