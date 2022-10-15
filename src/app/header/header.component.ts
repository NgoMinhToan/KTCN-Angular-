import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  value = '';
  searchList: string[] = [
    'LN Hyouka',
    'Acer Nitro 5 2022',
    'Camera Ezviz C3N',
    'Thẻ nhớ 32gb',
    'Candy bay 12.7mm',
    'Đầu đọc USB'
  ]

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.value)
  }

}
