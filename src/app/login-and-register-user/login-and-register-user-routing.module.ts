import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterNaturalComponent } from './register-natural-components/register-natural/register-natural.component';
import { FormIndividualComponent } from './register-natural-components/form-individual-components/form-individual/form-individual.component';
import { FormLegalEntityComponent } from './register-natural-components/form-legal-entity/form-legal-entity.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterNaturalComponent,
    children: [
      // { path: '', redirectTo: 'natural', pathMatch: 'full' },
      { path: 'natural', component: FormIndividualComponent },
      { path: 'legal-entity', component: FormLegalEntityComponent },
    ],
  },
  // { path: 'register', component: RegisterMainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAndRegisterUserRoutingModule {}
