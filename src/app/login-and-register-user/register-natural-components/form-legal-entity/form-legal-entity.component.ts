import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendClickedButtonContinueRegisterService } from '../../../service-dispatch/user-register/send-clicked-button-continue-register.service';
import { GetDataLegalEntityRegisterService } from '../../../service-dispatch/user-register/get-data-legal-entity-register.service';
import { LegalEntityCreateDTO } from '../../../interface/dto/LegalEntityCreateDTO';

@Component({
  selector: 'app-form-legal-entity',
  standalone: false,
  templateUrl: './form-legal-entity.component.html',
  styleUrl: './form-legal-entity.component.css',
})
export class FormLegalEntityComponent implements AfterViewInit, OnDestroy {
  @ViewChild('spanCompanyNameRef') spanCompanyNameRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCompanyNameRequiredRef')
  spanErrorCompanyNameRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCompanyNameAtLeast3CharactersRef')
  spanErrorCompanyNameAtLeast3CharactersRef!: ElementRef<HTMLSpanElement>;

  @ViewChild('spanTradeNameRef') spanTradeNameRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorTradeNameRequiredRef')
  spanErrorTradeNameRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorTradeNameAtLeast3CharactersRef')
  spanErrorTradeNameAtLeast3CharactersRef!: ElementRef<HTMLSpanElement>;

  inputCompanyName!: HTMLInputElement;
  inputTradeName!: HTMLInputElement;
  inputCnpj!: HTMLInputElement;
  inputMunicipalRegistration!: HTMLInputElement;
  inputStateRegistration!: HTMLInputElement;
  inputCorporateCellPhoneNumber!: HTMLInputElement;
  inputDDDNumberCorporateLandline!: HTMLInputElement;
  inputCep!: HTMLInputElement;
  @ViewChild('selectTypeOfAddress') selectTypeOfAddress!: ElementRef<HTMLInputElement>;
  inputAddress!: HTMLInputElement;
  inputNumber!: HTMLInputElement;
  inputComplemnt!: HTMLInputElement;
  inputNeighborhood!: HTMLInputElement;
  @ViewChild('selectState') selectState!: ElementRef<HTMLInputElement>;
  inputCity!: HTMLInputElement;
  inputReferencePoint!: HTMLInputElement;

  constructor(
    private route: ActivatedRoute,
    private sendClickedButtonContinueRegisterService: SendClickedButtonContinueRegisterService,
    private getDataLegalEntityRegisterService: GetDataLegalEntityRegisterService
  ) {}

  ngOnDestroy(): void {
    this.sendClickedButtonContinueRegisterService.updatevalueButton(false);
  }

  ngAfterViewInit(): void {
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInput = this.onInput.bind(this);

    this.onInputCnpjFocus = this.onInputCnpjFocus.bind(this);
    this.onInputCnpjBlur = this.onInputCnpjBlur.bind(this);
    this.onInputCnpj = this.onInputCnpj.bind(this);

    this.onInputMunicipalRegistrationFocus = this.onInputMunicipalRegistrationFocus.bind(this);
    this.onInputMunicipalRegistrationBlur = this.onInputMunicipalRegistrationBlur.bind(this);
    this.onInputMunicipalRegistration = this.onInputMunicipalRegistration.bind(this);

    this.onInputStateRegistrationFocus = this.onInputStateRegistrationFocus.bind(this);
    this.onInputStateRegistrationBlur = this.onInputStateRegistrationBlur.bind(this);
    this.onInputStateRegistration = this.onInputStateRegistration.bind(this);

    this.onInputCorporateCellPhoneNumberFocus =
      this.onInputCorporateCellPhoneNumberFocus.bind(this);
    this.onInputCorporateCellPhoneNumberBlur = this.onInputCorporateCellPhoneNumberBlur.bind(this);
    this.onInputCorporateCellPhoneNumber = this.onInputCorporateCellPhoneNumber.bind(this);

    this.onInputDDDNumberCorporateLandlineFocus =
      this.onInputDDDNumberCorporateLandlineFocus.bind(this);
    this.onInputDDDNumberCorporateLandlineBlur =
      this.onInputDDDNumberCorporateLandlineBlur.bind(this);
    this.onInputDDDNumberCorporateLandline = this.onInputDDDNumberCorporateLandline.bind(this);

    this.onInputCepFocus = this.onInputCepFocus.bind(this);
    this.onInputCepBlur = this.onInputCepBlur.bind(this);
    this.onInputCep = this.onInputCep.bind(this);

    this.onInputAddressFocus = this.onInputAddressFocus.bind(this);
    this.onInputAddressBlur = this.onInputAddressBlur.bind(this);
    this.onInputAddress = this.onInputAddress.bind(this);

    this.onInputNumberFocus = this.onInputNumberFocus.bind(this);
    this.onInputNumberBlur = this.onInputNumberBlur.bind(this);
    this.onInputNumber = this.onInputNumber.bind(this);

    this.onInputComplementFocus = this.onInputComplementFocus.bind(this);
    this.onInputComplementBlur = this.onInputComplementBlur.bind(this);
    this.onInputComplement = this.onInputComplement.bind(this);

    this.onInputNeighborhoodFocus = this.onInputNeighborhoodFocus.bind(this);
    this.onInputNeighborhoodBlur = this.onInputNeighborhoodBlur.bind(this);
    this.onInputNeighborhood = this.onInputNeighborhood.bind(this);

    this.onInputCityFocus = this.onInputCityFocus.bind(this);
    this.onInputCityBlur = this.onInputCityBlur.bind(this);
    this.onInputCity = this.onInputCity.bind(this);

    this.getInputCompanyName = this.getInputCompanyName.bind(this);
    this.getInputTradeName = this.getInputTradeName.bind(this);
    this.getInputCnpj = this.getInputCnpj.bind(this);
    this.getInputMunicipalRegistration = this.getInputMunicipalRegistration.bind(this);
    this.getInputStateRegistration = this.getInputStateRegistration.bind(this);
    this.getInputCorporateCellPhoneNumber = this.getInputCorporateCellPhoneNumber.bind(this);
    this.getInputDDDNumberCorporateLandline = this.getInputDDDNumberCorporateLandline.bind(this);
    this.getInputCep = this.getInputCep.bind(this);
    this.getInputAddress = this.getInputAddress.bind(this);
    this.getInputNumber = this.getInputNumber.bind(this);
    this.getComplement = this.getComplement.bind(this);
    this.getInputNeighborhood = this.getInputNeighborhood.bind(this);
    this.getInputCity = this.getInputCity.bind(this);
    this.getInputReferencePoint = this.getInputReferencePoint.bind(this);

    this.sendClickedButtonContinueRegisterService.valueButton$.subscribe((value) => {
      if (value) {
        const selectTypeOfAddress = this.selectTypeOfAddress.nativeElement;
        const selectState = this.selectState.nativeElement;

        const value1 = this.errorInputsVerifify(
          this.inputCompanyName,
          this.spanCompanyNameRef.nativeElement,
          this.spanErrorCompanyNameRequiredRef.nativeElement
        );

        const value2 = this.errorInputsVerifify(
          this.inputTradeName,
          this.spanTradeNameRef.nativeElement,
          this.spanErrorTradeNameRequiredRef.nativeElement
        );

        const value3 = this.errorInputsVerifify(
          this.inputCnpj,
          this.spanCnpjRef.nativeElement,
          this.spanErrorCnpjRequiredRef.nativeElement
        );

        const value4 = this.errorInputsVerifify(
          this.inputStateRegistration,
          this.spanStateRegistrationRef.nativeElement,
          this.spanErrorStateRegistrationRequiredRef.nativeElement
        );

        const value5 = this.errorInputsVerifify(
          this.inputCorporateCellPhoneNumber,
          this.spanCorporateCellPhoneNumberRef.nativeElement,
          this.spanErrorCorporateCellPhoneNumberRequiredRef.nativeElement
        );

        const value8 = this.errorInputsVerifify(
          this.inputCep,
          this.spanCepRef.nativeElement,
          this.spanErrorCepRequiredRef.nativeElement
        );

        const value9 = this.errorInputsVerifify(
          selectTypeOfAddress,
          null,
          this.spanErrorFieldTypeOfAddressRequired.nativeElement
        );

        const value10 = this.errorInputsVerifify(
          this.inputAddress,
          this.spanAddressRef.nativeElement,
          this.spanErrorAddressRequiredRef.nativeElement
        );

        const value11 = this.errorInputsVerifify(
          this.inputNumber,
          this.spanNumberRef.nativeElement,
          this.spanErrorNumberRequiredRef.nativeElement
        );

        const value12 = this.errorInputsVerifify(
          this.inputNeighborhood,
          this.spanNeighborhoodRef.nativeElement,
          this.spanErrorNeighborhoodRequiredRef.nativeElement
        );

        const value13 = this.errorInputsVerifify(
          selectState,
          null,
          this.spanErrorFieldStateRequired.nativeElement
        );

        const value14 = this.errorInputsVerifify(
          this.inputCity,
          this.spanCityRef.nativeElement,
          this.spanErrorCityRequiredRef.nativeElement
        );

        const selectedStateName =
          this.states.find((s) => s.value === selectState.value)?.name || '';

        if (
          value1 ||
          value2 ||
          value3 ||
          value4 ||
          value5 ||
          value8 ||
          value9 ||
          value10 ||
          value11 ||
          value12 ||
          value13 ||
          value14
        ) {
          // error
        } else {
          const inputCheckboxExempt = this.inputCheckboxExempt.nativeElement;
          const ischecked = inputCheckboxExempt.checked;

          const objUser: LegalEntityCreateDTO = {
            companyName: this.inputCompanyName.value,
            tradeName: this.inputTradeName.value,
            cnpj: this.inputCnpj.value,
            municipalRegistration: this.inputMunicipalRegistration.value,
            stateRegistration: this.inputStateRegistration.value,
            exempt: ischecked,
            email: '',
            corporateCellPhoneNumber: this.inputCorporateCellPhoneNumber.value,
            numberCorporateLandline: this.inputDDDNumberCorporateLandline.value,
            password: '',
            userImageBase64: '',
            userAddressDTO: {
              cep: this.inputCep.value,
              typeAddress: selectTypeOfAddress.value,
              address: this.inputAddress.value,
              number: Number(this.inputNumber.value),
              complement: this.inputComplemnt.value,
              neighborhood: this.inputNeighborhood.value,
              state: selectedStateName,
              city: this.inputCity.value,
              referencePoint: this.inputReferencePoint.value,
              id: null,
              userId: null,
              userDTO: null,
            },
          };

          this.getDataLegalEntityRegisterService.updateValueGetData(objUser);
        }
      }
    });
  }

  errorInputsVerifify(
    input: HTMLInputElement,
    span: HTMLSpanElement | null,
    spanError: HTMLSpanElement
  ) {
    if (!input) return false;

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

  getInputCompanyName(input: HTMLInputElement) {
    this.inputCompanyName = input;
  }

  getInputTradeName(input: HTMLInputElement) {
    this.inputTradeName = input;
  }

  getInputCnpj(input: HTMLInputElement) {
    this.inputCnpj = input;
  }

  getInputMunicipalRegistration(input: HTMLInputElement) {
    this.inputMunicipalRegistration = input;
  }

  getInputStateRegistration(input: HTMLInputElement) {
    this.inputStateRegistration = input;
  }

  getInputCorporateCellPhoneNumber(input: HTMLInputElement) {
    this.inputCorporateCellPhoneNumber = input;
  }

  getInputDDDNumberCorporateLandline(input: HTMLInputElement) {
    this.inputDDDNumberCorporateLandline = input;
  }

  getInputCep(input: HTMLInputElement) {
    this.inputCep = input;
  }

  getInputAddress(input: HTMLInputElement) {
    this.inputAddress = input;
  }

  getInputNumber(input: HTMLInputElement) {
    this.inputNumber = input;
  }

  getComplement(input: HTMLInputElement) {
    this.inputComplemnt = input;
  }

  getInputNeighborhood(input: HTMLInputElement) {
    this.inputNeighborhood = input;
  }

  getInputCity(input: HTMLInputElement) {
    this.inputCity = input;
  }

  getInputReferencePoint(input: HTMLInputElement) {
    this.inputReferencePoint = input;
  }

  firstClickedInputName = false;

  onInputFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const spanMap: Record<string, ElementRef<HTMLSpanElement>> = {
      companyName: this.spanCompanyNameRef,
      tradeName: this.spanTradeNameRef,
    };

    const spanRef = spanMap[whichIs];

    const span = spanRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputName) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputName = true;
  }

  onInputBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const spansMap: Record<string, ElementRef<HTMLSpanElement>[]> = {
      companyName: [this.spanCompanyNameRef, this.spanErrorCompanyNameRequiredRef],
      tradeName: [this.spanTradeNameRef, this.spanErrorTradeNameRequiredRef],
    };

    const span = spansMap[whichIs][0].nativeElement;
    const spanErrorRequired = spansMap[whichIs][1].nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorRequired.style.display = 'flex';
    }
  }

  canLoginNameCorrect = false;

  onInput(input: HTMLInputElement, whichIs: string) {
    const value = input.value;

    const spansMap: Record<string, ElementRef<HTMLSpanElement>[]> = {
      companyName: [
        this.spanCompanyNameRef,
        this.spanErrorCompanyNameAtLeast3CharactersRef,
        this.spanErrorCompanyNameRequiredRef,
      ],
      tradeName: [
        this.spanTradeNameRef,
        this.spanErrorTradeNameAtLeast3CharactersRef,
        this.spanErrorTradeNameRequiredRef,
      ],
    };

    const span = spansMap[whichIs][0].nativeElement;
    const spanErrorAtLeast3Character = spansMap[whichIs][1].nativeElement;
    const spanErrorRequired = spansMap[whichIs][2].nativeElement;

    if (value.length > 0 && value.length < 3) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorAtLeast3Character.style.display = 'flex';
      spanErrorRequired.style.display = 'none';

      this.canLoginNameCorrect = false;
    } else {
      if (value.length <= 0) {
        spanErrorRequired.style.display = 'flex';
        spanErrorAtLeast3Character.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorAtLeast3Character.style.display = 'none';
      this.canLoginNameCorrect = true;
    }
  }

  typeOfAddress = [
    { value: 'Avenida', name: 'Avenida' },
    { value: 'Rua', name: 'Rua' },
    { value: 'Praça', name: 'Praça' },
    { value: 'Quadra', name: 'Quadra' },
    { value: 'Estrada', name: 'Estrada' },
    { value: 'Alameda', name: 'Alameda' },
    { value: 'Ladeira', name: 'Ladeira' },
    { value: 'Travessa', name: 'Travessa' },
    { value: 'Rodovia', name: 'Rodovia' },
    { value: 'Praia', name: 'Praia' },
    { value: 'Outros', name: 'Outros' },
  ];

  states = [
    { value: 'AC', name: 'Acre' },
    { value: 'AL', name: 'Alagoas' },
    { value: 'AP', name: 'Amapá' },
    { value: 'AM', name: 'Amazonas' },
    { value: 'BA', name: 'Bahia' },
    { value: 'CE', name: 'Ceará' },
    { value: 'DF', name: 'Distrito Federal' },
    { value: 'ES', name: 'Espírito Santo' },
    { value: 'GO', name: 'Goiás' },
    { value: 'MA', name: 'Maranhão' },
    { value: 'MT', name: 'Mato Grosso' },
    { value: 'MS', name: 'Mato Grosso do Sul' },
    { value: 'MG', name: 'Minas Gerais' },
    { value: 'PA', name: 'Pará' },
    { value: 'PB', name: 'Paraíba' },
    { value: 'PR', name: 'Paraná' },
    { value: 'PE', name: 'Pernambuco' },
    { value: 'PI', name: 'Piauí' },
    { value: 'RJ', name: 'Rio de Janeiro' },
    { value: 'RN', name: 'Rio Grande do Norte' },
    { value: 'RS', name: 'Rio Grande do Sul' },
    { value: 'RO', name: 'Rondônia' },
    { value: 'RR', name: 'Roraima' },
    { value: 'SC', name: 'Santa Catarina' },
    { value: 'SP', name: 'São Paulo' },
    { value: 'SE', name: 'Sergipe' },
    { value: 'TO', name: 'Tocantins' },
  ];

  selectedState: string = '';
  selectedTypeOfAddress: string = '';

  onClickContinue(inputName: HTMLInputElement) {
    const value = inputName.value;
  }

  @ViewChild('spanCnpjRef')
  spanCnpjRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCnpjRequiredRef')
  spanErrorCnpjRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCnpjAtLeast14CharactersRef')
  spanErrorCnpjAtLeast14CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCnpj = false;

  onInputCnpjFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCnpjRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCnpj) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCnpj = true;
  }

  onInputCnpjBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCnpjRef.nativeElement;
    const spanErrorCnpjRequiredRef = this.spanErrorCnpjRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCnpjRequiredRef.style.display = 'flex';
    }
  }

  keyPressedCnpj: string = '';

  onKeyDownInputCnpj(event: KeyboardEvent) {
    this.keyPressedCnpj = event.key;
  }

  onInputCnpj(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCnpjRef.nativeElement;
    const spanErrorCnpjRequiredRef = this.spanErrorCnpjRequiredRef.nativeElement;
    const spanErrorCnpjAtLeast14CharactersRef =
      this.spanErrorCnpjAtLeast14CharactersRef.nativeElement;

    value = value.replace(/\D/g, '');

    if (value.length > 14) {
      value = value.slice(0, 14);
    }

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;

      if (i === 1 || i === 4) {
        formatted += '.';
      }

      if (i === 7) {
        formatted += '/';
      }

      if (i === 11) {
        formatted += '-';
      }
    }

    const arrayRemove = ['.', '/', '-'];

    if (this.keyPressedCnpj === 'Backspace') {
      while (formatted.length > 0 && arrayRemove.includes(formatted[formatted.length - 1])) {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0 && value.length < 14) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorCnpjRequiredRef.style.display = 'none';
      spanErrorCnpjAtLeast14CharactersRef.style.display = 'flex';
    } else {
      if (formatted.length <= 0) {
        spanErrorCnpjRequiredRef.style.display = 'flex';
        input.style.border = 'solid 1px red';
        span.style.color = 'red';
        span.style.fontWeight = '700';
        spanErrorCnpjAtLeast14CharactersRef.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCnpjAtLeast14CharactersRef.style.display = 'none';
    }
  }

  @ViewChild('spanMunicipalRegistrationRef')
  spanMunicipalRegistrationRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputMunicipalRegistration = false;

  onInputMunicipalRegistrationFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanMunicipalRegistrationRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    this.firstClickedInputMunicipalRegistration = true;
  }

  onInputMunicipalRegistrationBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanMunicipalRegistrationRef.nativeElement;

    if (value.length <= 0) {
      span.style.top = '20px';
    }
  }

  keyPressedMunicipalRegistration: string = '';

  onKeyDownInputMunicipalRegistration(event: KeyboardEvent) {
    this.keyPressedMunicipalRegistration = event.key;
  }

  onInputMunicipalRegistration(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    // if (this.keyPressedMunicipalRegistration === 'Backspace') {
    //   while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
    //     formatted = formatted.slice(0, formatted.length - 1);
    //   }
    // }

    input.value = formatted;
  }

  @ViewChild('spanStateRegistrationRef')
  spanStateRegistrationRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorStateRegistrationRequiredRef')
  spanErrorStateRegistrationRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('inputCheckboxExempt')
  inputCheckboxExempt!: ElementRef<HTMLInputElement>;
  firstClickedInputStateRegistration = false;

  onInputStateRegistrationFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;
    const inputCheckboxExempt = this.inputCheckboxExempt.nativeElement;
    const ischecked = inputCheckboxExempt.checked;
    if (ischecked) return;

    const span = this.spanStateRegistrationRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputStateRegistration) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputStateRegistration = true;
  }

  onInputStateRegistrationBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;
    const inputCheckboxExempt = this.inputCheckboxExempt.nativeElement;
    const ischecked = inputCheckboxExempt.checked;
    if (ischecked) return;

    const span = this.spanStateRegistrationRef.nativeElement;
    const spanErrorStateRegistrationRequiredRef =
      this.spanErrorStateRegistrationRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorStateRegistrationRequiredRef.style.display = 'flex';
    }
  }

  keyPressedStateRegistration: string = '';

  onKeyDownInputStateRegistration(event: KeyboardEvent) {
    this.keyPressedStateRegistration = event.key;
  }

  onInputStateRegistration(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanStateRegistrationRef.nativeElement;
    const spanErrorStateRegistrationRequiredRef =
      this.spanErrorStateRegistrationRequiredRef.nativeElement;

    value = value.replace(/\D/g, '');

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    input.value = formatted;

    if (value.length < 9) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorStateRegistrationRequiredRef.style.display = 'flex';
    } else {
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorStateRegistrationRequiredRef.style.display = 'none';
    }
  }

  onClickLabelCheckboxExempt(
    inputCheckboxExempt: HTMLInputElement,
    spanStateRegistrationRef: HTMLSpanElement
  ) {
    const ischecked = inputCheckboxExempt.checked;
    const inputStateRegistration = this.inputStateRegistration;
    const spanErrorStateRegistrationRequiredRef =
      this.spanErrorStateRegistrationRequiredRef.nativeElement;
    const span = this.spanStateRegistrationRef.nativeElement;

    if (ischecked) {
      inputStateRegistration.style.backgroundColor = '#f0f0f0';
      inputStateRegistration.disabled = true;
      spanStateRegistrationRef.style.top = '5px';
      spanStateRegistrationRef.style.left = '6px';
      spanStateRegistrationRef.style.backgroundColor = '#f0f0f0';
      spanStateRegistrationRef.style.color = 'black';
      spanStateRegistrationRef.style.fontWeight = '600';
      span.style.color = 'black';
      inputStateRegistration.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      inputStateRegistration.value = '';
      spanErrorStateRegistrationRequiredRef.style.display = 'none';
    } else {
      inputStateRegistration.style.backgroundColor = '#fff';
      inputStateRegistration.disabled = false;
      spanStateRegistrationRef.style.top = '20px';
      spanStateRegistrationRef.style.left = '10px';
      spanStateRegistrationRef.style.backgroundColor = '#fff';
      spanStateRegistrationRef.style.color = 'black';
      spanStateRegistrationRef.style.fontWeight = '400';
      span.style.color = 'red';
      inputStateRegistration.style.border = 'solid 1px red';
      spanErrorStateRegistrationRequiredRef.style.display = 'flex';
    }
  }

  @ViewChild('spanCorporateCellPhoneNumberRef')
  spanCorporateCellPhoneNumberRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCorporateCellPhoneNumberRequiredRef')
  spanErrorCorporateCellPhoneNumberRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef')
  spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCorporateCellPhoneNumber = false;

  onInputCorporateCellPhoneNumberFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCorporateCellPhoneNumberRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCorporateCellPhoneNumber) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCorporateCellPhoneNumber = true;
  }

  onInputCorporateCellPhoneNumberBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCorporateCellPhoneNumberRef.nativeElement;
    const spanErrorCorporateCellPhoneNumberRequiredRef =
      this.spanErrorCorporateCellPhoneNumberRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCorporateCellPhoneNumberRequiredRef.style.display = 'flex';
    }
  }

  keyPressedCorporateCellPhoneNumber: string = '';

  onKeyDownInputCorporateCellPhoneNumber(event: KeyboardEvent) {
    this.keyPressedCorporateCellPhoneNumber = event.key;
  }

  onInputCorporateCellPhoneNumber(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCorporateCellPhoneNumberRef.nativeElement;
    const spanErrorCorporateCellPhoneNumberRequiredRef =
      this.spanErrorCorporateCellPhoneNumberRequiredRef.nativeElement;
    const spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef =
      this.spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef.nativeElement;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      if (i === 0) {
        formatted += '(';
      }

      formatted += digit;

      if (i === 1) {
        formatted += ')';
        formatted += ' ';
      }

      if (i === 6) {
        formatted += '-';
      }
    }

    const arrayRemove = ['-', ' ', '(', ')'];

    if (this.keyPressedCorporateCellPhoneNumber === 'Backspace') {
      while (formatted.length > 0 && arrayRemove.includes(formatted[formatted.length - 1])) {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0 && value.length < 11) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorCorporateCellPhoneNumberRequiredRef.style.display = 'none';
      spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef.style.display = 'flex';
    } else {
      if (formatted.length <= 0) {
        spanErrorCorporateCellPhoneNumberRequiredRef.style.display = 'flex';
        input.style.border = 'solid 1px red';
        span.style.color = 'red';
        span.style.fontWeight = '700';
        spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCorporateCellPhoneNumberAtLeast11CharactersRef.style.display = 'none';
    }
  }

  @ViewChild('spanDDDNumberCorporateLandlineRef')
  spanDDDNumberCorporateLandlineRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputDDDNumberCorporateLandline = false;

  onInputDDDNumberCorporateLandlineFocus(inputName: HTMLInputElement, whichIs: string) {
    const span = this.spanDDDNumberCorporateLandlineRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    this.firstClickedInputDDDNumberCorporateLandline = true;
  }

  onInputDDDNumberCorporateLandlineBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanDDDNumberCorporateLandlineRef.nativeElement;

    if (value.length <= 0) {
      span.style.top = '20px';
    }
  }

  keyPressedDDDNumberCorporateLandline: string = '';

  onKeyDownInputDDDNumberCorporateLandline(event: KeyboardEvent) {
    this.keyPressedDDDNumberCorporateLandline = event.key;
  }

  onInputDDDNumberCorporateLandline(input: HTMLInputElement, whichIs: string) {
    let value = input.value;
  }

  @ViewChild('spanCepRef') spanCepRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCepRequiredRef')
  spanErrorCepRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCepAtLeast9CharactersRef')
  spanErrorCepAtLeast9CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCep = false;

  onInputCepFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCepRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCep) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCep = true;
  }

  onInputCepBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCepRef.nativeElement;
    const spanErrorCellPhoneRequired = this.spanErrorCepRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCellPhoneRequired.style.display = 'flex';
    }
  }

  keyPressedCep: string = '';

  onKeyDownInputCep(event: KeyboardEvent) {
    this.keyPressedCep = event.key;
  }

  onInputCep(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCepRef.nativeElement;
    const spanErrorCepRequiredRef = this.spanErrorCepRequiredRef.nativeElement;
    const spanErrorCepAtLeast9CharactersRef = this.spanErrorCepAtLeast9CharactersRef.nativeElement;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;

      if (i === 4) {
        formatted += '-';
      }
    }

    if (this.keyPressedCep === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0 && formatted.length < 9) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorCepRequiredRef.style.display = 'none';
      spanErrorCepAtLeast9CharactersRef.style.display = 'flex';

      // this.canLoginNameCorrect = false;
    } else {
      if (formatted.length <= 0) {
        spanErrorCepRequiredRef.style.display = 'flex';
        input.style.border = 'solid 1px red';
        span.style.color = 'red';
        span.style.fontWeight = '700';
        spanErrorCepAtLeast9CharactersRef.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCepAtLeast9CharactersRef.style.display = 'none';
      // this.canLoginNameCorrect = true;
    }
  }

  @ViewChild('spanErrorFieldTypeOfAddressRequired')
  spanErrorFieldTypeOfAddressRequired!: ElementRef<HTMLSpanElement>;

  onInputSelectTypeOfAddressChange(
    select: HTMLSelectElement,
    selectWrapper: HTMLDivElement,
    spanTypeOfAddressRef: HTMLSpanElement,
    whichIs: string
  ) {
    const span = this.spanErrorFieldTypeOfAddressRequired.nativeElement;
    const value = select.value;

    if (value.length > 0) {
      select.style.border = 'solid 1px #00000018';
      select.style.color = 'rgb(0, 0, 0)';
      select.style.color = 'black';
      selectWrapper.classList.remove('error');
      span.style.display = 'none';

      spanTypeOfAddressRef.style.display = 'flex';
      spanTypeOfAddressRef.style.top = '-7px';
      spanTypeOfAddressRef.style.left = '6px';
      spanTypeOfAddressRef.style.padding = '0px 5px';
    } else {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';

      spanTypeOfAddressRef.style.display = 'none';
    }
  }

  onInputSelectTypeOfAddressFocus() {}

  onInputSelectTypeOfAddressBlur(
    select: HTMLSelectElement,
    selectWrapper: HTMLDivElement,
    whichIs: string
  ) {
    const span = this.spanErrorFieldTypeOfAddressRequired.nativeElement;
    const value = select.value;

    if (value.length <= 0) {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';
    }
  }

  @ViewChild('spanAddressRef') spanAddressRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorAddressRequiredRef')
  spanErrorAddressRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputAddress = false;

  onInputAddressFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanAddressRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCep) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCep = true;
  }

  onInputAddressBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanAddressRef.nativeElement;
    const spanErrorAddressRequiredRef = this.spanErrorAddressRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorAddressRequiredRef.style.display = 'flex';
    }
  }

  keyPressedAddress: string = '';

  onKeyDownInputAddress(event: KeyboardEvent) {
    this.keyPressedAddress = event.key;
  }

  onInputAddress(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanAddressRef.nativeElement;
    const spanErrorAddressRequiredRef = this.spanErrorAddressRequiredRef.nativeElement;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedAddress === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0) {
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorAddressRequiredRef.style.display = 'none';
    } else {
      spanErrorAddressRequiredRef.style.display = 'flex';
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }
  }

  @ViewChild('spanNumberRef') spanNumberRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNumberRequiredRef')
  spanErrorNumberRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputNumber = false;

  onInputNumberFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanNumberRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputNumber) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputNumber = true;
  }

  onInputNumberBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanNumberRef.nativeElement;
    const spanErrorNumberRequiredRef = this.spanErrorNumberRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorNumberRequiredRef.style.display = 'flex';
    }
  }

  keyPressedNumber: string = '';

  onKeyDownInputNumber(event: KeyboardEvent) {
    this.keyPressedNumber = event.key;
  }

  onInputNumber(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanNumberRef.nativeElement;
    const spanErrorNumberRequiredRef = this.spanErrorNumberRequiredRef.nativeElement;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedNumber === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0) {
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorNumberRequiredRef.style.display = 'none';
    } else {
      spanErrorNumberRequiredRef.style.display = 'flex';
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }
  }

  @ViewChild('spanComplementRef') spanComplementRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputComplement = false;

  onInputComplementFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanComplementRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    this.firstClickedInputComplement = true;
  }

  onInputComplementBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanComplementRef.nativeElement;

    if (value.length <= 0) {
      span.style.top = '20px';
    }
  }

  keyPressedComplement: string = '';

  onKeyDownInputComplement(event: KeyboardEvent) {
    this.keyPressedComplement = event.key;
  }

  onInputComplement(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedComplement === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;
  }

  @ViewChild('spanNeighborhoodRef') spanNeighborhoodRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNeighborhoodRequiredRef')
  spanErrorNeighborhoodRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputNeighborhood = false;

  onInputNeighborhoodFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanNeighborhoodRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCep) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCep = true;
  }

  onInputNeighborhoodBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanNeighborhoodRef.nativeElement;
    const spanErrorNeighborhoodRequiredRef = this.spanErrorNeighborhoodRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorNeighborhoodRequiredRef.style.display = 'flex';
    }
  }

  keyPressedNeighborhood: string = '';

  onKeyDownInputNeighborhood(event: KeyboardEvent) {
    this.keyPressedNeighborhood = event.key;
  }

  onInputNeighborhood(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanNeighborhoodRef.nativeElement;
    const spanErrorNeighborhoodRequiredRef = this.spanErrorNeighborhoodRequiredRef.nativeElement;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedNeighborhood === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0) {
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorNeighborhoodRequiredRef.style.display = 'none';
    } else {
      spanErrorNeighborhoodRequiredRef.style.display = 'flex';
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }
  }

  @ViewChild('spanErrorFieldStateRequired')
  spanErrorFieldStateRequired!: ElementRef<HTMLSpanElement>;

  onInputSelectStateChange(
    select: HTMLSelectElement,
    selectWrapper: HTMLDivElement,
    spanStateRef: HTMLSpanElement,
    whichIs: string
  ) {
    const span = this.spanErrorFieldStateRequired.nativeElement;
    const value = select.value;

    if (value.length > 0) {
      select.style.border = 'solid 1px #00000018';
      select.style.color = 'rgb(0, 0, 0)';
      selectWrapper.classList.remove('error');
      span.style.display = 'none';

      spanStateRef.style.display = 'flex';
      spanStateRef.style.top = '-7px';
      spanStateRef.style.left = '6px';
      spanStateRef.style.padding = '0px 5px';
    } else {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';

      spanStateRef.style.display = 'none';
    }
  }

  onInputSelectStateFocus() {}

  onInputSelectStateBlur(
    select: HTMLSelectElement,
    selectWrapper: HTMLDivElement,
    whichIs: string
  ) {
    const span = this.spanErrorFieldStateRequired.nativeElement;
    const value = select.value;

    if (value.length <= 0) {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';
    }
  }

  @ViewChild('spanCityRef') spanCityRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCityRequiredRef')
  spanErrorCityRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCity = false;

  onInputCityFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCityRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputCep) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputCep = true;
  }

  onInputCityBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCityRef.nativeElement;
    const spanErrorCityRequiredRef = this.spanErrorCityRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCityRequiredRef.style.display = 'flex';
    }
  }

  keyPressedCity: string = '';

  onKeyDownInputCity(event: KeyboardEvent) {
    this.keyPressedCity = event.key;
  }

  onInputCity(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCityRef.nativeElement;
    const spanErrorCityRequiredRef = this.spanErrorCityRequiredRef.nativeElement;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedCity === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0) {
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCityRequiredRef.style.display = 'none';
    } else {
      spanErrorCityRequiredRef.style.display = 'flex';
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }
  }

  @ViewChild('spanReferencePointRef') spanReferencePointRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorReferencePointRequiredRef')
  spanErrorReferencePointRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputReferencePoint = false;

  onInputReferencePointFocus(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanReferencePointRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    this.firstClickedInputReferencePoint = true;
  }

  onInputReferencePointBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanReferencePointRef.nativeElement;

    if (value.length <= 0) {
      span.style.top = '20px';
    }
  }

  keyPressedReferencePoint: string = '';

  onKeyDownInputReferencePoint(event: KeyboardEvent) {
    this.keyPressedReferencePoint = event.key;
  }

  onInputReferencePoint(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    let formatted = '';

    for (let i = 0; i < value.length; i++) {
      const digit = value[i];

      formatted += digit;
    }

    if (this.keyPressedReferencePoint === 'Backspace') {
      while (formatted.length > 0 && formatted[formatted.length - 1] === '-') {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;
  }
}
