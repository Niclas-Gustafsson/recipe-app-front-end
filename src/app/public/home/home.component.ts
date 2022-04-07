import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe";

import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService, private router: Router) {

  }

  ngOnInit(): void {
     this.recipeService.getRandomRecipes().subscribe((res: any) => {
       this.recipes = res.recipes.map((res: any) => res);

     })
  }

  //Sends the recipeId to recipeService.
  getRecipeId(recipeId: number) {
    this.recipeService.setRecipeId(recipeId);


  this.router.navigate([`/recipe/${recipeId}`])
  }
}
