import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class NutritionRecipeCardWiewComponent implements OnChanges {
  @Input({ required: true }) recipes: RecipesInterface[] | undefined;
  @Input({ required: true }) mealTime: string | undefined;
  public configs: NutritionRecipeCardConfig[] | undefined;

  constructor(
    private recipesService: RecipesService,

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

  changeRecipe(response: number) {
    {
      const currentIds = this.recipes?.map((config) => config.id);
      if (currentIds !== undefined) {
        const alternativeRecipe = this.recipesService.getAlternativeRecipe$(currentIds, this.mealTime!);
        if (this.configs !== undefined && alternativeRecipe !== undefined) {
          this.configs.filter((config) => config.id === response).map((config) => {
            config.id = alternativeRecipe.id;
            config.backgroundImage = alternativeRecipe.recipeImg;
            config.frontTitle = alternativeRecipe.name;
            config.difficulty = alternativeRecipe.difficulty;
            config.duration = alternativeRecipe.duration;
            config.backTitle = "Grupo de alimentos";
            config.backInfo = alternativeRecipe.groupAliments;
            config.mealTime = alternativeRecipe.mealTime;

          });

        }
      }





    }
  }


}
