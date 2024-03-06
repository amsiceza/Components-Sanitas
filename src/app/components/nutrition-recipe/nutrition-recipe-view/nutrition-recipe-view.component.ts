import { Component, OnInit } from '@angular/core';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';
import { recipesMock } from '../nutrition-recipe-card/mock';

@Component({
  selector: 'app-nutrition-recipe-view',
  templateUrl: './nutrition-recipe-view.component.html',
  styleUrl: './nutrition-recipe-view.component.scss'
})
export class NutritionRecipeViewComponent implements OnInit{
  recipesArray: NutritionRecipeInterface[] = recipesMock

  ngOnInit(){
  }
}
