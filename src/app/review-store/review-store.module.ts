import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewStoreRoutingModule } from './review-store-routing.module';
import { ReviewProductComponent } from './component/review-product/review-product.component';
import { ReviewTransportersComponent } from './component/review-transporters/review-transporters.component';
import { TDSBadgeModule, TDSBreadCrumbModule, TDSButtonModule, TDSCheckBoxModule, TDSCollapseModule, TDSDropDownModule, TDSFilterStatusModule, TDSFormFieldModule, TDSHeaderModule, TDSInputModule, TDSModalModule, TDSRateModule, TDSSelectModule, TDSStepsModule, TDSSwitchModule, TDSTableModule, TDSTabsModule, TDSTagModule, TDSTimePickerModule } from 'tmt-tang-ui';
import { ReviewStoreComponent } from './component/review-store/review-store.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    ReviewStoreComponent,
    ReviewProductComponent,
    ReviewTransportersComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TDSHeaderModule,
    TDSFormFieldModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSInputModule,
    TDSInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
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
    TDSStepsModule,
    TDSRateModule

    
  ]
})
export class ReviewStoreModule { }
