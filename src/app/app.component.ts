import { Component, OnInit } from '@angular/core';
import {PublicService} from "./public/public.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loggedIn: boolean = false;

  title = 'fe-recipe-app';
  constructor(private publicService: PublicService, private router: Router) {

  }
  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;

    if(this.loggedIn === false) {
      localStorage.removeItem('token');
    }
  }

  logout() {
    this.publicService.logout().subscribe(res => {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.router.navigate(['']);
    });
  }
}
