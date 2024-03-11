import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NutritionRecipeCardConfig } from './nutrition-recipe-card.interface';
import { nutritionRecipeCardMock } from './nutrition-recipe-card-mock';
import { RecipesService } from '../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../services/recipes-service/recipes.interface';
import { group } from '@angular/animations';

@Component({
  selector: 'app-nutrition-recipe-card-wiew',
  templateUrl: './nutrition-recipe-card-wiew.component.html',
  styleUrl: './nutrition-recipe-card-wiew.component.scss'
})
export class NutritionRecipeCardWiewComponent implements OnChanges{
  @Input({required: true}) recipes: RecipesInterface[] | undefined;
  public configs : NutritionRecipeCardConfig[] | undefined;
  
  constructor(
    private recipesService: RecipesService
  ) { }

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
      
      }));
    }
  }

  
    toggleFavorite(response: number) {
      this.recipesService.toggleFavorite(response);
    }

    changeRecipe(response: {id: number, mealTime: string[]}){ {
      this.recipesService.getAlternativeRecipe$(response.id, response.mealTime).subscribe((recipe) => {
        const recipeIndex = this.configs?.findIndex((config) => config.id === response.id);
        if (this.configs !== undefined && recipe !== undefined && recipeIndex !== undefined && recipeIndex !== -1) {
          this.configs[recipeIndex].backgroundImage = recipe.recipeImg;
          this.configs[recipeIndex].frontTitle = recipe.name;
          this.configs[recipeIndex].difficulty = recipe.difficulty;
          this.configs[recipeIndex].duration = recipe.duration;
          this.configs[recipeIndex].backTitle = "Grupo de alimentos";
          this.configs[recipeIndex].backInfo = recipe.groupAliments;
        }
      });
  
  }
}


}
