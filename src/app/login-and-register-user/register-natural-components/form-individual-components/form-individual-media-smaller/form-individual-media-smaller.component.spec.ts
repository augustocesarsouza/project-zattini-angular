import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndividualMediaSmallerComponent } from './form-individual-media-smaller.component';

describe('FormIndividualMediaSmallerComponent', () => {
  let component: FormIndividualMediaSmallerComponent;
  let fixture: ComponentFixture<FormIndividualMediaSmallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIndividualMediaSmallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndividualMediaSmallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
