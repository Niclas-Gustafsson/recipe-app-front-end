import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable, throwError, map, BehaviorSubject} from "rxjs";
import { catchError } from 'rxjs/operators';
import {Recipe} from "./recipe";
import {List} from "../private/lists/list";
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
  /*https://api.spoonacular.com/recipes/638917/information?apiKey=1a62e7a9372d4458a615242ff6a4ff9e*/

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
    //console.log(this.apiKey);
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
    //return this.http.get<Recipe>(`${this.apiUrl}/${this.recipeId}/information?apiKey=${this.apiKey}`);
  }

  /*getLists(): Observable<List[]>  {
    return this.http.get<List[]>(`${this.apiURL}/lists/${localStorage.getItem('id')}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  private apiURL = 'http://127.0.0.1:8000/api';
  }*/

}
