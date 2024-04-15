import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, allProducts } from '../products';

@Component({
  selector: 'app-product-detal',
  templateUrl: './product-detal.component.html',
  styleUrl: './product-detal.component.css'
})
export class ProductDetalComponent implements OnInit {
  productDetailInfo: Product | undefined;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productID'));

    // Find the product that correspond with the id provided in route.
    this.productDetailInfo = allProducts.find(productTemp => productTemp.id === productIdFromRoute);
  }
}
