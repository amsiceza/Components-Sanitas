import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecetasComponent } from './card-recetas/card-recetas.component';
import { NutritionDificultadComponent } from './nutrition-dificultad/nutrition-dificultad.component';
import { SliderRecetasComponent } from './slider-recetas/slider-recetas.component';
import { register } from 'swiper/element/bundle';


register();


@NgModule({
  declarations: [CardRecetasComponent, NutritionDificultadComponent, SliderRecetasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderRecetasComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NutritionRecipeModule { }
