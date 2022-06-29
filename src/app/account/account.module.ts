
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { StoreComponent } from './component/store/store.component';
import { RegisterStoreComponent } from './component/register-store/register-store.component';
import { ForgetPassComponent } from './component/forget-pass/forget-pass.component';
import { ResetpassComponent } from './component/forget-pass/resetpass/resetpass.component';
import { OtpComponent } from './component/forget-pass/otp/otp.component';
import { ChangePassComponent } from './component/forget-pass/change-pass/change-pass.component';
import { RegisterComponent } from './component/register/register.component';
import { PhoneComponent } from './component/register/phone/phone.component';
import { PinComponent } from './component/register/pin/pin.component';
import { TDSAvatarModule, TDSButtonModule, TDSCardModule, TDSCheckBoxModule, TDSDividerModule, TDSDropDownModule, TDSFormFieldModule, TDSHeaderModule, TDSInputModule, TDSSelectModule } from 'tmt-tang-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './component/login/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-store/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    StoreComponent,
    RegisterStoreComponent,
    ForgetPassComponent,
    ResetpassComponent,
    OtpComponent,
    ChangePassComponent,
    RegisterComponent,
    PhoneComponent,
    PinComponent,
    LoginFormComponent,
    RegisterFormComponent,
    



  ],
  imports: [
    CommonModule, 
    RouterModule,
    AccountRoutingModule,
    TDSAvatarModule,
    TDSHeaderModule,
    TDSDropDownModule,
    TDSButtonModule,
    TDSFormFieldModule,
    TDSCheckBoxModule,
    FormsModule,
    ReactiveFormsModule,
    TDSInputModule,
    TDSDividerModule,
    TDSSelectModule,
    BrowserAnimationsModule,
    TDSCardModule
    
    
  
    
    
    
    

  ],
  exports: [LayoutComponent, LoginComponent],
})
export class AccountModule { }
