import { Component, OnInit, HostBinding } from '@angular/core';

interface Category {
  name: string,
  icon: string,
  active: string
}

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'secondary-header'
  categories: Category[] = [
    { name: "electronics", icon: 'tv_gen', active: ''},
    { name: "jewelery", icon: 'diamond', active: 'active'},
    { name: "men's clothing", icon: 'checkroom', active: ''},
    { name: "women's clothing", icon: 'woman_2', active: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
