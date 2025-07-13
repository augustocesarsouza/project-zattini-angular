import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainComponent } from './header-main.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderMainComponent', () => {
  let component: HeaderMainComponent;
  let fixture: ComponentFixture<HeaderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMainComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image netshoes with correct alt and src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img[alt="img-netshoes"]');
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-netshoes');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/9caac9b8a9cbe181128c0ec2bd7babeb.svg'
    );
  });

  it('should render the image shoestock with correct alt and src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img[alt="img-shoestock"]');
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-shoestock');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/7a1e4556f6c919d155e3c6adf1acf5d3.svg'
    );
  });

  it('should render the image accessibility with correct alt and src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img[alt="img-accessibility"]'
    );
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-accessibility');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/b7bd5a13283ea6e0f3d91483b9cc45f5.svg'
    );

    const span = fixture.nativeElement.querySelector('.span-accessibility');
    expect(span.textContent?.trim()).toBe('Acessibilidade');
  });

  it('should render the image netshoes-card with correct alt and src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img[alt="img-netshoes-card"]'
    );
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-netshoes-card');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/869fb4d74f4745097a97135406daf524.svg'
    );

    const span = fixture.nativeElement.querySelector('.span-netshoes-card');
    expect(span.textContent?.trim()).toBe('Cartão Netshoes');
  });

  it('should render the image download-app with correct alt and src', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img[alt="img-download-app"]'
    );
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-download-app');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/a84047250de7cc084f2ce5fea5792c34.svg'
    );

    const span = fixture.nativeElement.querySelector('.span-download-app');
    expect(span.textContent?.trim()).toBe('Baixe o app');
  });

  it('should render span help', () => {
    const span = fixture.nativeElement.querySelector('.span-help');
    expect(span.textContent?.trim()).toBe('Ajuda');
  });
});
