import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipesInterface } from './recipes.interface';
import { recipesMock } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public recipes$ = this.recipesSubject.asObservable();

  private breakfastRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public breakfastRecipes$ = this.breakfastRecipesSubject.asObservable();

  private snackRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public snackRecipes$ = this.snackRecipesSubject.asObservable();

  private lunchRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public lunchRecipes$ = this.lunchRecipesSubject.asObservable();

  private dinnerRecipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  public dinnerRecipes$ = this.dinnerRecipesSubject.asObservable();

  private currentRecipes: RecipesInterface[] = [];

  constructor() { 
    this.fetchRecipes(); 
  }

  fetchRecipes(){
    this.currentRecipes = recipesMock;
    this.recipesSubject.next(this.currentRecipes);
    this.updateMealTimeRecipes();
  }

  private updateMealTimeRecipes() {
    this.breakfastRecipesSubject.next(this.getRecipesByMealTime("Desayuno"));
    this.snackRecipesSubject.next(this.getRecipesByMealTime("Almuerzo"));
    this.lunchRecipesSubject.next(this.getRecipesByMealTime("Comida"));
    this.dinnerRecipesSubject.next(this.getRecipesByMealTime("Cena"));
  }

  toggleFavorite(recipeId: number): void {
    this.currentRecipes = this.currentRecipes.map(recipe => {
      if (recipe.id === recipeId) {
        recipe.isFavorite = !recipe.isFavorite; 
      }
      return recipe;
    });
    this.recipesSubject.next(this.currentRecipes);
    this.updateMealTimeRecipes();
  }

  private getRecipesByMealTime(mealTime: string): RecipesInterface[] {
    return this.currentRecipes.filter(recipe => recipe.mealTime.includes(mealTime));
  }
}