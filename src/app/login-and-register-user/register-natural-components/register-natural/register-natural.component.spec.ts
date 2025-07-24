import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNaturalComponent } from './register-natural.component';

describe('RegisterNaturalComponent', () => {
  let component: RegisterNaturalComponent;
  let fixture: ComponentFixture<RegisterNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNaturalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
