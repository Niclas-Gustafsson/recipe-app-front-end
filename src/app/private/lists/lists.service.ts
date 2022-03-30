import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {List} from "./list";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private apiURL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  }


  //Create list
  createList(data: object): Observable<List> {
    return this.http.post<List>(`${this.apiURL}/create-list/${localStorage.getItem("id")}`, data, this.httpOptions);
  }

  //Get user lists
  getLists(): Observable<List[]>  {
    return this.http.get<List[]>(`${this.apiURL}/lists/${localStorage.getItem('id')}`, this.httpOptions);
  }
  getRecipes(listId:number) {
    return this.http.get<Recipe[]>(`${this.apiURL}/list/${listId}`, this.httpOptions)
  }
}
