import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYourAccountComponent } from './about-your-account.component';

describe('AboutYourAccountComponent', () => {
  let component: AboutYourAccountComponent;
  let fixture: ComponentFixture<AboutYourAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutYourAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutYourAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
