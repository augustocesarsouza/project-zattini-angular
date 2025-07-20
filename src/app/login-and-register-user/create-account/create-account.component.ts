import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: false,
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  constructor(private router: Router) {}

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

  onClickContinue(inputEmail: HTMLInputElement) {
    const value = inputEmail.value;

    if (value.includes('@gmail.com')) {
      this.router.navigate(['/auth/register/natural'], {
        queryParams: { email: value },
      });
    }
  }
}
