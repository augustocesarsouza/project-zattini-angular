import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndividualMediaGreateComponent } from './form-individual-media-greate.component';

describe('FormIndividualMediaGreateComponent', () => {
  let component: FormIndividualMediaGreateComponent;
  let fixture: ComponentFixture<FormIndividualMediaGreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIndividualMediaGreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndividualMediaGreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
