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

  it('should render container input name', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-name');
    console.log(container);

    expect(container).toBeTruthy();
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
    expect(span?.textContent).toBe('* Nome');
  });

  it('should render span name error required', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-input-name');
    expect(container).toBeTruthy();

    const span: HTMLSpanElement = fixture.nativeElement.querySelector(
      '[data-testid="error-name-required"]'
    );
    span.style.display = 'flex';

    expect(span).toBeTruthy();
    expect(span.textContent).toBe('O campo “Nome“ é obrigatório');
  });
});
