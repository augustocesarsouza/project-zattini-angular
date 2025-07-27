import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndividualMediaGreateComponent } from './form-individual-media-greate.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { SendClickedButtonContinueRegisterService } from '../../../../service-dispatch/user-register/send-clicked-button-continue-register.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GetDataUserRegisterService } from '../../../../service-dispatch/user-register/get-data-user-register.service';
import { LoginAndRegisterUserModule } from '../../../login-and-register-user.module';

describe('FormIndividualMediaGreateComponent', () => {
  let component: FormIndividualMediaGreateComponent;
  let fixture: ComponentFixture<FormIndividualMediaGreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIndividualMediaGreateComponent],
      imports: [AllSvgModule, LoginAndRegisterUserModule],
      providers: [
        SendClickedButtonContinueRegisterService,
        GetDataUserRegisterService,
        provideHttpClient(withInterceptorsFromDi()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormIndividualMediaGreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container input and span name', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-name');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Nome');
  });

  it('should render span name error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-name-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Nome“ é obrigatório');
  });

  it('should render container input and span name', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-input-last-name'
    );

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Sobrenome');
  });

  it('should render span last name error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-last-name-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Sobrenome“ é obrigatório');
  });

  it('should render span gender', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-gender-all');
    expect(span).toBeTruthy();
    expect(span.textContent).toBe('* Sexo');
  });

  it('should render gender labels with correct text', () => {
    const labelFemale: HTMLLabelElement =
      fixture.nativeElement.querySelector('.label-gender-female');
    const labelMale: HTMLLabelElement = fixture.nativeElement.querySelector('.label-gender-male');

    expect(labelFemale).toBeTruthy();
    expect(labelFemale.textContent?.trim()).toBe('Feminino');

    expect(labelMale).toBeTruthy();
    expect(labelMale.textContent?.trim()).toBe('Masculino');
  });

  it('should render span date of birth', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-date-of-birth');
    expect(span).toBeTruthy();
    expect(span.textContent).toBe('Data de nascimento');
  });

  it('should render select day of birth', () => {
    const select: HTMLSpanElement = fixture.nativeElement.querySelector('#dayOfBirth');
    expect(select).toBeTruthy();
  });

  it('should render error field day required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-day-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Dia“ é obrigatório');
  });

  it('should render select month of birth', () => {
    const select: HTMLSpanElement = fixture.nativeElement.querySelector('#monthOfBirth');
    expect(select).toBeTruthy();
  });

  it('should render error field month required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-month-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Mês“ é obrigatório');
  });

  it('should render select year of birth', () => {
    const select: HTMLSpanElement = fixture.nativeElement.querySelector('#yearOfBirth');
    expect(select).toBeTruthy();
  });

  it('should render error field year required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-year-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Ano“ é obrigatório');
  });

  it('should render container input cpf', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-cpf');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* CPF');
  });

  it('should render span last name error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-cpf-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “CPF“ é obrigatório');
  });

  it('should render container input cpf', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-cpf');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* CPF');
  });

  it('should render span last name error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-cpf-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “CPF“ é obrigatório');
  });

  it('should render container input ddd cell phone', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-input-ddd-cell-phone'
    );

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* DDD e número de celular');
  });

  it('should render span ddd cell phone error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-ddd-cell-phone-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “DDD e número de celular“ é obrigatório');
  });

  it('should render container input cep', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-cep');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* CEP');
  });

  it('should render span cep error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-cep-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “CEP“ é obrigatório');
  });

  it('should render select type of address', () => {
    const select: HTMLSpanElement = fixture.nativeElement.querySelector('#typeOfAddress');
    expect(select).toBeTruthy();
  });

  it('should render error field type of address required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-type-of-address-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('* Tipo de Endereço');
  });

  it('should render container input address', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-address');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Endereço');
  });

  it('should render span address error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-address-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Endereço“ é obrigatório');
  });

  it('should render span i dont know my cep', () => {
    const span: HTMLDivElement = fixture.nativeElement.querySelector('.span-dont-know-my-cep');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('Não sei meu CEP');
  });

  it('should render container input number', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-number');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Número');
  });

  it('should render span number error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-number-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Número“ é obrigatório');
  });

  it('should render container input complemnt', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-complement');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('Complemento (opcional)');
  });

  it('should render container input neighborhood', () => {
    const container: HTMLDivElement =
      fixture.nativeElement.querySelector('.container-neighborhood');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Bairro');
  });

  it('should render span neighborhood error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-neighborhood-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Bairro“ é obrigatório');
  });

  it('should render select state', () => {
    const select: HTMLSpanElement = fixture.nativeElement.querySelector('#State');
    expect(select).toBeTruthy();
  });

  it('should render container input state', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-state');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Estado');
  });

  it('should render span state error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-state-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Estado“ é obrigatório');
  });

  it('should render container input city', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-city');

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Cidade');
  });

  it('should render span city error required', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-field-city-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Cidade“ é obrigatório');
  });

  it('should render container input reference point', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-reference-point'
    );

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('Ponto de Referência (opcional)');
  });
});
