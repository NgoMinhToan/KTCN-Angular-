import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map, tap } from 'rxjs';
import { Product } from '../models/Product';
import { StoreApiService } from '../services/StoreApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [StoreApiService]
})
export class HomeComponent implements OnInit, OnChanges {
  productList: Product[] = []
  constructor(private storeService: StoreApiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.hasOwnProperty('productList')) {
    //   let data = changes['productList'].currentValue
    //   this.productList = data
    // }
  }

  ngOnInit(): void {
    this.storeService.getProduct().pipe(
      tap(data => console.log(data)),
      map(data => {
        this.productList = data
      })
    ).subscribe()
  }

}
