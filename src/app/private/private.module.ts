import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {PrivateComponent} from "./private.component";
import {ListsComponent} from "./lists/lists.component";
import { RecipeListComponent } from './lists/recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    PrivateComponent,
    ListsComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
