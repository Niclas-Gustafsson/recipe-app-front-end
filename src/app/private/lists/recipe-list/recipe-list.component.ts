import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ListsService} from "../lists.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  recipeCount = this.recipes.length;

  constructor( public listService: ListsService) { }

  ngOnInit(): void {

  }


  deleteRecipe(id: number, listId: number) {
    this.listService.deleteRecipe(id).subscribe((res) => {
      this.recipes = this.recipes.filter((item) => item.id !== id);
    });
  }
}
