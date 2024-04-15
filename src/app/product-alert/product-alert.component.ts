import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrl: './product-alert.component.css'
})
export class ProductAlertComponent {
  @Input()
  notifiedProduct: Product | undefined;

  @Output()
  notifyInfo = new EventEmitter();
}
