import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionMealsCardComponent } from './component/nutrition-meals-card.component';
import { TruncatePipe } from './pipe/truncate/truncate.pipe';

@NgModule({
  declarations: [
    NutritionMealsCardComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NutritionMealsCardComponent
  ]
})
export class NutritionMealsCardModule { }
