import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe('Chicken biriyani', 'description of chicken biriyani', 'https://www.ndtv.com/cooks/images/biryani.5.jpg'),
  //   new Recipe('Chicken biriyani', 'description of chicken biriyani', 'https://www.ndtv.com/cooks/images/biryani.5.jpg')
  //
  // ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  //
  //
  // }

}
