import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLegalEntityComponent } from './form-legal-entity.component';

describe('FormLegalEntityComponent', () => {
  let component: FormLegalEntityComponent;
  let fixture: ComponentFixture<FormLegalEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormLegalEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
