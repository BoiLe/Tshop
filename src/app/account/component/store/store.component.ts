import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public store = [
    {
      id: 1,
      name: 'Shop giày thật giá thật',
      phone: '0922000234',
    },
    {
      id: 2,
      name: 'Shop giày thật giá thật',
      phone: '0922000234',
    },
    {
      id: 3,
      name: 'Shop giày thật giá thật',
      phone: '0922000234',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
