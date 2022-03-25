import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateComponent } from './private/private.component';
import {PublicModule} from "./public/public.module";


@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
