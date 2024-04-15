import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, allProducts } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detal',
  templateUrl: './product-detal.component.html',
  styleUrl: './product-detal.component.css'
})
export class ProductDetalComponent implements OnInit {
  productDetailInfo: Product | undefined;

  constructor(private routeInfo: ActivatedRoute, private cartInfo: CartService) {

  }

  addItemToCart(product: Product) {
    this.cartInfo.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.routeInfo.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productID'));

    // Find the product that correspond with the id provided in route.
    this.productDetailInfo = allProducts.find(productTemp => productTemp.id === productIdFromRoute);
  }
}
