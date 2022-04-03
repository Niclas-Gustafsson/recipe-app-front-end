import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ListsService} from "./lists.service";
import {List} from "./list";
import {Recipe} from "./recipe";
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  form!: FormGroup
  lists: List[] = [];
  recipes: Recipe[] = [];
  isClicked: boolean = false;
  listTitle!: string;
  constructor(private fb: FormBuilder, public listsService: ListsService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
    });

    this.listsService.getLists().subscribe((res ) => {
      this.lists = Object(res).data;
      });



  }
  //Calls for the recipes with the id of the clicked list and updates the recipes-property
  getId(listId: number){
    this.listsService.getRecipes(listId).subscribe((res: Recipe[]) => {
      this.recipes = Object(res).data;
      this.isClicked = true;
      console.log(this.recipes)
      //Push recipes to the "state" browser history property "data" and set a new property of type array named recipes. This to be able to fetch the history data property in the child component.
      //history.state.data.push(this.recipes);
      //console.log(this.recipes)
    });
    /*this.listId = this.elementRef.nativeElement.getAttribute('listId');
    console.log(this.listId);*/
  }

  submit() {

    const formData = this.form.getRawValue();
    const data = {
      title: formData.title,
    }
    this.listsService.createList(data).subscribe((res: any) => {
      console.log(res.data.id);
      /*this.lists = this.lists.map((item) => this.lists = item)*/
      //console.log('result');
      /*console.log(res);*/
      //localStorage.setItem('token', res.data.token);
      //this.router.navigate(['/login']);
    });
    this.listsService.getLists().subscribe((res ) => {
      this.lists = Object(res).data;
    });
  }

  deleteList(listId: number) {
    this.listsService.deleteList(listId).subscribe((res: any) => {
      this.lists = this.lists.filter((item) => item.id !== listId)
      /*console.log(res);*/
    });
  }
}
