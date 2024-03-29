import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRecipeCardComponent } from './nutrition-recipe-card/nutrition-recipe-card.component';
import { NutritionRecipeCardWiewComponent } from './nutrition-recipe-card-wiew.component';
import { register } from 'swiper/element/bundle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


register();

@NgModule({
  declarations: [
   NutritionRecipeCardComponent,
   NutritionRecipeCardWiewComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NutritionRecipeCardWiewComponent,
    NutritionRecipeCardComponent,

  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NutritionRecipeCardModule { }
