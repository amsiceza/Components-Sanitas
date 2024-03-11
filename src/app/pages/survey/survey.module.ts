import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRecipeModule } from '../../components/nutrition-recipe/nutrition-recipe.module';
import { SurveyProgressModule } from '../../components/survey-progress/survey-progress.module';
import { SurveyPageComponent } from './page/survey-page/survey-page.component';



@NgModule({
  declarations: [
    SurveyPageComponent
  ],
  imports: [
    CommonModule,
    NutritionRecipeModule,
    SurveyProgressModule
  ],
})
export class SurveyModule { }