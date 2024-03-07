import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaModule } from './components/encuesta-progreso/encuesta-progreso.module';
import { NutritionRecipeModule } from './components/nutrition-recipe/nutrition-recipe.module';
import { NutritionMealsCardModule } from './components/nutrition-meals-card/nutrition-meals-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EncuestaModule,
    NutritionRecipeModule,
    NutritionMealsCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
