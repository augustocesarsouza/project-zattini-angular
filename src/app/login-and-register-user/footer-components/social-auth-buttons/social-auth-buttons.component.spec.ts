import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthButtonsComponent } from './social-auth-buttons.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('SocialAuthButtonsComponent', () => {
  let component: SocialAuthButtonsComponent;
  let fixture: ComponentFixture<SocialAuthButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialAuthButtonsComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialAuthButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span acess your account', () => {
    const span: HTMLHeadingElement = fixture.nativeElement.querySelector(
      '.span-access-your-account'
    );
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe(
      'Acesse sua conta Zattini através de suas redes sociais.'
    );
  });

  it('should render span and icon connect with facebook', () => {
    const span: HTMLHeadingElement = fixture.nativeElement.querySelector(
      '.span-connect-with-facebook'
    );
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe('Conectar com Facebook');

    const icon = fixture.nativeElement.querySelector('.icon-facebook');
    expect(icon).toBeTruthy();
  });

  it('should render app-google-svg and span with in with google', () => {
    const appGoogleSvg = fixture.nativeElement.querySelector(
      '.container-sign-with-google > app-google-svg'
    );
    expect(appGoogleSvg).toBeTruthy();

    const span = fixture.nativeElement.querySelector('.container-sign-with-google > span');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe('Sign in with Google');
  });

  it('should render span and icon connect with magalu', () => {
    const span: HTMLHeadingElement = fixture.nativeElement.querySelector('.login-with-magalu');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe('Entrar com ID Magalu');

    const icon = fixture.nativeElement.querySelector('.icon-magalu');
    expect(icon).toBeTruthy();
  });
});
