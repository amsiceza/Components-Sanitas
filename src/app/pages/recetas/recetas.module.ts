import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPageComponent } from './page/recetas-page/recetas-page.component';
import { NutritionRecipeModule } from '../../components/nutrition-recipe/nutrition-recipe.module';
import { SurveyProgressModule } from '../../components/survey-progress/survey-progress.module';
import { FormProgressComponent } from '../../components/survey-progress/form-progress/form-progress.component';



@NgModule({
  declarations: [
    RecetasPageComponent,
  ],
  imports: [
    CommonModule,
    NutritionRecipeModule,
    SurveyProgressModule
  ],
})
export class RecetasModule { }
