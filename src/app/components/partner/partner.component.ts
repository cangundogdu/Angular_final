import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})




export class PartnerComponent implements OnInit, OnDestroy {
  products: any;
  subscription!: Subscription;


  imgList: any[] = []

  constructor(private productsService: ProductsService, private dataStore: DataStoreService) {
    this.imgList = [
      {id: 1, path:"https://cash-f.squarecdn.com/web/marketing/171aaef7bfa2e75a6b58f7521a6c03425511acc3/assets/images/home-2021/intro-seq-7.png"},
      {id: 2, path:"https://cash-f.squarecdn.com/web/marketing/171aaef7bfa2e75a6b58f7521a6c03425511acc3/assets/images/home-2021/tldr-feature-3.png"},
      {id: 3, path:"https://cash-f.squarecdn.com/web/marketing/171aaef7bfa2e75a6b58f7521a6c03425511acc3/assets/images/home-2021/spend-phone.png"},
      {id: 4, path:"https://www.paypalobjects.com/marketing/web/ca/en/home/HP_Banner_Evergreen.png"},
      {id: 5, path:"https://images.ctfassets.net/2d5q1td6cyxq/1g9gLnHbgI4sKEvIpXqNLH/f9a3964af9d4d9f861cbfee849f74a40/PD01120_-_CA_payments_phone_tap_snow_photobreak.png?w=2582&h=1076&fm=webp&q=85&fit=scale"}
   
    ];
   }

  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.getOrderData();

    this.subscription = this.dataStore.products$.subscribe(products => {
      this.products = products;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
