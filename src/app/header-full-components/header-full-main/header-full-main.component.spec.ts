import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFullMainComponent } from './header-full-main.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderMainComponent } from '../header-components/header-main/header-main.component';
import { HeaderSecondMainComponent } from '../header-second-components/header-second-main/header-second-main.component';

describe('HeaderFullMainComponent', () => {
  let component: HeaderFullMainComponent;
  let fixture: ComponentFixture<HeaderFullMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderFullMainComponent, HeaderMainComponent, HeaderSecondMainComponent],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFullMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
