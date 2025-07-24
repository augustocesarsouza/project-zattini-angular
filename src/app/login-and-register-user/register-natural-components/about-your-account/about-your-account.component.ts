import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendClickedButtonContinueRegisterService } from '../../../service-dispatch/user-register/send-clicked-button-continue-register.service';
import { GetDataUserRegisterService } from '../../../service-dispatch/user-register/get-data-user-register.service';
import { UserCreateDTO } from '../../../interface/dto/UserCreateDTO';
import { UserService } from '../../../service/user-service/user.service';
import { SetUserLocalStorage } from '../../../user-function/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-about-your-account',
  templateUrl: './about-your-account.component.html',
  styleUrl: './about-your-account.component.css',
  standalone: false,
})
export class AboutYourAccountComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sendClickedButtonContinueRegisterService: SendClickedButtonContinueRegisterService,
    private getDataUserRegisterService: GetDataUserRegisterService,
    private userService: UserService
  ) {}

  @ViewChild('inputEmail') inputEmailRef!: ElementRef<HTMLInputElement>;
  @ViewChild('spanEmail') spanEmailRef!: ElementRef<HTMLSpanElement>;
  timeoutRef: any = null;
  userCreateDTO!: UserCreateDTO;

  ngOnInit(): void {
    this.getDataUserRegisterService.valueGetData$.subscribe((value) => {
      if (value) {
        this.userCreateDTO = value;
      }
    });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        const emailUser: string = params['email'];

        if (this.timeoutRef) {
          clearTimeout(this.timeoutRef);
        }

        this.timeoutRef = setTimeout(() => {
          const inputEmail = this.inputEmailRef.nativeElement;
          inputEmail.value = emailUser;

          const spanEmail = this.spanEmailRef.nativeElement;

          spanEmail.style.top = '-7px';
          spanEmail.style.left = '6px';
          spanEmail.style.padding = '0px 5px';
        }, 20);

        // Se quiser limpar os params:
        // this.router.navigate([], {
        //   queryParams: { changePassword: null },aa
        //   queryParamsHandling: 'merge',
        //   replaceUrl: true,
        // });
      }
    });
  }

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
      inputEmail.style.color = 'black';
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
      inputPassword.style.color = 'black';
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

  @ViewChild('inputCheckboxAgreeUseMyData')
  inputCheckboxAgreeUseMyDataRef!: ElementRef<HTMLInputElement>;
  @ViewChild('spanErrorInputEmail')
  spanErrorInputEmailRef!: ElementRef<HTMLInputElement>;

  @ViewChild('inputPassword')
  inputPasswordRef!: ElementRef<HTMLInputElement>;
  @ViewChild('spanPassword')
  spanPasswordRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanFieldPasswordRequired')
  spanFieldPasswordRequiredRef!: ElementRef<HTMLSpanElement>;

  isLoadingCreation = false;

  onClickContinueCreate() {
    const inputCheckboxAgreeUseMyData = this.inputCheckboxAgreeUseMyDataRef.nativeElement;

    this.sendClickedButtonContinueRegisterService.updatevalueButton(
      inputCheckboxAgreeUseMyData.checked
    );

    if (!inputCheckboxAgreeUseMyData.checked) return;

    const inputEmail = this.inputEmailRef.nativeElement;
    const spanEmail = this.spanEmailRef.nativeElement;
    const spanErrorInputEmail = this.spanErrorInputEmailRef.nativeElement;

    const value1 = this.errorInputEmailVerifify(inputEmail, spanEmail, spanErrorInputEmail);
    // fazer validação do password agora "userCreateDTO" e colocar aqui email e password

    const inputPassword = this.inputPasswordRef.nativeElement;
    const spanPassword = this.spanPasswordRef.nativeElement;
    const spanFieldPasswordRequired = this.spanFieldPasswordRequiredRef.nativeElement;
    const inputPasswordValue = inputPassword.value;

    const value2 = inputPasswordValue.length >= 6;

    if (!value2) {
      if (spanPassword) {
        spanPassword.style.color = 'red';
        spanPassword.style.fontWeight = '700';
      }
      inputPassword.style.border = 'solid 1px red';
      inputPassword.style.color = 'red';
      spanFieldPasswordRequired.style.display = 'flex';
    }

    if (!value1 && value2 && this.userCreateDTO) {
      this.userCreateDTO.email = inputEmail.value;
      this.userCreateDTO.password = inputPasswordValue;

      this.isLoadingCreation = true;

      setTimeout(() => {
        this.isLoadingCreation = false;

        this.userService.createAccount(this.userCreateDTO).subscribe({
          next: (success) => {
            if (!success.data) return;

            const createUserDTO = success.data.userDTO;
            const resultUser = SetUserLocalStorage(createUserDTO);

            if (resultUser.isSetUserOk) {
              this.router.navigate(['/']);
            } else {
              this.router.navigate(['/login'], { queryParams: { erroWhenCreateAccount: true } });
            }
          },
          error: (error) => {
            if (error.status === 400) {
              console.log(error);
            }

            if (error.status !== 400) {
              localStorage.removeItem('user');
              this.router.navigate(['/login'], { queryParams: { erroWhenCreateAccount: false } });
            }
          },
        });
      }, 3000);
    }
  }

  errorInputEmailVerifify(
    input: HTMLInputElement,
    span: HTMLSpanElement | null,
    spanError: HTMLSpanElement
  ) {
    if (!input) return true;

    const inputNameValue = input.value;

    if (!inputNameValue.includes('@gmail.com')) {
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

  errorInputPasswordVerifify(
    input: HTMLInputElement,
    span: HTMLSpanElement | null,
    spanError: HTMLSpanElement
  ) {
    const inputValue = input.value;

    if (inputValue.length <= 0) {
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

  onChangeCheckbox(event: Event, buttonContinue: HTMLButtonElement) {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      buttonContinue.style.backgroundColor = '#f4546a';
      buttonContinue.style.color = '#fff';
      buttonContinue.style.cursor = 'pointer';
    } else {
      buttonContinue.style.backgroundColor = '#fff';
      buttonContinue.style.color = '#999';
      buttonContinue.style.cursor = 'auto';
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }
}
