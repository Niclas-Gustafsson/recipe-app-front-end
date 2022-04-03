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
  instructionLink!: string;
  constructor(private recipeService: RecipesService, private listService: ListsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('id') !== null;
    //this.getRecipeId(window.location.href);
    //console.log(this.loggedIn)
    this.recipeId = this.route.snapshot.params['id'];
    if(this.loggedIn) {
      this.listService.getLists().subscribe((res ) => {
        this.lists = Object(res).data;

      });
    }

    /*this.recipeId = window.location.href;
    console.log(this.recipeId)*/
    /*this.recipeService.selectedRecipe$.subscribe((value) => {
      this.recipeId = value;
      console.log(this.recipeId)
    });*/
    //console.log(this.recipeId);

    this.recipeService.getRecipeById(this.recipeId).subscribe((res: Recipe) => {
      this.recipe = res;
      //this.recipe = Object(res)
      console.log(this.recipe.id);
    })
  }

  /*getRecipeId(address: string) {
    //let recipeId = address.slice((-6))
    this.recipeId  = address.slice((-6));
  }*/

  userAddRecipe(listId: number, recipeName: string, recipeId: number, image: string) {
    const data = {
      recipeName: recipeName,
      recipeId: recipeId,
      image: image,
    }
    this.listService.addRecipe(listId, data).subscribe((res: object) => {
      console.log(res);
    })
    console.log(listId)
    console.log(recipeName)
    console.log(recipeId)
    console.log(image)
  }

}
