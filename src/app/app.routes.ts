import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {TrainingComponent} from "./training/training.component";
import {NewTrainingComponent} from "./new-training/new-training.component";
import {PastTrainingComponent} from "./past-training/past-training.component";
import {CurrentTrainingComponent} from "./current-training/current-training.component";
import {LandingComponent} from "./landing/landing.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch:"full"},
  {path: 'welcome' , component:LandingComponent},
  {path: 'login', component: LoginComponent},
  {path:'signup' , component:SignUpComponent},
  {path: 'training', component: TrainingComponent},
  //{path: 'newtraining' , component: NewTrainingComponent},
  //{path: 'pasttraining' , component: PastTrainingComponent},
  //{path: 'currenttraining' , component: CurrentTrainingComponent},
  {path: '**', redirectTo: '/welcome'}
];
