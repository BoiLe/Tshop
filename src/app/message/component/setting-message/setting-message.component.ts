import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-message',
  templateUrl: './setting-message.component.html',
  styleUrls: ['./setting-message.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class SettingMessageComponent implements OnInit {
  show = true;
  showadd = true;
  constructor() { }

  ngOnInit(): void {
  }

}
