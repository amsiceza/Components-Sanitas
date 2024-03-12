import { Component, HostListener, OnInit } from '@angular/core';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';
import { FormControl } from '@angular/forms';

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

  isScreenSmall: boolean = false;

  searchCoursesControl = new FormControl();

  constructor(private recipesService: RecipesService) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.recipesService.fetchRecipes();

    this.recipesService.recipes$.subscribe((recipes) => {
      this.breakfastRecipes =
        this.recipesService.getRecipesByMealTime('Desayuno');
      this.snackRecipes = this.recipesService.getRecipesByMealTime('Almuerzo');
      this.lunchRecipes = this.recipesService.getRecipesByMealTime('Comida');
      this.dinnerRecipes = this.recipesService.getRecipesByMealTime('Cena');
    });

    this.searchCoursesControl.valueChanges.subscribe((searchValue) => {
      if (searchValue || searchValue == '') {
        this.recipesService.filterRecipes(searchValue);
        this.recipesService.filteredRecipes$.subscribe((filteredRecipes) => {
          this.breakfastRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Desayuno')
          );
          this.snackRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Almuerzo')
          );
          this.lunchRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Comida')
          );
          this.dinnerRecipes = filteredRecipes.filter((recipe) =>
            recipe.mealTime.includes('Cena')
          );
        });
      } else {
        this.recipesService.fetchRecipes();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 700;
  }
}
