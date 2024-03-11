import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanificacionPageComponent } from './page/planificacion-page/planificacion-page.component';
import { NutritionWeekMealsComponent } from './components/nutrition-week-meals/nutrition-week-meals.component';
import { NutritionRecipeCardModule } from '../../components/nutrition-recipe-card-wiew/nutrition-recipe-card.module';



@NgModule({
  declarations: [
    PlanificacionPageComponent,
    NutritionWeekMealsComponent,
   
  ],
  imports: [
    CommonModule,
     NutritionRecipeCardModule,
  ]
})
export class PlanificacionModule { }
