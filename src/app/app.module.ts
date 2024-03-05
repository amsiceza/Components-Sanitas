import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecetasComponent } from './components/card-recetas/card-recetas.component';
import { SliderRecetasComponent } from './components/slider-recetas/slider-recetas.component';
import { NutritionDificultadComponent } from './components/nutrition-dificultad/nutrition-dificultad.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    CardRecetasComponent,
    SliderRecetasComponent,
    NutritionDificultadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
