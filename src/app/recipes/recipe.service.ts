import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken biriyani', 'description of chicken biriyani',
      'https://www.ndtv.com/cooks/images/biryani.5.jpg', [
        new Ingredients('Tomato', 10 ),
        new Ingredients('potato', 10)
      ]),
    new Recipe('Chicken biriyani', 'description of chicken biriyani',
      'https://www.ndtv.com/cooks/images/biryani.5.jpg', [
        new Ingredients('Tomato', 10 ),
        new Ingredients('potato', 10)
      ])
  ];
  getRecipe() {
    return this.recipes.slice();
  }
}
