import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetalComponent } from './product-detal/product-detal.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ShippingPriceComponent } from './shipping-price/shipping-price.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'product/:productID', component: ProductDetalComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'shipping', component: ShippingPriceComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetalComponent,
    CartDetailComponent,
    ShippingPriceComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/