import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  // ingredients: Ingredients[] = [
  //   new Ingredients('chicken', '1kg'),
  //   new Ingredients('Onion', '10 pc')
  //
  //
  // ];
  constructor(private slservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slservice.getIngredients();
    this.slservice.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  // OnIngredientAdded(ingredient: Ingredients) {
  //   this.ingredients.push(ingredient);
  // }

}
