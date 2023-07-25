import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
