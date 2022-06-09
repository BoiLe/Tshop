import { MessageModule } from './message/message.module';
import { AccountModule } from './account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AccountModule,
    MessageModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
