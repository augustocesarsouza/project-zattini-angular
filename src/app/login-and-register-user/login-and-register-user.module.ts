import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, LoginAndRegisterUserRoutingModule],
})
export class LoginAndRegisterUserModule {}
