import { Component, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';

@Component({
  selector: 'app-recetas-page',
  templateUrl: './recetas-page.component.html',
  styleUrls: ['./recetas-page.component.scss'], 
})
export class RecetasPageComponent implements OnInit {
  breakfast: RecipesInterface[] | undefined; 
  snack: RecipesInterface[] | undefined;
  lunch: RecipesInterface[] | undefined;
  dinner: RecipesInterface[] | undefined;

  constructor(public recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.fetchRecipes();
    this.recipesService.getBreakfastRecipes();

    this.recipesService.breakfastRecipes$.subscribe((breakfastRecipes) => { 
      this.breakfast = breakfastRecipes; 
    });
  }
}

