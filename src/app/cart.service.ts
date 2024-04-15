import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  allItems: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.allItems.push(product);
  }

  clearCart() {
    this.allItems = [];
    return this.allItems;
  }

  getAllItemsInfo() {
    return this.allItems;
  }
}
