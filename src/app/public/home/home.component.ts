import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe";
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //apiKey!: string;
  recipes: Recipe[] = [];
  recipeId!: number;
  constructor(private recipeService: RecipesService, private router: Router) {
    /*this.apiKey = environment.API_KEY;
    console.log(this.apiKey);*/
  }

  ngOnInit(): void {
     this.recipeService.getRandomRecipes().subscribe((res: any) => {
       this.recipes = res.recipes.map((res: any) => res);
       console.log(this.recipes);
     })
  }
  getRecipeId(recipeId: number) {
  this.recipeService.recipeId = recipeId;
  /*this.router.navigate([`/recipe/${recipeId}`])*/
    /*console.log(this.recipeService.recipeId);*/
  }
}
