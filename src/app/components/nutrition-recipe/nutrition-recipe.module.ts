import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRecipeCardComponent } from './nutrition-recipe-card/nutrition-recipe-card.component';
import { register } from 'swiper/element/bundle';
import { NutritionRecipeViewComponent } from './nutrition-recipe-view/nutrition-recipe-view.component';

register();

@NgModule({
  declarations: [NutritionRecipeCardComponent, NutritionRecipeViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NutritionRecipeViewComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NutritionRecipeModule { }
