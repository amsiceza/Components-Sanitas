import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DIAS, MESES } from '../../../../constants/dates.constants';
import { MEALS } from '../../../../constants/meals.constants';
import { RecipesService } from '../../../../services/recipes-service/recipes.service';
import { RecipesInterface } from '../../../../services/recipes-service/recipes.interface';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-nutrition-week-meals',
  templateUrl: './nutrition-week-meals.component.html',
  styleUrl: './nutrition-week-meals.component.scss'
})
export class NutritionWeekMealsComponent implements OnInit, OnDestroy{
  @Input({required: true}) day!: Date;
  spanishDays = DIAS;
  spanishMonths = MESES;
  mealsButtons: string[] = [];
  recipes: RecipesInterface[] = [];
  recipesSubscription!: Subscription;
  mealTime: string = MEALS.BREAKFAST;

  constructor( private recipesService: RecipesService ) {}


  ngOnInit() {
    Object.values(MEALS).forEach((meal) => {
      this.mealsButtons.push(meal);
    });
   
    this.recipesSubscription = this.recipesService.recipes$.subscribe((recipes) => {
      this.uppdateRecipes(this.mealTime);
    });
 
  }
  
  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  public handleMealClick(meal: string) {
    this.mealTime = meal;
    this.uppdateRecipes(meal);
  }

  private uppdateRecipes(mealTime: string) {
    this.recipes = this.recipesService.getRecipesByMealTime(mealTime)
    .slice(0, 3);
  }
}
