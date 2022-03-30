import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ListsService} from "./lists.service";
import {List} from "./list";
import {Recipe} from "./recipe";


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  //@Input() listId!: number;
  form!: FormGroup
  lists: List[] = [];
  recipes: Recipe[] = [];
  constructor(private fb: FormBuilder, public listsService: ListsService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
    });

    this.listsService.getLists().subscribe((res ) => {
      this.lists = Object(res).data;
    })
  }
  getId(listId: number){
    this.listsService.getRecipes(listId).subscribe((res: Recipe[]) => {
      this.recipes = Object(res).data;
    console.log(this.recipes)
    })
    /*this.listId = this.elementRef.nativeElement.getAttribute('listId');
    console.log(this.listId);*/
  }

  submit() {

    const formData = this.form.getRawValue();
    const data = {
      title: formData.title,
    }
    this.listsService.createList(data).subscribe((res: any) => {
      //console.log('result');
      console.log(res);
      //localStorage.setItem('token', res.data.token);
      //this.router.navigate(['/login']);
    }, err => {
      console.log('error');
      console.log(err);
    });
    this.listsService.getLists().subscribe((res ) => {
      this.lists = Object(res).data;
    })
  }
}
