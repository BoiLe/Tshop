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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TDSBadgeModule, TDSBreadCrumbModule, TDSButtonModule, TDSCheckBoxModule, TDSCollapseModule, TDSDropDownModule, TDSFilterStatusModule, TDSFormFieldModule, TDSHeaderModule, TDSInputModule, TDSMenuModule, TDSModalModule, TDSSelectModule, TDSStepsModule, TDSSwitchModule, TDSTableModule, TDSTabsModule, TDSTagModule, TDSTimePickerModule } from 'tmt-tang-ui';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DasboardComponent } from './component/dasboard/dasboard.component';


@NgModule({
  declarations: [ChatComponent, LayoutAdminComponent, SettingMessageComponent, AddShortcutComponent, ModalBlockComponent, ModalUnblockComponent, RemoveMessageComponent, ModalCusComponent,DasboardComponent, ],
  imports: [
    RouterModule,
    CommonModule,
    TDSHeaderModule,
    TDSFormFieldModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSInputModule,
    TDSMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    TDSTagModule,
    TDSBreadCrumbModule,
    TDSDropDownModule,
    TDSCheckBoxModule,
    TDSTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    TDSSwitchModule,
    TDSModalModule,
    TDSCollapseModule,
    TDSBadgeModule,
    TDSTableModule, 
    TDSTabsModule,
    TDSFilterStatusModule,
    TDSStepsModule
    
    


  ],
  exports: [ChatComponent, LayoutAdminComponent],
})
export class MessageModule { }
