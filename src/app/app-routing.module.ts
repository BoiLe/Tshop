import { ChatComponent } from './message/component/chat/chat.component';
import { LayoutAdminComponent } from './message/layout-admin/layout-admin.component';
import { PinComponent } from './account/component/register/pin/pin.component';
import { PhoneComponent } from './account/component/register/phone/phone.component';
import { RegisterComponent } from './account/component/register/register.component';
import { ChangePassComponent } from './account/component/forget-pass/change-pass/change-pass.component';
import { OtpComponent } from './account/component/forget-pass/otp/otp.component';
import { ResetpassComponent } from './account/component/forget-pass/resetpass/resetpass.component';
import { ForgetPassComponent } from './account/component/forget-pass/forget-pass.component';
import { RegisterStoreComponent } from './account/component/register-store/register-store.component';
import { StoreComponent } from './account/component/store/store.component';
import { LayoutComponent } from './account/layout/layout.component';
import { LoginComponent } from './account/component/login/login.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingMessageComponent } from './message/component/setting-message/setting-message.component';
import { ModalBlockComponent } from './message/component/modal-block/modal-block.component';
import { ModalUnblockComponent } from './message/component/modal-unblock/modal-unblock.component';
import { RemoveMessageComponent } from './message/component/remove-message/remove-message.component';
import { ModalCusComponent } from './message/component/modal-cus/modal-cus.component';


import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderComponent } from './order/component/order/order.component';
import { OrderDetailComponent } from './order/component/order-detail/order-detail.component';
import { OrderRefundComponent } from './order/component/order-refund/order-refund.component';
import { DasboardComponent } from './message/component/dasboard/dasboard.component';
import { OrderRefundListComponent } from './order/component/order-refund/order-refund-list/order-refund-list.component';
import { OrderRefundDetailComponent } from './order/component/order-refund/order-refund-detail/order-refund-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/tai-khoan/dang-nhap', pathMatch: 'full' },
  {
    path: 'tai-khoan',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dang-nhap', pathMatch: 'full' },
      {
        path: 'dang-nhap',
        component: LoginComponent,
      },
      {
        path: 'cua-hang',
        component: StoreComponent,
      },
      {
        path: 'dang-ki',
        component: RegisterStoreComponent,
      },
      {
        path: 'dang-ki-tai-khoan',
        component: RegisterComponent,
        children: [
          { path: '', redirectTo: 'phone', pathMatch: 'full' },
          { path: 'phone', component: PhoneComponent },
          { path: 'nhap-thong-tin', component: PinComponent },
          { path: 'thay-doi-mat-khau', component: ChangePassComponent },
        ],
      },
      {
        path: 'quen-mat-khau',
        component: ForgetPassComponent,
        children: [
          { path: '', redirectTo: 'dat-lai-mat-khau', pathMatch: 'full' },
          { path: 'dat-lai-mat-khau', component: ResetpassComponent },
          { path: 'nhap-ma-xac-minh', component: OtpComponent },
          { path: 'thay-doi-mat-khau', component: ChangePassComponent },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '',  component: DasboardComponent,},
      { path: 'chat', component: ChatComponent,  },
      { path: 'setting', component: SettingMessageComponent },
      { path: 'order', component: OrderListComponent,   
      children: [   
        { path: '', component: OrderComponent },
        { path: 'order-detail', component: OrderDetailComponent },
        { path: 'order-refund', component: OrderRefundComponent,
        children: [
          { path: '', component: OrderRefundListComponent },    
        { path: 'order-refund-detail', component: OrderRefundDetailComponent },
                
        ] 
      },
      ] 
    },
    ],
  },
  { path: 'modal', component: ModalBlockComponent },
  { path: 'unmodal', component: ModalUnblockComponent },
  { path: 'remove', component: RemoveMessageComponent },
  { path: 'list-message', component: ModalCusComponent },
  { path: '**', redirectTo: 'admin/chat' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
