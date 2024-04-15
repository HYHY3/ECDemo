import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetalComponent } from './product-detal.component';

describe('ProductDetalComponent', () => {
  let component: ProductDetalComponent;
  let fixture: ComponentFixture<ProductDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
