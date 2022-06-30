import { MessageModule } from './message/message.module';
import { AccountModule } from './account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReviewStoreModule } from './review-store/review-store.module';
;


@NgModule({
  declarations: [AppComponent],
  imports: [
    AccountModule,
    MessageModule,
    OrderModule,
    ReviewStoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
