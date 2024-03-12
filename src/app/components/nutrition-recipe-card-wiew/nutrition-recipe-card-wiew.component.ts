import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NutritionRecipeCardConfig } from './nutrition-recipe-card.interface';
import { RecipesService } from '../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../services/recipes-service/recipes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition-recipe-card-wiew',
  templateUrl: './nutrition-recipe-card-wiew.component.html',
  styleUrl: './nutrition-recipe-card-wiew.component.scss'
})
export class NutritionRecipeCardWiewComponent implements OnInit {
  @Input({ required: true }) recipe!: RecipesInterface;
  @Input({ required: true }) mealTime!: string;
  public config!: NutritionRecipeCardConfig;
  

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {
  
  }

  ngOnInit(): void {
    this.config = {
      id: this.recipe.id,
      backgroundImage: this.recipe.recipeImg,
      frontTitle: this.recipe.name,
      difficulty: this.recipe.difficulty,
      duration: this.recipe.duration,
      isFavorite: this.recipe.isFavorite,
      backTitle: "Grupo de alimentos",
      backInfo: this.recipe.groupAliments,
      mealTime: this.recipe.mealTime,
      isRecipes: this.router.url.includes("recetas")
    }
  }


  toggleFavorite() {
    this.recipesService.toggleFavorite(this.config.id);
    this.config = {
      ...this.config,
      isFavorite: !this.config.isFavorite,
    }
  }


  changeRecipe() {
    const newRecipe = this.recipesService.getAlternativeRecipe(this.config.id, this.mealTime!)

    this.config = {
      id: newRecipe.id,
      backgroundImage: newRecipe.recipeImg,
      frontTitle: newRecipe.name,
      difficulty: newRecipe.difficulty,
      duration: newRecipe.duration,
      isFavorite: newRecipe.isFavorite,
      backTitle: "Grupo de alimentos",
      backInfo: newRecipe.groupAliments,
      mealTime: newRecipe.mealTime,
    }
    
  }
}
