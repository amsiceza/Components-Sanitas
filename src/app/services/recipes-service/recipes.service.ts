import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RecipesInterface } from './recipes.interface';
import { recipesMock } from './recipes.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public recipes$ = this.recipesSubject.asObservable();

  private currentRecipes: RecipesInterface[] = [];

  constructor() { }

  fetchRecipes() {
    this.currentRecipes = recipesMock;
    this.recipesSubject.next(this.currentRecipes);
  }

  toggleFavorite(recipeId: number): void {
    this.currentRecipes = this.currentRecipes.map(recipe => {
      if (recipe.id === recipeId) {
        recipe.isFavorite = !recipe.isFavorite;
      }

      return recipe;
    });
    this.recipesSubject.next(this.currentRecipes);
  }

  getRecipesByMealTime(mealTime: string): RecipesInterface[] {
    return this.currentRecipes.filter(recipe => recipe.mealTime.includes(mealTime));
  }

  getBreakfastRecipes$() {
    return this.recipes$.pipe(
      map(recipes => this.getRecipesByMealTime("Desayuno"))
    );
  }

  getSnackRecipes$() {
    return this.recipes$.pipe(
      map(recipes => this.getRecipesByMealTime("Almuerzo"))
    );
  }

  getLunchRecipes$() {
    return this.recipes$.pipe(
      map(recipes => this.getRecipesByMealTime("Comida"))
    );
  }

  getDinnerRecipes$() {
    return this.recipes$.pipe(
      map(recipes => this.getRecipesByMealTime("Cena"))
    );
  }


getAlternativeRecipe$(ids: number[], mealTime: string): Observable<RecipesInterface | undefined> {
  return this.recipes$.pipe(
    map(recipes => {
      return this.getRecipesByMealTime(mealTime).filter(recipe => !ids.includes(recipe.id))[0];
    })
  );
}

  
}
