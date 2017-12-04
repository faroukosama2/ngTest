import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  recipe:Recipe;
  ingredients:Ingredient[];
  ngOnInit(): void {
    this.ingredients=[new Ingredient("apple",5)];
    this.recipe=new Recipe("rou2a","lol","lolimg",this.ingredients);
    console.log(this.recipe);
  }
}
