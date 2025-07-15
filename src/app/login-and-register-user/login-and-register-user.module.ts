import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderMainComponent } from './header-full-components/header-main/header-main.component';
import { FormsModule } from '@angular/forms';
import { AlreadyClientComponent } from './already-client/already-client.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [LoginComponent, HeaderMainComponent, AlreadyClientComponent, CreateAccountComponent],
  imports: [CommonModule, LoginAndRegisterUserRoutingModule, FormsModule],
})
export class LoginAndRegisterUserModule {}
