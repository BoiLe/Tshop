import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './component/chat/chat.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { SettingMessageComponent } from './component/setting-message/setting-message.component';
import { AddShortcutComponent } from './component/add-shortcut/add-shortcut.component';
import { ModalBlockComponent } from './component/modal-block/modal-block.component';
import { ModalUnblockComponent } from './component/modal-unblock/modal-unblock.component';
import { RemoveMessageComponent } from './component/remove-message/remove-message.component';
import { ModalCusComponent } from './component/modal-cus/modal-cus.component';

@NgModule({
  declarations: [ChatComponent, LayoutAdminComponent, SettingMessageComponent, AddShortcutComponent, ModalBlockComponent, ModalUnblockComponent, RemoveMessageComponent, ModalCusComponent],
  imports: [RouterModule, CommonModule],
  exports: [ChatComponent, LayoutAdminComponent],
})
export class MessageModule {}
