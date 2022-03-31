import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() recipes!: Recipe[];
  @Output() emitRecipeId = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  sendRecipeId(recipeId: number) {
    this.emitRecipeId.emit(recipeId);
  }
}
