import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ListsService} from "../lists.service";
import {Recipe} from "../recipe";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  /*@Input() recipes!: Recipe[];
  @Output() recipesChange:EventEmitter<Recipe[]> =new EventEmitter<Recipe[]>();*/

//Raise the event to send the data back to parent
  /*update() {
    this.recipesChange.emit(this.recipes);
  }*/
  constructor( public listsService: ListsService) { }

  ngOnInit(): void {
  }
  /*this.list = this.listsService*/
}
