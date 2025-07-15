import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAccountComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header already client', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.header-create-account');
    expect(header).toBeTruthy();
    expect(header.textContent?.trim()).toBe('Criar conta');
  });

  it('should render input email', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('.input-email');
    expect(input).toBeTruthy();
  });

  it('should render span enter your email', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-enter-your-email');
    expect(span).toBeTruthy();
  });

  it('should render button continue', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.button-continue');
    expect(button).toBeTruthy();
    expect(button.textContent?.trim()).toBe('Prosseguir');
  });
});
