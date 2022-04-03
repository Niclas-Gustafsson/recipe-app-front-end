import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private apiURL = 'http://127.0.0.1:8000/api';
  loggedInAreWe!: boolean;

  constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      })
    }

  //login user
  login(data: object) {
    return this.http.post(`${this.apiURL}/login`, data);
  }
  //register user
  register(data: object) {
    return this.http.post(`${this.apiURL}/register`, data, this.httpOptions);
  }
  //logout user
  logout() {
    return this.http.post(`${this.apiURL}/logout`, null, this.httpOptions);

  }
  //get logged in user information.
}
