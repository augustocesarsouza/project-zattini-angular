import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartSvgComponent } from './heart-svg.component';

describe('HeartSvgComponent', () => {
  let component: HeartSvgComponent;
  let fixture: ComponentFixture<HeartSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeartSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
