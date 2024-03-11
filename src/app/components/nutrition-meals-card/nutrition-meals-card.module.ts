import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionMealsCardComponent } from './component/nutrition-meals-card.component';

@NgModule({
  declarations: [
    NutritionMealsCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NutritionMealsCardComponent
  ]
})
export class NutritionMealsCardModule { }
