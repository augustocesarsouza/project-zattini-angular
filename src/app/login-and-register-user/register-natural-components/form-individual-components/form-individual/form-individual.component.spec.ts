import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndividualComponent } from './form-individual.component';

describe('FormIndividualComponent', () => {
  let component: FormIndividualComponent;
  let fixture: ComponentFixture<FormIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
