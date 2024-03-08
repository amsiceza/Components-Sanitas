import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasPageComponent } from './page/recetas-page/recetas-page.component';
import { NutritionRecipeModule } from '../../components/nutrition-recipe/nutrition-recipe.module';



@NgModule({
  declarations: [
    RecetasPageComponent
    
  ],
  imports: [
    CommonModule,
    NutritionRecipeModule
  ],
})
export class RecetasModule { }
