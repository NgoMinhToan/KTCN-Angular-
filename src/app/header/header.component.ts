import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.value)
  }

}
