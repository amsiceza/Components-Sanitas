import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaModule } from './components/encuesta-progreso/encuesta-progreso.module';
import { NutritionRecipeModule } from './components/nutrition-recipe/nutrition-recipe.module';
import { NutritionRecipeCardComponent } from './components/nutrition-recipe-card-wiew/nutrition-recipe-card/nutrition-recipe-card.component';
import { NutritionRecipeCardModule } from './components/nutrition-recipe-card-wiew/nutrition-recipe-card.module';
import { NutritionRecipeCardWiewComponent } from './components/nutrition-recipe-card-wiew/nutrition-recipe-card-wiew.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EncuestaModule,
    NutritionRecipeModule,
    NutritionRecipeCardModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
