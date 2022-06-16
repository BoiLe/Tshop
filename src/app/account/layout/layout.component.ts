import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: { class: 'overflow-hidden' },
})
export class LayoutComponent implements OnInit {
  constructor() {}
  public contact: number = 1;

  public contactOptions = [
    { id: 1, name: ' Elton John ' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  ngOnInit(): void {}
}
