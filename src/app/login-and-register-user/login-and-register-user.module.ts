import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderMainComponent } from './header-full-components/header-main/header-main.component';
import { FormsModule } from '@angular/forms';
import { AlreadyClientComponent } from './already-client/already-client.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { SocialAuthButtonsComponent } from './footer-components/social-auth-buttons/social-auth-buttons.component';
import { MethodPaymentComponent } from './footer-components/method-payment/method-payment.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderMainComponent,
    AlreadyClientComponent,
    CreateAccountComponent,
    SocialAuthButtonsComponent,
    MethodPaymentComponent,
  ],
  imports: [CommonModule, LoginAndRegisterUserRoutingModule, FormsModule, AllSvgModule],
})
export class LoginAndRegisterUserModule {}
