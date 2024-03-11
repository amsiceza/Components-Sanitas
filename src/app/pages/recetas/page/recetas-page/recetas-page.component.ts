import { Component, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';
import { SurveyService } from '../../../../services/survey-service/survey.service';
import { QuestionSurveyInterface } from '../../../../services/survey-service/survey.interface';

@Component({
  selector: 'app-recetas-page',
  templateUrl: './recetas-page.component.html',
  styleUrls: ['./recetas-page.component.scss'], 
})
export class RecetasPageComponent implements OnInit {
  breakfastRecipes: RecipesInterface[] | undefined;
  snackRecipes: RecipesInterface[] | undefined;
  lunchRecipes: RecipesInterface[] | undefined; 
  dinnerRecipes: RecipesInterface[] | undefined;


  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.fetchRecipes();

    this.recipesService.recipes$.subscribe(recipes => {
      this.breakfastRecipes = this.recipesService.getRecipesByMealTime("Desayuno");
      this.snackRecipes = this.recipesService.getRecipesByMealTime("Almuerzo");
      this.lunchRecipes = this.recipesService.getRecipesByMealTime("Comida");
      this.dinnerRecipes = this.recipesService.getRecipesByMealTime("Cena");
    });


  }  
}


