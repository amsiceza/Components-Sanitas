import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanificacionPageComponent } from './page/planificacion-page/planificacion-page.component';
import { NutritionRecipeCardModule } from '../../components/nutrition-recipe-card-wiew/nutrition-recipe-card.module';



@NgModule({
  declarations: [
    PlanificacionPageComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class PlanificacionModule { }
