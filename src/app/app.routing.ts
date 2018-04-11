import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { SurveyComponent } from './survey/survey.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: RegistrationComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
