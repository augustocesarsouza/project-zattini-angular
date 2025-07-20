import { Component } from '@angular/core';

@Component({
  selector: 'app-about-your-account',
  templateUrl: './about-your-account.component.html',
  styleUrl: './about-your-account.component.css',
  standalone: false,
})
export class AboutYourAccountComponent {
  firstClickedInputEmail = false;
  onInputEmailFocus(
    spanEmail: HTMLSpanElement,
    inputEmail: HTMLInputElement,
    spanErrorEmail: HTMLSpanElement
  ) {
    spanEmail.style.top = '-7px';
    spanEmail.style.left = '6px';
    spanEmail.style.padding = '0px 5px';

    const value = inputEmail.value;

    if (value.length <= 0 && this.firstClickedInputEmail) {
      spanEmail.style.color = 'red';
      spanEmail.style.fontWeight = '700';
    }

    this.firstClickedInputEmail = true;
  }

  onInputEmailBlur(
    spanEmail: HTMLSpanElement,
    inputEmail: HTMLInputElement,
    spanErrorEmail: HTMLSpanElement
  ) {
    const value = inputEmail.value;

    if (value.length <= 0) {
      spanEmail.style.top = '20px';
      inputEmail.style.border = 'solid 1px red';
      spanEmail.style.color = 'red';
      spanEmail.style.fontWeight = '500';
      spanErrorEmail.style.display = 'flex';
    }
  }

  canLoginEmailCorrect = false;

  onInputEmail(
    inputEmail: HTMLInputElement,
    spanErrorEmail: HTMLSpanElement,
    spanEmail: HTMLSpanElement
  ) {
    const value = inputEmail.value;

    if (!value.includes('@gmail.com')) {
      inputEmail.style.border = 'solid 1px red';
      spanEmail.style.color = 'red';
      spanEmail.style.fontWeight = '700';
      spanErrorEmail.style.display = 'flex';

      this.canLoginEmailCorrect = false;
    } else {
      inputEmail.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      spanEmail.style.color = 'black';
      spanEmail.style.fontWeight = '700';
      spanErrorEmail.style.display = 'none';
      this.canLoginEmailCorrect = true;
    }
  }

  firstClickedInputPassword = false;

  onInputPasswordFocus(
    spanPassword: HTMLSpanElement,
    inputPassword: HTMLInputElement,
    spanFieldPasswordRequired: HTMLSpanElement
  ) {
    spanPassword.style.top = '-7px';
    spanPassword.style.left = '6px';
    spanPassword.style.padding = '0px 5px';

    const value = inputPassword.value;

    if (value.length <= 0 && this.firstClickedInputPassword) {
      inputPassword.style.border = 'solid 1px red';
      spanPassword.style.color = 'red';
      spanPassword.style.fontWeight = '700';
      spanFieldPasswordRequired.style.display = 'flex';
    }

    this.firstClickedInputPassword = true;
  }

  onInputPasswordBlur(
    spanPassword: HTMLSpanElement,
    inputPassword: HTMLInputElement,
    spanFieldPasswordRequired: HTMLSpanElement
  ) {
    const value = inputPassword.value;
    spanPassword.style.top = '20px';

    if (value.length > 0) {
      spanPassword.style.top = '-7px';
    }

    if (value.length >= 6) {
      inputPassword.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      spanPassword.style.color = 'black';
      spanPassword.style.fontWeight = '700';
      spanFieldPasswordRequired.style.display = 'none';
    }
  }

  onInputPassword(
    inputPassword: HTMLInputElement,
    spanPassword: HTMLSpanElement,
    spanFieldPasswordRequired: HTMLSpanElement,
    spanFieldPasswordRequired3Caracteres: HTMLSpanElement
  ) {
    const value = inputPassword.value;

    if (value.length <= 0) {
      inputPassword.style.border = 'solid 1px red';
      spanPassword.style.color = 'red';
      spanFieldPasswordRequired.style.color = 'red';
      spanFieldPasswordRequired.style.fontWeight = '700';
      spanFieldPasswordRequired.style.display = 'flex';
      spanFieldPasswordRequired3Caracteres.style.display = 'none';
    }

    if (value.length > 0 && value.length < 6) {
      inputPassword.style.border = 'solid 1px red';
      spanPassword.style.color = 'red';
      spanFieldPasswordRequired3Caracteres.style.color = 'red';
      spanFieldPasswordRequired3Caracteres.style.fontWeight = '700';
      spanFieldPasswordRequired3Caracteres.style.display = 'flex';
      spanFieldPasswordRequired.style.display = 'none';
    }

    if (value.length >= 6) {
      spanPassword.style.color = 'black';
      inputPassword.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      spanFieldPasswordRequired.style.color = 'black';
      spanFieldPasswordRequired.style.fontWeight = '700';
      spanFieldPasswordRequired.style.display = 'none';
      spanFieldPasswordRequired3Caracteres.style.display = 'none';
    }
  }

  onClickEyeOpen(
    inputPassword: HTMLInputElement,
    containerEyeOpen: HTMLDivElement,
    containerEyeClose: HTMLDivElement
  ) {
    inputPassword.type = 'text';
    containerEyeOpen.style.display = 'none';
    containerEyeClose.style.display = 'flex';
  }

  onClickEyeClose(
    inputPassword: HTMLInputElement,
    containerEyeOpen: HTMLDivElement,
    containerEyeClose: HTMLDivElement
  ) {
    inputPassword.type = 'password';
    containerEyeClose.style.display = 'none';
    containerEyeOpen.style.display = 'flex';
  }
}
