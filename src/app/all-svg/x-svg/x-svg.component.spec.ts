import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSvgComponent } from './x-svg.component';

describe('XSvgComponent', () => {
  let component: XSvgComponent;
  let fixture: ComponentFixture<XSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
