import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe'
import {RecipesService} from "../../recipes.service";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  isValid!: boolean;
  errorMessage: string = '';
  diets: string[] = ['Gluten free', 'Vegetarian', 'Vegan'];
  dishTypes: string[] = ['Breakfast', 'Dessert', 'Main course'];

  @Input() recipes!: Recipe[];
  //Send recipeId to home component.
  @Output() emitRecipeId = new EventEmitter<number>();
  constructor(private recipeService: RecipesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      query: ['', [Validators.required]],
      diet: '',
      dishTypes: ''
    });
  }


  searchRecipe() {

    if(!this.form.valid) {
      this.isValid = false;
      this.errorMessage = '* Please enter a search term';

    } else {
      this.isValid = true;


        const formData = this.form.getRawValue();
        let data = {
        query: formData.query,
        diet: formData.diet,
        type: formData.dishTypes,
      }
      this.recipeService.searchRecipe(data).subscribe((res: any) => {
        this.recipes = res.results;
      })

    }
  }
  //Emits the recipeId to home component
  sendRecipeId(recipeId: number) {

    this.emitRecipeId.emit(recipeId);
  }
}
