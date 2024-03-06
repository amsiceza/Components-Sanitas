import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyProgressModule } from './components/survey-progress/survey-progress.module';
import { NutritionRecipeModule } from './components/nutrition-recipe/nutrition-recipe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyProgressModule,
    NutritionRecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
