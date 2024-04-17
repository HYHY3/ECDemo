import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPriceComponent } from './shipping-price.component';

describe('ShippingPriceComponent', () => {
  let component: ShippingPriceComponent;
  let fixture: ComponentFixture<ShippingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
