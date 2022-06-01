import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class ChatComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}
}
