import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftSectionComponent } from './component/left-section/left-section.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'header',
    pathMatch: 'full',
    loadChildren: () => import('./component/header/header.module').then(m => m.HeaderModule)
  },
  {
    path: 'registration',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'registration-step-one',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration-step-one/registration-step-one.module').then(m => m.RegistrationStepOneModule)
  },
  {
    path: 'registration-step-two',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration-step-two/registration-step-two.module').then(m => m.RegistrationStepTwoModule)
  },
  {
    path: 'registration-step-three',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration-step-three/registration-step-three.module').then(m => m.RegistrationStepThreeModule)
  },
  {
    path: 'registration-step-four',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration-step-four/registration-step-four.module').then(m => m.RegistrationStepFourModule)
  },
  {
    path: 'registration-step-five',
    pathMatch: 'full',
    loadChildren: () => import('./component/registration-step-five/registration-step-five.module').then(m => m.RegistrationStepFiveModule)
  },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    loadChildren: () => import('./component/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'login-two',
    pathMatch: 'full',
    loadChildren: () => import('./component/login-two/login-two.module').then(m => m.LoginTwoModule)
  },
  {
    path: 'reset-password',
    pathMatch: 'full',
    loadChildren: () => import('./component/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
 
  {
    path: 'settings',
    pathMatch: 'full',
    loadChildren: () => import('./component/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'sign-up',
    pathMatch: 'full',
    loadChildren: () => import('./component/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: '',
    component: LeftSectionComponent,
    data: {
      title: 'master',
      status: false
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
        loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full',
        loadChildren: () => import('./component/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'jobs/matched-jobs',
        pathMatch: 'full',
        loadChildren: () => import('./component/jobs/matched-jobs/matched-jobs.module').then(m => m.MatchedJobsModule)
      },
      {
        path: 'jobs/saved-jobs',
        pathMatch: 'full',
        loadChildren: () => import('./component/jobs/saved-jobs/saved-jobs.module').then(m => m.SavedJobsModule)
      },
      {
        path: 'jobs/all-jobs',
        pathMatch: 'full',
        loadChildren: () => import('./component/jobs/all-jobs/all-jobs.module').then(m => m.AllJobsModule)
      },
     
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
