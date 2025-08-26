import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifyingGlassBrandSvgComponent } from './magnifying-glass-brand-svg.component';

describe('MagnifyingGlassBrandSvgComponent', () => {
  let component: MagnifyingGlassBrandSvgComponent;
  let fixture: ComponentFixture<MagnifyingGlassBrandSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagnifyingGlassBrandSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnifyingGlassBrandSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
