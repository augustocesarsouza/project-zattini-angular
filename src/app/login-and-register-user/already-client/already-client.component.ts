import { Component } from '@angular/core';
import { ILoginData, UserService } from '../../service/user-service/user.service';
import { SetUserLocalStorage } from '../../user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-already-client',
  standalone: false,
  templateUrl: './already-client.component.html',
  styleUrl: './already-client.component.css',
})
export class AlreadyClientComponent {
  firstClickedInputEmail = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onInputEmailFocus(
    spanEmailCpfCnpj: HTMLSpanElement,
    inputEmailCpfCnpj: HTMLInputElement,
    spanErrorEmailCpfCnpj: HTMLSpanElement
  ) {
    spanEmailCpfCnpj.style.top = '-7px';
    spanEmailCpfCnpj.style.left = '6px';
    spanEmailCpfCnpj.style.padding = '0px 5px';

    const value = inputEmailCpfCnpj.value;

    if (value.length <= 0 && this.firstClickedInputEmail) {
      spanEmailCpfCnpj.style.color = 'red';
      spanEmailCpfCnpj.style.fontWeight = '700';
    }

    this.firstClickedInputEmail = true;
  }

  keyPressed: string = '';

  onKeyDownInputEmail(event: KeyboardEvent) {
    this.keyPressed = event.key;
  }

  onInputEmailBlur(
    spanEmailCpfCnpj: HTMLSpanElement,
    inputEmailCpfCnpj: HTMLInputElement,
    spanErrorEmailCpfCnpj: HTMLSpanElement
  ) {
    const value = inputEmailCpfCnpj.value;

    if (value.length <= 0) {
      spanEmailCpfCnpj.style.top = '20px';
      inputEmailCpfCnpj.style.border = 'solid 1px red';
      spanEmailCpfCnpj.style.color = 'red';
      spanEmailCpfCnpj.style.fontWeight = '500';
      spanErrorEmailCpfCnpj.style.display = 'flex';
    }
  }

  canLoginEmailCorrect = false;

  onInputEmail(
    inputEmailCpfCnpj: HTMLInputElement,
    spanErrorEmailCpfCnpj: HTMLSpanElement,
    spanEmailCpfCnpj: HTMLSpanElement
  ) {
    const value = inputEmailCpfCnpj.value;

    if (!value.includes('@gmail.com')) {
      inputEmailCpfCnpj.style.color = 'red';
      inputEmailCpfCnpj.style.border = 'solid 1px red';
      spanEmailCpfCnpj.style.color = 'red';
      spanEmailCpfCnpj.style.fontWeight = '700';
      spanErrorEmailCpfCnpj.style.display = 'flex';

      this.canLoginEmailCorrect = false;
    } else {
      inputEmailCpfCnpj.style.color = 'black';
      inputEmailCpfCnpj.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      spanEmailCpfCnpj.style.color = 'black';
      spanEmailCpfCnpj.style.fontWeight = '700';
      spanErrorEmailCpfCnpj.style.display = 'none';
      this.canLoginEmailCorrect = true;
    }

    let thereIsLetter = false;

    for (let i = 0; i < value.length; i++) {
      const element = value[i];

      if (element !== '.' && element !== '-' && element !== '/') {
        if (isNaN(Number(element))) {
          //tem letra
          thereIsLetter = true;
        }
      }
    }

    let newValue = value.replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '');

    let whichCpfString = '';
    if (!thereIsLetter && newValue.length < 13) {
      // 212.121.221-12
      for (let i = 0; i < newValue.length; i++) {
        const element = newValue[i];
        whichCpfString += element;

        if (i === 2 || i === 5) {
          whichCpfString += '.';
        }

        if (i === 8) {
          whichCpfString += '-';
        }
      }
    } else {
      whichCpfString = value;
    }

    if (this.keyPressed === 'Backspace') {
      const valueCaracter = whichCpfString[whichCpfString.length - 1];
      if (valueCaracter === '.' || valueCaracter === '-') {
        whichCpfString = whichCpfString.slice(0, whichCpfString.length - 1);
      }
    }

    if (newValue.length === 11 || newValue.length === 14) {
      inputEmailCpfCnpj.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      spanEmailCpfCnpj.style.color = 'black';
      spanEmailCpfCnpj.style.fontWeight = '700';
      spanErrorEmailCpfCnpj.style.display = 'none';

      this.canLoginEmailCorrect = true;
    } else {
      this.canLoginEmailCorrect = false;
    }

    if (!thereIsLetter && newValue.length >= 13) {
      whichCpfString = ''; // 21.212.122/2222-23
      for (let i = 0; i < newValue.length; i++) {
        const element = newValue[i];
        whichCpfString += element;

        if (i === 1 || i === 4) {
          whichCpfString += '.';
        }

        if (i === 7) {
          whichCpfString += '/';
        }

        if (i === 11) {
          whichCpfString += '-';
        }
      }
    }

    inputEmailCpfCnpj.value = whichCpfString;
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

    if (value.length >= 3) {
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
      inputPassword.style.color = 'red';
      inputPassword.style.border = 'solid 1px red';
      spanPassword.style.color = 'red';
      spanFieldPasswordRequired.style.color = 'red';
      spanFieldPasswordRequired.style.fontWeight = '700';
      spanFieldPasswordRequired.style.display = 'flex';
      spanFieldPasswordRequired3Caracteres.style.display = 'none';
    }

    if (value.length > 0 && value.length < 3) {
      inputPassword.style.color = 'red';
      inputPassword.style.border = 'solid 1px red';
      spanPassword.style.color = 'red';
      spanFieldPasswordRequired3Caracteres.style.color = 'red';
      spanFieldPasswordRequired3Caracteres.style.fontWeight = '700';
      spanFieldPasswordRequired3Caracteres.style.display = 'flex';
      spanFieldPasswordRequired.style.display = 'none';
    }

    if (value.length >= 3) {
      inputPassword.style.color = 'black';
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

  isLoadingLogin = false;
  timeoutRef: any = null;
  userLoginDTO!: ILoginData;
  errorLogin = false;

  onClickLogin(
    inputEmailCpfCnpj: HTMLInputElement,
    spanEmailCpfCnpj: HTMLSpanElement,
    spanErrorEmailCpfCnpj: HTMLSpanElement,
    inputPassword: HTMLInputElement,
    spanPassword: HTMLSpanElement,
    spanFieldPasswordRequired: HTMLSpanElement
  ) {
    const valueInputEmail = inputEmailCpfCnpj.value;
    const valueInputPassword = inputPassword.value;

    var resultErrorEmail = this.errorInputsVerifify(
      inputEmailCpfCnpj,
      spanEmailCpfCnpj,
      spanErrorEmailCpfCnpj
    );
    var resultErrorPassword = this.errorInputsVerifify(
      inputPassword,
      spanPassword,
      spanFieldPasswordRequired
    );

    const errorEmailInvalid = this.errorEmailInvalidInput(valueInputEmail);
    const errorPasswordInvalid = this.errorPasswordInvalidInput(valueInputPassword);

    if (!resultErrorEmail && !resultErrorPassword && !errorEmailInvalid && !errorPasswordInvalid) {
      // const objLogin = {
      //   email: valueInputEmail,
      //   password: valueInputPassword,
      // };

      this.isLoadingLogin = true;

      this.userService.login(valueInputEmail, valueInputPassword).subscribe({
        next: (success) => {
          // console.log(success);

          if (this.timeoutRef) {
            clearTimeout(this.timeoutRef);
          }

          this.timeoutRef = setTimeout(() => {
            this.isLoadingLogin = false;

            const userLoginDTO = success.data;
            this.errorLogin = !userLoginDTO.passwordIsCorrect;

            console.log(userLoginDTO);
            if (userLoginDTO.passwordIsCorrect) {
              const resultUser = SetUserLocalStorage(userLoginDTO.userDTO);

              if (resultUser.isSetUserOk) {
                this.router.navigate(['/']);
              } else {
                this.router.navigate(['/login'], { queryParams: { erroWhenCreateAccount: true } });
              }
            }
          }, 500);
        },
        error: (error) => {
          if (error.status === 400) {
            console.log(error);
          }

          if (error.status !== 400) {
            localStorage.removeItem('user');
            // this.router.navigate(['/login'], { queryParams: { erroWhenCreateAccount: false } });
          }
        },
      });
    }
  }

  errorInputsVerifify(
    input: HTMLInputElement,
    span: HTMLSpanElement | null,
    spanError: HTMLSpanElement
  ) {
    const inputNameValue = input.value;

    if (inputNameValue.length <= 0) {
      if (span) {
        span.style.color = 'red';
        span.style.fontWeight = '700';
      }
      input.style.border = 'solid 1px red';
      input.style.color = 'red';
      spanError.style.display = 'flex';

      return true;
    }

    return false;
  }

  errorEmailInvalidInput(value: string) {
    if (!value.includes('@gmail.com')) {
      return true;
    }
    return false;
  }

  errorPasswordInvalidInput(value: string) {
    if (value.length < 3) {
      return true;
    }
    return false;
  }

  onClickContainerAlreadyClient() {
    this.errorLogin = false;
  }
}
