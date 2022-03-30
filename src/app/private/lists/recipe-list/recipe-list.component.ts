import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ListsService} from "../lists.service";
import {Recipe} from "../recipe";
import {Observable} from "rxjs";
import {ListsComponent} from "../lists.component";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  recipeCount = this.recipes.length;
  //recipes: Recipe[] = [];//history.state.data.recipes;
  /*@Output() recipesChange:EventEmitter<Recipe[]> =new EventEmitter<Recipe[]>();*/

//Raise the event to send the data back to parent
  /*update() {
    this.recipesChange.emit(this.recipes);
  }*/
  constructor( public lists: ListsComponent) { }

  ngOnInit(): void {
    //this.recipes = this.lists.recipes;
    //this.recipes.push(history.state.data);//= history.state.data;
    //console.log(this.recipes[0]);
  }
  /*this.list = this.listsService*/
}
