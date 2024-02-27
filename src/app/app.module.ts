import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
