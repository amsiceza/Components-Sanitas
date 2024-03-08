import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, of } from 'rxjs';
import { RecipesInterface } from './recipes.interface';
import { recipesMock } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesSubject = new BehaviorSubject<RecipesInterface[]>([])
  public recipes$ = this.recipesSubject.asObservable()

  private breakfastRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public breakfastRecipes$ = this.breakfastRecipesSubject.asObservable();

  private snackRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public snackRecipes$ = this.snackRecipesSubject.asObservable();

  private lunchRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public lunchRecipes$ = this.lunchRecipesSubject.asObservable();

  private dinnerRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public dinnerRecipes$ = this.dinnerRecipesSubject.asObservable();


  constructor() { }

  fetchRecipes(){
    this.recipesSubject.next(recipesMock)
  }

  toggleFavorite(recipeId: number): void {
    const updatedRecipes = this.recipesSubject.getValue().map(recipe => {
      if (recipe.id === recipeId) {
        recipe.isFavorite = !recipe.isFavorite; 
      }
      return recipe;
    });
    
    this.recipesSubject.next(updatedRecipes);
  }
  
  getRecipesByMealTime(mealTime: string) {
    return this.recipesSubject.getValue().filter(recipe => recipe.mealTime.includes(mealTime));

  }

  getBreakfastRecipes() {
    this.breakfastRecipesSubject.next(this.getRecipesByMealTime("Desayuno"))
  }

  getSnackRecipes(): RecipesInterface[] {
    return this.getRecipesByMealTime("Almuerzo");
  }

  getLunchRecipes(): RecipesInterface[] {
    return this.getRecipesByMealTime("Comida");
  }

  getDinnerRecipes(): RecipesInterface[] {
    return this.getRecipesByMealTime("Cena");
  }
}
