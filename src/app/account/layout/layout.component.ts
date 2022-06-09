import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: { class: 'overflow-hidden' },
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
