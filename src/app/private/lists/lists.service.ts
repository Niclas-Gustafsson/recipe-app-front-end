import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {List} from "./list";
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private apiURL = 'http://127.0.0.1:8000/api';
  //recipes: Recipe[] = [];
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  }


  //Create list
  createList(data: object): Observable<List> {

    return this.http.post<List>(`${this.apiURL}/create-list/${localStorage.getItem("id")}`, data, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  //Get user lists
  getLists(): Observable<List[]>  {
    return this.http.get<List[]>(`${this.apiURL}/lists/${localStorage.getItem('id')}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getRecipes(listId:number): Observable<Recipe[]> {
    //this.recipes = this.http.get<Recipe[]>(`${this.apiURL}/list/${listId}`, this.httpOptions)
    return this.http.get<Recipe[]>(`${this.apiURL}/list/${listId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteList(listId: number): Observable<object>{
    //return this.httpOptions;
    //console.log(this.httpOptions);
    return this.http.get(`${this.apiURL}/list/delete/${listId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  //Recipes
  addRecipe(listId: number, data: object) {
    return this.http.post(`${this.apiURL}/add-recipe/${listId}`,
      JSON.stringify(data),
      this.httpOptions);
  }
  //remove recipe
  deleteRecipe(id: number) {
    return this.http.post(`${this.apiURL}/remove-recipe/${id}`, null, this.httpOptions);
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
