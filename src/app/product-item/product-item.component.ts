import { Component, OnInit, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as $ from 'jquery'
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnChanges {
  @HostBinding('attr.class') cssClass = 'product-item'
  @Input() product?: Product;
  title?: string = '';
  desc?: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('product')){
      let data = <Product>changes['product'].currentValue
      this.title = data.title?.slice(0,30);
      this.desc = data.description?.slice(0,60)+ '...'
    }
  }

}
