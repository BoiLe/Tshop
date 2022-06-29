import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TDSHeaderModule, TDSFormFieldModule, TDSSelectModule, TDSButtonModule, TDSInputModule, TDSMenuModule, TDSTagModule, TDSBreadCrumbModule, TDSDropDownModule, TDSCheckBoxModule, TDSTimePickerModule, TDSSwitchModule, TDSModalModule, TDSCollapseModule, TDSBadgeModule, TDSTableModule, TDSTabsModule, TDSFilterStatusModule, TDSStepsModule } from 'tmt-tang-ui';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { OrderRefundComponent } from './component/order-refund/order-refund.component';
import { OrderRefundListComponent } from './component/order-refund/order-refund-list/order-refund-list.component';
import { OrderRefundDetailComponent } from './component/order-refund/order-refund-detail/order-refund-detail.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderComponent,
    OrderDetailComponent,
    OrderRefundComponent,
    OrderRefundListComponent,
    OrderRefundDetailComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ]
})
export class OrderModule { }
