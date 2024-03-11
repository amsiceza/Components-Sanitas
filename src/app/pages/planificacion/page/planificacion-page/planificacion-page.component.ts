import { Component, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';

@Component({
  selector: 'app-planificacion-page',
  templateUrl: './planificacion-page.component.html',
  styleUrl: './planificacion-page.component.scss'
})
export class PlanificacionPageComponent implements OnInit{

  breakfastRecipes: RecipesInterface[] | undefined;
  snackRecipes: RecipesInterface[] | undefined;
  lunchRecipes: RecipesInterface[] | undefined; 
  dinnerRecipes: RecipesInterface[] | undefined;

  constructor(
    private recipesService: RecipesService
  ) {}
  ngOnInit(): void {
    this.recipesService.recipes$.subscribe(recipes => {
      this.breakfastRecipes = this.recipesService.getRecipesByMealTime("Desayuno");
      this.snackRecipes = this.recipesService.getRecipesByMealTime("Almuerzo");
      this.lunchRecipes = this.recipesService.getRecipesByMealTime("Comida");
      this.dinnerRecipes = this.recipesService.getRecipesByMealTime("Cena");
    });
    this.recipesService.fetchRecipes();
  }

}
