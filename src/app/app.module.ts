import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { TypingTextComponent } from './components/header/typing-text/typing-text.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypingTextComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
  ]
})
export class AppModule { }
