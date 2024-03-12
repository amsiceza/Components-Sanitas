import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipesInterface } from './recipes.interface';
import { recipesMock } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipesSubject = new BehaviorSubject<RecipesInterface[]>([]);
  private currentRecipes: RecipesInterface[] = [];
  private currentFilter: string = '';

  public recipes$: Observable<RecipesInterface[]> = this.recipesSubject.asObservable();
  public filteredRecipes$: Observable<RecipesInterface[]> = this.recipes$.pipe(
    map(recipes => this.applyFilter(recipes))
  );

  fetchRecipes(): void {
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

  filterRecipes(input: string): void {
    this.currentFilter = input;
    this.recipesSubject.next(this.currentRecipes);
  }

  getRecipesByMealTime(mealTime: string): RecipesInterface[] {
    return this.currentRecipes.filter(recipe => recipe.mealTime.includes(mealTime));
  }

  getRecipesByMealTime$(mealTime: string): Observable<RecipesInterface[]> {
    return this.filteredRecipes$.pipe(
      map(recipes => this.getRecipesByMealTime(mealTime))
    );
  }

  private applyFilter(recipes: RecipesInterface[]): RecipesInterface[] {
    return recipes.filter((item) =>
      item.name.toLowerCase().includes(this.currentFilter.toLowerCase())
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


