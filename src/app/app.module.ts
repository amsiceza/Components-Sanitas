import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyProgressModule } from './components/survey-progress/survey-progress.module';
import { NutritionRecipeModule } from './components/nutrition-recipe/nutrition-recipe.module';
import { NutritionMealsCardModule } from './components/nutrition-meals-card/nutrition-meals-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NutritionRecipeCardModule } from './components/nutrition-recipe-card-wiew/nutrition-recipe-card.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyProgressModule,
    NutritionRecipeModule,
    NutritionMealsCardModule,
    NutritionRecipeModule,
    NutritionRecipeCardModule,
    BrowserAnimationsModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
