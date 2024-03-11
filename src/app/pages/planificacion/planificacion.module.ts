import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanificacionPageComponent } from './page/planificacion-page/planificacion-page.component';
import { NutritionWeekMealsComponent } from './components/nutrition-week-meals/nutrition-week-meals.component';



@NgModule({
  declarations: [
    PlanificacionPageComponent,
    NutritionWeekMealsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanificacionModule { }
