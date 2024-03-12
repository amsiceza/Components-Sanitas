import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPageComponent } from './page/recetas-page/recetas-page.component';
import { NutritionRecipeModule } from '../../components/nutrition-recipe/nutrition-recipe.module';
import { SurveyProgressModule } from '../../components/survey-progress/survey-progress.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NutritionRecipeCardModule } from '../../components/nutrition-recipe-card-wiew/nutrition-recipe-card.module';



@NgModule({
  declarations: [
    RecetasPageComponent,
  ],
  imports: [
    CommonModule,
    NutritionRecipeModule,
    SurveyProgressModule, 
    ReactiveFormsModule,
    NutritionRecipeCardModule
  ],
})
export class RecetasModule { }
