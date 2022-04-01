import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe'
import {RecipesService} from "../../recipes.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //Get recipes from home component to display. Maybe include the subscribe here instead and print it?
  @Input() recipes!: Recipe[];
  //Send recipeId to home component.
  @Output() emitRecipeId = new EventEmitter<number>()
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }
  sendRecipeId(recipeId: number) {
    //console.log(recipeId)
    //this.recipeService.setRecipeId(recipeId);
    this.emitRecipeId.emit(recipeId);
  }
}
