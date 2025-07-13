import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondMainComponent } from './header-second-main.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('HeaderSecondMainComponent', () => {
  let component: HeaderSecondMainComponent;
  let fixture: ComponentFixture<HeaderSecondMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSecondMainComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderSecondMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container-img-zattini', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector('.container-img-zattini');
    expect(container).toBeTruthy();
  });

  it('should render input search today', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector(
      '.input-what-you-search-today'
    );
    expect(input).toBeTruthy();
  });

  it('should render container app magnifying glass', () => {
    const container: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-app-magnifying-glass'
    );
    expect(container).toBeTruthy();
  });

  it('should render container heart svg and span', () => {
    const containerHeartSvg: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-heart-svg-and-span > app-heart-svg'
    );
    expect(containerHeartSvg).toBeTruthy();

    const span = fixture.nativeElement.querySelector(
      '.container-heart-svg-and-span > span'
    ) as HTMLElement;
    expect(span.textContent?.trim()).toBe('Lista de Desejos');
  });

  it('should render the image body-user-login with correct alt and src and span login enter', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img[alt="img-body-user-login"]'
    );
    expect(img).toBeTruthy();

    expect(img.alt).toBe('img-body-user-login');
    expect(img.src).toBe(
      'https://static.netshoes.com.br/vue-components/6.87.1/zattini/images/8873f01bf36af32c19419879c17bacfa.svg'
    );

    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-login-enter');
    expect(span.textContent?.trim()).toBe('Entrar');
  });

  it('should render container shopping card svg and span quantity', () => {
    const containerShoppingCardSvg: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-shopping-card-svg > app-shopping-card-svg'
    );
    expect(containerShoppingCardSvg).toBeTruthy();

    const span: HTMLDivElement = fixture.nativeElement.querySelector(
      '.container-shopping-card-svg > span'
    );
    expect(span.textContent?.trim()).toBe('0');
  });
});
