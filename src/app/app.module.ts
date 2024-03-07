import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyProgressModule } from './components/survey-progress/survey-progress.module';
import { NutritionRecipeModule } from './components/nutrition-recipe/nutrition-recipe.module';
import { NutritionMealsCardModule } from './components/nutrition-meals-card/nutrition-meals-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
