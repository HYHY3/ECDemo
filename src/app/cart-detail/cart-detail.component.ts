import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent implements OnInit {
  allItemsInCart: Product[] = [];

  constructor(private cartInfo: CartService) {

  }

  ngOnInit() {
    this.allItemsInCart = this.cartInfo.getAllItemsInfo();
  }

  onPurchase() {
    window.alert('Your products have been submitted!');
  }
}
