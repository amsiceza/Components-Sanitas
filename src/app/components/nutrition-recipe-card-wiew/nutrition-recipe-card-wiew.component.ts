import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NutritionRecipeCardConfig } from './nutrition-recipe-card.interface';
import { RecipesService } from '../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../services/recipes-service/recipes.interface';

import { take } from 'rxjs';

@Component({
  selector: 'app-nutrition-recipe-card-wiew',
  templateUrl: './nutrition-recipe-card-wiew.component.html',
  styleUrl: './nutrition-recipe-card-wiew.component.scss'
})
export class NutritionRecipeCardWiewComponent implements OnChanges {
  @Input({ required: true }) recipes: RecipesInterface[] | undefined;
  @Input({ required: true }) mealTime: string | undefined;
  public configs: NutritionRecipeCardConfig[] = [];
  private recipesIds: number[] | undefined;
  

  constructor(
    private recipesService: RecipesService,
  ) {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipes']) {
      this.configs = this.recipes?.map((recipe) => ({
        id: recipe.id,
        backgroundImage: recipe.recipeImg,
        frontTitle: recipe.name,
        difficulty: recipe.difficulty,
        duration: recipe.duration,
        isFavorite: recipe.isFavorite,
        backTitle: "Grupo de alimentos",
        backInfo: recipe.groupAliments,
        mealTime: recipe.mealTime,

      })) || [];
    }
  }


  toggleFavorite(response: number) {
    this.recipesService.toggleFavorite(response);
  }


  changeRecipe(configId: number) {
    this.recipesIds = this.configs?.map((config) => config.id) || [];
    this.recipesService.getAlternativeRecipe$(this.recipesIds, this.mealTime!)
    .pipe(take(1))
    .subscribe((recipe) => {
    
      if (!recipe) {
        return;
      }


      const index = this.configs?.findIndex((config) => config.id === configId);
      if (index === -1) {
        return;
      }
      this.configs[index] = {
        id: recipe.id,
        backgroundImage: recipe.recipeImg,
        frontTitle: recipe.name,
        difficulty: recipe.difficulty,
        duration: recipe.duration,
        isFavorite: recipe.isFavorite,
        backTitle: "Grupo de alimentos",
        backInfo: recipe.groupAliments,
        mealTime: recipe.mealTime,
      };
    });
  }
}
