import { Component, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';

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
    this.recipesService.breakfastRecipes$.subscribe(recipes => this.breakfastRecipes = recipes);
    this.recipesService.snackRecipes$.subscribe(recipes => this.snackRecipes = recipes);
    this.recipesService.lunchRecipes$.subscribe(recipes => this.lunchRecipes = recipes);
    this.recipesService.dinnerRecipes$.subscribe(recipes => this.dinnerRecipes = recipes);

    this.recipesService.fetchRecipes();
  }  
}

