import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportstyleMainComponent } from './sportstyle-main.component';

describe('SportstyleMainComponent', () => {
  let component: SportstyleMainComponent;
  let fixture: ComponentFixture<SportstyleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportstyleMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportstyleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
