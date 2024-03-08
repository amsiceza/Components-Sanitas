import { Component, Input, OnInit } from '@angular/core';
import { NutritionRecipeInterface } from '../nutrition-recipe.interface';
import { RecipesService } from '../../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../../services/recipes-service/recipes.interface';
@Component({
  selector: 'app-nutrition-recipe-view',
  templateUrl: './nutrition-recipe-view.component.html',
  styleUrl: './nutrition-recipe-view.component.scss'
})
export class NutritionRecipeViewComponent implements OnInit{
  @Input() recipes: RecipesInterface[] | undefined
  public config: NutritionRecipeInterface[] | undefined

  

  constructor(private recipesService: RecipesService){

  }

  ngOnInit(){
    
      this.config = this.recipes?.map(recipe => ({
        id: recipe.id,
        title: recipe.name,
        difficulty: recipe.difficulty,
        duration: recipe.duration,
        liked: recipe.isFavorite,
        backgroundImage: recipe.recipeImg,
        mealTime: recipe.mealTime
      }));
    
  }

  
  toggleFavorite(response: number){
      this.recipesService.toggleFavorite(response)
  }

  

  


}
