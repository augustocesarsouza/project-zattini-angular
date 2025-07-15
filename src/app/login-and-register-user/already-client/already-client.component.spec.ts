import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyClientComponent } from './already-client.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('AlreadyClientComponent', () => {
  let component: AlreadyClientComponent;
  let fixture: ComponentFixture<AlreadyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlreadyClientComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(AlreadyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header already client', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.header-already-client');
    expect(header).toBeTruthy();
    expect(header.textContent?.trim()).toBe('Já sou cliente');
  });

  it('should render input email and cpf cnpj', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('.input-email-cpf-cnpj');
    expect(input).toBeTruthy();
  });

  it('should render span email and cpf cnpj', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-email-cpf-cnpj');
    expect(span).toBeTruthy();
  });

  it('should render input password', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('.input-password');
    expect(input).toBeTruthy();
  });

  it('should render span password', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-password');
    expect(span).toBeTruthy();
  });

  it('should render container eye open', () => {
    const containerEyeOpen: HTMLDivElement =
      fixture.nativeElement.querySelector('.container-eye-open');
    expect(containerEyeOpen).toBeTruthy();
  });

  it('should render span forgot my password', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-forgot-my-passowrd');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe('Esqueci minha senha');
  });

  it('should render button access account', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.button-access-account');
    expect(button).toBeTruthy();
    expect(button.textContent?.trim()).toBe('Acessar conta');
  });
});
