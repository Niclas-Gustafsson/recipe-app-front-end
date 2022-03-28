import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {PrivateComponent} from "./private.component";
import {ListsComponent} from "./lists/lists.component";
import { RecipeListComponent } from './lists/recipe-list/recipe-list.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PrivateComponent,
    ListsComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
