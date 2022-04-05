import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable, throwError, map, BehaviorSubject} from "rxjs";
import {Recipe} from "./recipe";


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  apiKey!: string;
  apiUrl = 'https://api.spoonacular.com/recipes';
  recipes: Recipe[] = [];
  recipeId!: number;
  recipeId$ = new BehaviorSubject<number>(0);
  selectedRecipe$ = this.recipeId$.asObservable();


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;

  }

  setRecipeId(recipeId: any) {
    this.recipeId = recipeId;
    return this.recipeId$.next(recipeId);
  }
  getRandomRecipes(): Observable<object> {
    return this.http.get(`${this.apiUrl}/random?apiKey=${this.apiKey}&number=12&tags=breakfast`, this.httpOptions);
  }

  getRecipeById(recipeId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${recipeId}/information?apiKey=${this.apiKey}`);
  }

  searchRecipe(data: any): Observable<object> {
    return this.http.get(`${this.apiUrl}/complexSearch?apiKey=${this.apiKey}&query=${data.query}&diet=${data.diet}&type=${data.type}`, this.httpOptions)
  }

}
