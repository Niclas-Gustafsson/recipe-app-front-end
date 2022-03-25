import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {PublicComponent} from "./public.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    //AppRoutingModule
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicModule { }
