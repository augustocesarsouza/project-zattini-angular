import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardSvgComponent } from './shopping-card-svg.component';

describe('ShoppingCardSvgComponent', () => {
  let component: ShoppingCardSvgComponent;
  let fixture: ComponentFixture<ShoppingCardSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCardSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCardSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
