import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable, throwError, map} from "rxjs";
import { catchError } from 'rxjs/operators';
import {Recipe} from "./recipe";
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiKey!: string;
  apiUrl = 'https://api.spoonacular.com/recipes';
  recipes: Recipe[] = [];
  recipeId!: number;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
    //console.log(this.apiKey);
  }
  getRandomRecipes(): Observable<object> {
    return this.http.get(`${this.apiUrl}/random?apiKey=${this.apiKey}&number=12&tags=breakfast`, this.httpOptions)
      //.pipe(map((recipes) => recipes))
      ;
  }

}
