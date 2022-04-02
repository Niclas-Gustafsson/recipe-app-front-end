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
  //diet: string = 'Filter diets';
  //Get recipes from home component to display. Maybe include the subscribe here instead and print it?
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
 /* //Form controller
  changeDiet(e: any) {
  this.diet?.setValue(e.target.value, {
    onlySelf: true
  })
  }

  get diet() {
    return this.form.get('diets.value');
  }

  changeType(e: any) {
    this.type?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get type() {
    return this.form.get('type');
  }*/


  searchRecipe() {
    console.log(this.form);

    if(!this.form.valid) {
      this.isValid = false;
      this.errorMessage = '* Please enter a search term';
      console.log(this.isValid)
    } else {
      this.isValid = true;
      /*console.log(this.form.getRawValue());*/

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
    /*const formData = this.form.getRawValue();
    const data = {
      query: formData.query,
      diet: formData.diet,
      dishTypes: formData.dishTypes,
    }
    console.log(data)*/
  }
  //Emits the recipeId to home component
  sendRecipeId(recipeId: number) {
    //console.log(recipeId)
    //this.recipeService.setRecipeId(recipeId);
    this.emitRecipeId.emit(recipeId);
  }
}
