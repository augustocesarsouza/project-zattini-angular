import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodPaymentComponent } from './method-payment.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('MethodPaymentComponent', () => {
  let component: MethodPaymentComponent;
  let fixture: ComponentFixture<MethodPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodPaymentComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span need help', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-need-help');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe('Precisa de Ajuda?');
  });

  it('should render all icon method payment', () => {
    const iconAll = fixture.nativeElement.querySelectorAll('.icon-method');
    expect(iconAll).toBeTruthy();
    expect(iconAll.length).toBe(8);
  });

  it('should render span split your purchases', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-split-your-purchases');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe(
      'Divida suas compras em 2 cartões e pague em até 10x sem juros'
    );
  });
});
