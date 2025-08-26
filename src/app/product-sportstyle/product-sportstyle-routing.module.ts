import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportstyleMainComponent } from './sportstyle-full-components/sportstyle-main/sportstyle-main.component';

const routes: Routes = [
  { path: '', component: SportstyleMainComponent },
  // { path: 'seila', component: LoginComponent },
  // {
  //   path: 'register',
  //   component: RegisterNaturalComponent,
  //   children: [
  //     // { path: '', redirectTo: 'natural', pathMatch: 'full' },
  //     { path: 'natural', component: FormIndividualComponent },
  //     { path: 'legal-entity', component: FormLegalEntityComponent },
  //   ],
  // },
  // { path: 'register', component: RegisterMainComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSportstyleRoutingModule {}
