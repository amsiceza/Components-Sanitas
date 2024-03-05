import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecetasComponent } from './components/nutrition-recipe/card-recetas/card-recetas.component';
import { SliderRecetasComponent } from './components/nutrition-recipe/slider-recetas/slider-recetas.component';
import { NutritionDificultadComponent } from './components/nutrition-recipe/nutrition-dificultad/nutrition-dificultad.component';
import { register } from 'swiper/element/bundle';
import { FormProgresoComponent } from './components/encuesta-progreso/form-progreso/form-progreso.component';
import { ReactiveFormsModule } from '@angular/forms';
register();
@NgModule({
  declarations: [
    AppComponent,
    CardRecetasComponent,
    SliderRecetasComponent,
    NutritionDificultadComponent,
    FormProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
