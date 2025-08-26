import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThirdComponent } from './header-third.component';

describe('HeaderThirdComponent', () => {
  let component: HeaderThirdComponent;
  let fixture: ComponentFixture<HeaderThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
