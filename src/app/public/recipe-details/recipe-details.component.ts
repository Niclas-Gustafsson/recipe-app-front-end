import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from "../recipe";
import {List} from "../../private/lists/list";
import {ListsService} from "../../private/lists/lists.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  recipeId!: any;
  loggedIn!: boolean;
  lists!: List[];
  /*instructionLink!: string;*/
  constructor(private recipeService: RecipesService, private listService: ListsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('id') !== null;

    this.recipeId = this.route.snapshot.params['id'];
    if(this.loggedIn) {
      this.listService.getLists().subscribe((res ) => {
        this.lists = Object(res).data;

      });
    }


    this.recipeService.getRecipeById(this.recipeId).subscribe((res: Recipe) => {
      this.recipe = res;

    })
  }

  userAddRecipe(listId: number, recipeName: string, recipeId: number, image: string) {
    const data = {
      recipeName: recipeName,
      recipeId: recipeId,
      image: image,
    }
    this.listService.addRecipe(listId, data).subscribe((res: object) => {

    })
  }

}
