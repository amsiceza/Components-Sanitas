import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RecipesInterface } from './recipes.interface';
import { recipesMock } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public recipes$ = this.recipesSubject.asObservable();

  private currentRecipes: RecipesInterface[] = [];

  constructor() { 
    this.fetchRecipes(); 
  }

  fetchRecipes(){
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
  getAlternativeRecipe$(id: number, mealTime: string[]) {
    const mealTimeString = mealTime[0];
    const alternative = this.recipes$.pipe(
      map(recipes => this.getRecipesByMealTime(mealTimeString).find(recipe => recipe.id !== id))
    );

    return alternative;
  }
}
