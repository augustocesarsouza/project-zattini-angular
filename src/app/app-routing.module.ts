import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./login-and-register-user/login-and-register-user.module').then(
        (m) => m.LoginAndRegisterUserModule
      ),
  },
  {
    path: 'sportstyle',
    loadChildren: () =>
      import('./product-sportstyle/product-sportstyle.module').then(
        (m) => m.ProductSportstyleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
