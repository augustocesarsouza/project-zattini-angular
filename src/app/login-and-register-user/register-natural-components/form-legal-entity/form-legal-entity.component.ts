import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserCreateDTO } from '../../../interface/dto/UserCreateDTO';
import { ActivatedRoute } from '@angular/router';
import { SendClickedButtonContinueRegisterService } from '../../../service-dispatch/user-register/send-clicked-button-continue-register.service';

@Component({
  selector: 'app-form-legal-entity',
  standalone: false,
  templateUrl: './form-legal-entity.component.html',
  styleUrl: './form-legal-entity.component.css',
})
export class FormLegalEntityComponent implements OnInit, AfterViewInit {
  @ViewChild('spanNameRef') spanNameRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNameRequiredRef') spanErrorNameRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorNameAtLeast3CharactersRef')
  spanErrorNameAtLeast3CharactersRef!: ElementRef<HTMLSpanElement>;

  @ViewChild('spanLastNameRef') spanLastNameRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLastNameRequiredRef')
  spanErrorLastNameRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorLastNameAtLeast3CharactersRef')
  spanErrorLastNameAtLeast3CharactersRef!: ElementRef<HTMLSpanElement>;

  firstClickedInputName = false;

  inputName!: HTMLInputElement;
  inputLastName!: HTMLInputElement;
  @ViewChild('selectDayOfBirth') selectDayOfBirth!: ElementRef<HTMLInputElement>;
  @ViewChild('selectMonthOfBirth') selectMonthOfBirth!: ElementRef<HTMLInputElement>;
  @ViewChild('selectYear') selectYear!: ElementRef<HTMLInputElement>;
  inputCpf!: HTMLInputElement;
  inputCellPhone!: HTMLInputElement;
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
    private sendClickedButtonContinueRegisterService: SendClickedButtonContinueRegisterService
  ) {}

  ngOnInit(): void {
    this.loadYears();

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInput = this.onInput.bind(this);

    this.onInputCpfFocus = this.onInputCpfFocus.bind(this);
    this.onInputCpfBlur = this.onInputCpfBlur.bind(this);
    this.onInputCpf = this.onInputCpf.bind(this);

    this.onInputCellPhoneFocus = this.onInputCellPhoneFocus.bind(this);
    this.onInputCellPhoneBlur = this.onInputCellPhoneBlur.bind(this);
    this.onInputCellPhone = this.onInputCellPhone.bind(this);

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

    this.getInputName = this.getInputName.bind(this);
    this.getInputLastName = this.getInputLastName.bind(this);
    this.getInputCpf = this.getInputCpf.bind(this);
    this.getInputCellPhone = this.getInputCellPhone.bind(this);
    this.getInputCep = this.getInputCep.bind(this);
    this.getInputAddress = this.getInputAddress.bind(this);
    this.getInputNumber = this.getInputNumber.bind(this);
    this.getComplement = this.getComplement.bind(this);
    this.getInputNeighborhood = this.getInputNeighborhood.bind(this);
    this.getInputCity = this.getInputCity.bind(this);
    this.getInputReferencePoint = this.getInputReferencePoint.bind(this);

    this.sendClickedButtonContinueRegisterService.valueButton$.subscribe((value) => {
      if (value) {
        const selectDayOfBirth = this.selectDayOfBirth.nativeElement;
        const selectMonthOfBirth = this.selectMonthOfBirth.nativeElement;
        const selectYear = this.selectYear.nativeElement;

        const birthDate = `${selectDayOfBirth.value}/${selectMonthOfBirth.value}/${selectYear.value}`;

        const selectTypeOfAddress = this.selectTypeOfAddress.nativeElement;
        const selectState = this.selectState.nativeElement;

        const value1 = this.errorInputsVerifify(
          this.inputName,
          this.spanNameRef.nativeElement,
          this.spanErrorNameRequiredRef.nativeElement
        );

        const value2 = this.errorInputsVerifify(
          this.inputLastName,
          this.spanLastNameRef.nativeElement,
          this.spanErrorLastNameRequiredRef.nativeElement
        );

        const value3 = this.errorInputsVerifify(
          selectDayOfBirth,
          null,
          this.spanErrorFieldDayRequired.nativeElement
        );

        const value4 = this.errorInputsVerifify(
          selectMonthOfBirth,
          null,
          this.spanErrorFieldMonthRequired.nativeElement
        );

        const value5 = this.errorInputsVerifify(
          selectYear,
          null,
          this.spanErrorFieldYearRequired.nativeElement
        );

        const value6 = this.errorInputsVerifify(
          this.inputCpf,
          this.spanCpfRef.nativeElement,
          this.spanErrorCpfRequiredRef.nativeElement
        );

        const value7 = this.errorInputsVerifify(
          this.inputCellPhone,
          this.spanCellPhoneRef.nativeElement,
          this.spanErrorCellPhoneRequiredRef.nativeElement
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
          value6 ||
          value7 ||
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
          const objUser: UserCreateDTO = {
            name: this.inputName.value,
            lastName: this.inputLastName.value,
            gender: this.gender,
            email: '',
            birthDate: birthDate,
            cpf: this.inputCpf.value,
            cellPhone: this.inputCellPhone.value,
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
        }
      }
    });
  }

  ngAfterViewInit() {}

  errorInputsVerifify(
    input: HTMLInputElement,
    span: HTMLSpanElement | null,
    spanError: HTMLSpanElement
  ) {
    if (!input) return true;

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

  getInputName(input: HTMLInputElement) {
    this.inputName = input;
  }

  getInputLastName(input: HTMLInputElement) {
    this.inputLastName = input;
  }

  getInputCpf(input: HTMLInputElement) {
    this.inputCpf = input;
  }

  getInputCellPhone(input: HTMLInputElement) {
    this.inputCellPhone = input;
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

  onInputFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
    const value = inputName.value;

    const spanMap: Record<string, ElementRef<HTMLSpanElement>> = {
      name: this.spanNameRef,
      lastName: this.spanLastNameRef,
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
      name: [this.spanNameRef, this.spanErrorNameRequiredRef],
      lastName: [this.spanLastNameRef, this.spanErrorLastNameRequiredRef],
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
      name: [
        this.spanNameRef,
        this.spanErrorNameAtLeast3CharactersRef,
        this.spanErrorNameRequiredRef,
      ],
      lastName: [
        this.spanLastNameRef,
        this.spanErrorLastNameAtLeast3CharactersRef,
        this.spanErrorLastNameRequiredRef,
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

  @ViewChild('labelFemale') labelFemale!: ElementRef<HTMLLabelElement>;
  @ViewChild('labelMale') labelMale!: ElementRef<HTMLLabelElement>;

  selectedDay: string = '';
  selectedMonth: string = '';
  selectedYear: string = '';
  days: string[] = [];
  months = [
    { value: '01', name: 'Janeiro' },
    { value: '02', name: 'Fevereiro' },
    { value: '03', name: 'Março' },
    { value: '04', name: 'Abril' },
    { value: '05', name: 'Maio' },
    { value: '06', name: 'Junho' },
    { value: '07', name: 'Julho' },
    { value: '08', name: 'Agosto' },
    { value: '09', name: 'Setembro' },
    { value: '10', name: 'Outubro' },
    { value: '11', name: 'Novembro' },
    { value: '12', name: 'Dezembro' },
  ];
  years: string[] = [];
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

  loadYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1903; year--) {
      this.years.push(String(year));
    }
  }

  updateDays() {
    if (this.selectedMonth && this.selectedYear) {
      const year = parseInt(this.selectedYear, 10);
      const month = parseInt(this.selectedMonth, 10);

      const daysInMonth = new Date(year, month, 0).getDate();

      this.days = [];

      for (let i = 1; i <= daysInMonth; i++) {
        this.days.push(i.toString().padStart(2, '0'));
      }

      // Reseta o dia se o selecionado não existe mais
      if (parseInt(this.selectedDay, 10) > daysInMonth) {
        this.selectedDay = '';
      }
    } else {
      this.days = [];
    }
  }

  gender = 'male';

  onClickLabelFemale() {
    const labelFemale = this.labelFemale.nativeElement;
    labelFemale.classList.remove('disable');
    labelFemale.classList.add('active');

    const labelMale = this.labelMale.nativeElement;
    labelFemale.classList.remove('active');
    labelMale.classList.add('disable');

    this.gender = 'female';
  }

  onClickLabelMale() {
    const labelFemale = this.labelFemale.nativeElement;
    labelFemale.classList.remove('active');
    labelFemale.classList.add('disable');

    const labelMale = this.labelMale.nativeElement;
    labelMale.classList.remove('disable');
    labelMale.classList.add('active');

    this.gender = 'male';
  }

  onClickContinue(inputName: HTMLInputElement) {
    const value = inputName.value;
  }

  @ViewChild('spanErrorFieldDayRequired') spanErrorFieldDayRequired!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorFieldMonthRequired')
  spanErrorFieldMonthRequired!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorFieldYearRequired') spanErrorFieldYearRequired!: ElementRef<HTMLSpanElement>;

  onInputSelectChange(select: HTMLSelectElement, selectWrapper: HTMLDivElement, whichIs: string) {
    this.updateDays();

    const spansMap: Record<string, ElementRef<HTMLSpanElement>[]> = {
      day: [this.spanErrorFieldDayRequired],
      month: [this.spanErrorFieldMonthRequired],
      year: [this.spanErrorFieldYearRequired],
    };

    const span = spansMap[whichIs][0].nativeElement;
    const value = select.value;

    if (value.length > 0) {
      select.style.border = 'solid 1px #00000018';
      select.style.color = 'rgb(0, 0, 0)';
      select.style.color = 'black';
      selectWrapper.classList.remove('error');
      span.style.display = 'none';
    } else {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';
    }
  }

  onInputSelectDayOfBirthFocus() {}

  onInputSelectBlur(select: HTMLSelectElement, selectWrapper: HTMLDivElement, whichIs: string) {
    const spansMap: Record<string, ElementRef<HTMLSpanElement>[]> = {
      day: [this.spanErrorFieldDayRequired],
      month: [this.spanErrorFieldMonthRequired],
      year: [this.spanErrorFieldYearRequired],
    };

    const span = spansMap[whichIs][0].nativeElement;
    const value = select.value;

    if (value.length <= 0) {
      select.style.border = 'solid 1px red';
      select.style.color = 'red';
      selectWrapper.classList.remove('error');
      selectWrapper.classList.add('error');
      span.style.display = 'flex';
    }
  }

  @ViewChild('spanCpfRef') spanCpfRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCpfRequiredRef') spanErrorCpfRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCpfMustBe11CharactersRef')
  spanErrorCpfMustBe11CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCpf = false;

  onInputCpfFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
    const value = inputName.value;

    if (whichIs === 'cpf') {
      const span = this.spanCpfRef.nativeElement;
      span.style.top = '-7px';
      span.style.left = '6px';
      span.style.padding = '0px 5px';

      if (value.length <= 0 && this.firstClickedInputName) {
        span.style.color = 'red';
        span.style.fontWeight = '700';
      }

      this.firstClickedInputName = true;
    }
  }

  onInputCpfBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCpfRef.nativeElement;
    const spanErrorCpfRequired = this.spanErrorCpfRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCpfRequired.style.display = 'flex';
    }
  }

  keyPressed: string = '';

  onKeyDownInputCpf(event: KeyboardEvent) {
    this.keyPressed = event.key;
  }

  onInputCpf(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCpfRef.nativeElement;
    const spanErrorCpfRequired = this.spanErrorCpfRequiredRef.nativeElement;
    const spanErrorCpfMustBe11CharactersRef = this.spanErrorCpfMustBe11CharactersRef.nativeElement;

    value = value.replace(/\D/g, '');

    let thereIsLetter = false;

    for (let i = 0; i < value.length; i++) {
      const element = value[i];

      if (element !== '.' && element !== '-') {
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

    input.value = whichCpfString.slice(0, 14);

    if (whichCpfString.length > 0 && whichCpfString.length < 14) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorCpfRequired.style.display = 'none';
      spanErrorCpfMustBe11CharactersRef.style.display = 'flex';

      // this.canLoginNameCorrect = false;
    } else {
      if (whichCpfString.length <= 0) {
        spanErrorCpfRequired.style.display = 'flex';
        input.style.border = 'solid 1px red';
        span.style.color = 'red';
        span.style.fontWeight = '700';
        spanErrorCpfMustBe11CharactersRef.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCpfMustBe11CharactersRef.style.display = 'none';
      // this.canLoginNameCorrect = true;
    }
  }

  @ViewChild('spanCellPhoneRef') spanCellPhoneRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCellPhoneRequiredRef')
  spanErrorCellPhoneRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCellPhoneMustBe11CharactersRef')
  spanErrorCellPhoneMustBe11CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCellPhone = false;

  onInputCellPhoneFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
    const value = inputName.value;

    const span = this.spanCellPhoneRef.nativeElement;
    span.style.top = '-7px';
    span.style.left = '6px';
    span.style.padding = '0px 5px';

    if (value.length <= 0 && this.firstClickedInputName) {
      span.style.color = 'red';
      span.style.fontWeight = '700';
    }

    this.firstClickedInputName = true;
  }

  onInputCellPhoneBlur(inputName: HTMLInputElement, whichIs: string) {
    const value = inputName.value;

    const span = this.spanCellPhoneRef.nativeElement;
    const spanErrorCellPhoneRequired = this.spanErrorCellPhoneRequiredRef.nativeElement;

    if (value.length <= 0) {
      inputName.style.border = 'solid 1px red';
      span.style.top = '20px';
      span.style.color = 'red';
      span.style.fontWeight = '500';
      spanErrorCellPhoneRequired.style.display = 'flex';
    }
  }

  keyPressedCellPhone: string = '';

  onKeyDownInputCellPhone(event: KeyboardEvent) {
    this.keyPressedCellPhone = event.key;
  }

  onInputCellPhone(input: HTMLInputElement, whichIs: string) {
    let value = input.value;

    const span = this.spanCellPhoneRef.nativeElement;
    const spanErrorCellPhoneRequiredRef = this.spanErrorCellPhoneRequiredRef.nativeElement;
    const spanErrorCellPhoneMustBe11CharactersRef =
      this.spanErrorCellPhoneMustBe11CharactersRef.nativeElement;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
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
        formatted += ') ';
      }

      if (i === 6) {
        formatted += '-';
      }
    }

    if (this.keyPressedCellPhone === 'Backspace') {
      while (
        formatted.length > 0 &&
        (formatted[formatted.length - 1] === '(' ||
          formatted[formatted.length - 1] === ')' ||
          formatted[formatted.length - 1] === '-' ||
          formatted[formatted.length - 1] === ' ')
      ) {
        formatted = formatted.slice(0, formatted.length - 1);
      }
    }

    input.value = formatted;

    if (formatted.length > 0 && formatted.length < 15) {
      input.style.border = 'solid 1px red';
      span.style.color = 'red';
      span.style.fontWeight = '700';
      spanErrorCellPhoneRequiredRef.style.display = 'none';
      spanErrorCellPhoneMustBe11CharactersRef.style.display = 'flex';

      // this.canLoginNameCorrect = false;
    } else {
      if (formatted.length <= 0) {
        spanErrorCellPhoneRequiredRef.style.display = 'flex';
        input.style.border = 'solid 1px red';
        span.style.color = 'red';
        span.style.fontWeight = '700';
        spanErrorCellPhoneMustBe11CharactersRef.style.display = 'none';
        return;
      }
      input.style.border = 'solid 1px rgba(0, 0, 0, 0.094)';
      input.style.color = 'black';
      span.style.color = 'black';
      span.style.fontWeight = '700';
      spanErrorCellPhoneMustBe11CharactersRef.style.display = 'none';
      // this.canLoginNameCorrect = true;
    }
  }

  @ViewChild('spanCepRef') spanCepRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCepRequiredRef')
  spanErrorCepRequiredRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanErrorCepAtLeast9CharactersRef')
  spanErrorCepAtLeast9CharactersRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputCep = false;

  onInputCepFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

  onInputAddressFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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

  onInputNumberFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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
  @ViewChild('spanErrorComplementRequiredRef')
  spanErrorComplementRequiredRef!: ElementRef<HTMLSpanElement>;
  firstClickedInputComplement = false;

  onInputComplementFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

    const span = this.spanComplementRef.nativeElement;

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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

  onInputNeighborhoodFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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

  onInputCityFocus(inputName: HTMLInputElement, whichIs: 'name' | 'lastName' | 'cpf' | '') {
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

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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

  onInputReferencePointFocus(
    inputName: HTMLInputElement,
    whichIs: 'name' | 'lastName' | 'cpf' | ''
  ) {
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

    const span = this.spanReferencePointRef.nativeElement;

    // Remove tudo que não é número
    // value = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    // if (value.length > 8) {
    //   value = value.slice(0, 8);
    // }

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
