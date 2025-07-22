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
import { RegisterNaturalComponent } from './register-natural-components/register-natural/register-natural.component';
import { FormIndividualComponent } from './register-natural-components/form-individual-components/form-individual/form-individual.component';
import { FormLegalEntityComponent } from './register-natural-components/form-legal-entity/form-legal-entity.component';
import { InputGenericComponent } from './register-natural-components/input-generic/input-generic.component';
import { AboutYourAccountComponent } from './register-natural-components/about-your-account/about-your-account.component';
import { FormIndividualMediaSmallerComponent } from './register-natural-components/form-individual-components/form-individual-media-smaller/form-individual-media-smaller.component';
import { FormIndividualMediaGreateComponent } from './register-natural-components/form-individual-components/form-individual-media-greate/form-individual-media-greate.component';
import { CopyrightComponent } from './footer-components/copyright/copyright.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderMainComponent,
    AlreadyClientComponent,
    CreateAccountComponent,
    SocialAuthButtonsComponent,
    MethodPaymentComponent,
    RegisterNaturalComponent,
    FormIndividualComponent,
    FormLegalEntityComponent,
    InputGenericComponent,
    AboutYourAccountComponent,
    FormIndividualMediaSmallerComponent,
    FormIndividualMediaGreateComponent,
    CopyrightComponent,
  ],
  imports: [CommonModule, LoginAndRegisterUserRoutingModule, FormsModule, AllSvgModule],
})
export class LoginAndRegisterUserModule {}
