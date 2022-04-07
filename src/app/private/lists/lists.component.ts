import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListsService} from "./lists.service";
import {List} from "./list";
import {Recipe} from "./recipe";


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
  isValid!: boolean;
  errMsg: string = '';
 /* listTitle!: string;*/
  constructor(private fb: FormBuilder, public listsService: ListsService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
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

    });
  }

  submit() {

    const formData = this.form.getRawValue();
    const data = {
      title: formData.title,
    }
    if(!this.form.valid) {
      this.isValid = false;
      this.errMsg = "Please enter a name for your list."
    } else {
    this.isValid = true;
    this.listsService.createList(data).subscribe((res: any) => {

      this.listsService.getLists().subscribe((res ) => {
        this.lists = Object(res).data;
      });

    });
    }
  }

  deleteList(listId: number) {
    this.listsService.deleteList(listId).subscribe((res: any) => {
      this.lists = this.lists.filter((item) => item.id !== listId)
    });
  }
}
