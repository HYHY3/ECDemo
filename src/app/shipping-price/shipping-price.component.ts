import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping-price',
  templateUrl: './shipping-price.component.html',
  styleUrl: './shipping-price.component.css'
})
export class ShippingPriceComponent implements OnInit{
  allShippingList!: Observable<{ type: string; price: number; }[]>;

  constructor(private httpService:HttpClient){

  }

  ngOnInit(){
    //this.allShippingList  = this.httpService.get<{type:string, price:string}[]>("./assets/shipping.json");
  }
}
